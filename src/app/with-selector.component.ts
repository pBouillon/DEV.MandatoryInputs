import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-with-selector[value]',
  standalone: true,
  template: '<div>Value is: {{ value }}</div>'
})
export class WithSelectorComponent {
  @Input() value!: number;
}
