import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const materials = [
  MatButtonModule
];

@NgModule({

  imports: [
    materials
  ],
  exports:[materials]
})
export class MaterialsModule { }
