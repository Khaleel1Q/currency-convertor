import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    DropdownComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule
  ],
  exports:[
    DropdownComponent
  ]
})
export class ComponentsModule { }
