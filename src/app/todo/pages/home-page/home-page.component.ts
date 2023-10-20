import { Component } from '@angular/core';

@Component({
  selector: 'home-app',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  linkItems = [
    { title: 'All', path: 'all-task' },
    { title: 'Active', path: 'active-task' },
    { title: 'Completed', path: 'complete-task' },
  ];
}
