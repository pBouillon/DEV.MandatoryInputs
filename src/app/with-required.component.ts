import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-with-required',
  standalone: true,
  template: '<div>Value is: {{ value }}</div>'
})
export class WithRequiredComponent {
  @Input({ required: true }) value!: number;
}
