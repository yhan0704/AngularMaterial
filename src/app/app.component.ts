import { AppRoutingModule } from './app-routing.module';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

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
