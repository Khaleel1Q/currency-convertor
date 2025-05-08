import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    let input = (event.target as HTMLInputElement).value;

    // Remove all non-digit characters
    input = input.replace(/\D/g, '');

    // Limit to 12 digits
    if (input.length > 12) {
      input = input.substring(0, 12);
    }

    this.value = input;
    this.valueChange.emit(this.value);
  }
}
