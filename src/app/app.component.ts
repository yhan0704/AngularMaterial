import { AppRoutingModule } from './app-routing.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public routeLinks = [];
  public activeLinkIndex = 0;

  constructor(private router: AppRoutingModule){
    this.routeLinks = [
      {label: 'Shopping List', link: 'shopping-list'},
      {label: 'Header', link: 'header'}
    ];
  }

  title = 'shoppingExercise';
}
