import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-ngoninit',
  standalone: true,
  template: '<div>Value is: {{ value }}</div>'
})
export class WithNgOnInitComponent implements OnInit {
  @Input() value!: number;

  ngOnInit(): void {
    if (this.value === undefined) {
      throw new Error('`value` is required');
    }
  }
}
