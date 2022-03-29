import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { GhHomeComponent } from './components/gh-home/gh-home.component';



@NgModule({
  declarations: [
    GhHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
   GhHomeComponent
  ]
})
export class GhUsersModule { }
