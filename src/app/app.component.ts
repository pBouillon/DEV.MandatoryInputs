import { Component } from '@angular/core';

import { WithNgIfComponent } from './with-ngif.component';
import { WithNgOnInitComponent } from './with-ngoninit.component';
import { WithRequiredComponent } from './with-required.component';
import { WithSelectorComponent } from './with-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WithNgIfComponent,
    WithNgOnInitComponent,
    WithRequiredComponent,
    WithSelectorComponent,
  ],
  template: `
    <h1>Mandatory inputs</h1>

    <h2>Using <code>NgIf</code></h2>
    <!-- Will not show anything: -->
    <!-- <app-with-ngif /> -->

    <!-- Will work fine: -->
    <app-with-ngif [value]="3" />

    <h2>Using <code>NgOnInit</code></h2>
    <!-- Will throw a runtime error: -->
    <!-- <app-with-ngoninit /> -->

    <!-- Will work fine: -->
    <app-with-ngoninit [value]="3" />

    <h2>Using the template</h2>
    <!-- Will throw a compile time error: -->
    <!-- <app-with-selector /> -->

    <!-- Will work fine: -->
    <app-with-selector [value]="3" />

    <h2>
      Using <code>{{ '{' }} required: true {{ '}' }}</code>
    </h2>
    <!-- Will throw a compile time error: -->
    <!-- <app-with-required /> -->

    <!-- Will work fine: -->
    <app-with-required [value]="3" />
  `,
})
export class AppComponent {}
