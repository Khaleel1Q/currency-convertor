import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: false,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() items: { CODE: string, DESCRIPTION: any }[] = [];
  @Input() labelText: string = '';
  @Input() control: FormControl = new FormControl();

  @Output() selectedValue = new EventEmitter<string>();

  onSelectionChange(value: string) {
    this.selectedValue.emit(value);
  }
}
