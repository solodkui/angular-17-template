// * Base
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

// * Components
import HeaderComponent from './components/header/header.component';

const components = [HeaderComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...components, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />
  `,
})
export default class AppComponent {}
