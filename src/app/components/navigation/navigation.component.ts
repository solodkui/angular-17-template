// * Base
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

// * Services
import NavigationService from './navigation.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  imports: [RouterLink],
  providers: [NavigationService],
})
export default class NavigationComponent {
  protected readonly list = inject(NavigationService).list;
}
