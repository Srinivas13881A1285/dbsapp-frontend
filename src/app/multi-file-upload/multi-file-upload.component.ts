import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss']
})
export class MultiFileUploadComponent implements OnInit {
  uploadForm: FormGroup;

  public uploader:FileUploader = new FileUploader({
    isHTML5: true,
    itemAlias:'files'
  });
  title: string = 'Angular File Upload';
  constructor(private fb: FormBuilder, private http: HttpClient ) { }

  uploadSubmit(){
        for (let i = 0; i < this.uploader.queue.length; i++) {
          let fileItem = this.uploader.queue[i]._file;
          if(fileItem.size > 10000000){
            alert("Each File should be less than 10 MB of size.");
            return;
          }
        }

        const multipleFiles  = new FormData();
        
        for (let j = 0; j < this.uploader.queue.length; j++) {
          let data = new FormData();
          let fileItem = this.uploader.queue[j]._file;
          console.log(fileItem.name);
          data.append('file', fileItem);
          data.append('fileSeq', 'seq'+j);
          data.append( 'dataType', this.uploadForm.controls.type.value);
          this.uploadFile(data).subscribe(this.successCallBack);
        }
        // let data = this.uploader.queue;
        // let mulfiles = data;
        // this.uploadFile(mulfiles).subscribe(this.successCallBack);
      
        this.uploader.clearQueue();
  }

  successCallBack = (data):any=>{
    alert(data.fileName+" successfully uploaded");
    console.log(data);
  }

  uploadFile(data: FormData): Observable<any> {
    return this.http.post('http://localhost:8080/uploadFileDB', data);
  }

  // uploadFile(mulfiles:any):Observable<any>{
  //   return this.http.post('http://localhost:8080/uploadMultipleFilesDB',mulfiles);
  // }
  

  ngOnInit() {
    this.uploadForm = this.fb.group({ 
      document: [null, null],
      type:  [null, Validators.compose([Validators.required])]
    });
  }

}
