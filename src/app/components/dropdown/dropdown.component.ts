import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../../main/api.service';
@Component({
  selector: 'app-dropdown',
  standalone: false,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent implements OnInit {
  @Input() items: { CODE: string, DESCRIPTION: any }[] = [];
  @Input() labelText: string = '';
  sourceCountry:string;
  targetCountry:string;
  @Output() selectedValue = new EventEmitter<{ CODE: string, DESCRIPTION: any }>();
  @Input() isTarget:boolean; 
  constructor(private api:ApiService){}
ngOnInit(): void {
this.api.sourceCountry.subscribe(sourceCountry=>this.sourceCountry=sourceCountry)
}
  onSelectionChange(value: { CODE: string, DESCRIPTION: any }) {
    if(!this.isTarget){
      this.api.sourceCountry.next(value.CODE)
    }
    this.selectedValue.emit(value);
  }
  
  get selectedCountry(): string {
    return this.isTarget ? this.targetCountry : this.sourceCountry;
  }

  set selectedCountry(val: string) {
    if (this.isTarget) {
      this.targetCountry = val;
    } else {
      this.sourceCountry = val;
    }
}
}
