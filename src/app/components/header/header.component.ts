// * Base
import { RouterLink } from '@angular/router';
import { Component, signal } from '@angular/core';

// * Components
import NavigationComponent from '../navigation/navigation.component';

const components = [NavigationComponent];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...components, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export default class HeaderComponent {
  protected readonly show = signal<boolean>(true);

  protected toggleShow() {
    this.show.update((v) => !v);
  }
}
