import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes = [
    new Recipe(1, 'Black Noodle', 'blar blar balr...', 'https://live.staticflickr.com/3231/2604691568_68922a4c7e_b.jpg'),
    new Recipe(2, 'Black Noodle', 'blar blar balr...', 'https://live.staticflickr.com/3231/2604691568_68922a4c7e_b.jpg'),
    new Recipe(3, 'Black Noodle', 'blar blar balr...', 'https://live.staticflickr.com/3231/2604691568_68922a4c7e_b.jpg'),
    new Recipe(4, 'Black Noodle', 'blar blar balr...', 'https://live.staticflickr.com/3231/2604691568_68922a4c7e_b.jpg'),
    new Recipe(5, 'Black Noodle', 'blar blar balr...', 'https://live.staticflickr.com/3231/2604691568_68922a4c7e_b.jpg'),
    new Recipe(6, 'Black Noodle', 'blar blar balr...', 'https://live.staticflickr.com/3231/2604691568_68922a4c7e_b.jpg'),
    new Recipe(7, 'Black Noodle', 'blar blar balr...', 'https://live.staticflickr.com/3231/2604691568_68922a4c7e_b.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
