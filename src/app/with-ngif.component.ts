import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-with-ngif',
  standalone: true,
  imports: [NgIf],
  template: '<div *ngIf="isDefined">Value is: {{ value }}</div>'
})
export class WithNgIfComponent {
  @Input() value!: number;

  get isDefined(): boolean {
    return typeof this.value === 'number';
  }
}
