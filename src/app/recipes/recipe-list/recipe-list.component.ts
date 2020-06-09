import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes = [
    new Recipe(1, 'Black Noodle', 'Noodle w/ pork & black bean sauce', 'https://live.staticflickr.com/3231/2604691568_68922a4c7e_b.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe(2, 'Zzam pong', 'Noodle w/ vege & beef spicy seafood soup', 'https://cdn.pixabay.com/photo/2016/04/05/03/52/spicy-seafood-1308693_960_720.jpg'),
    new Recipe(3, 'Gochu Jjampong', 'Noodle w/ vege & extra spicy seafood soup', 'https://cdn.pixabay.com/photo/2014/06/18/09/33/spicy-seafood-371000_960_720.jpg'),
    new Recipe(4, 'Udon', 'Noodle w/ vege & seafood egg soup', 'https://cdn.pixabay.com/photo/2017/04/04/00/37/japanese-food-2199963_960_720.jpg'),
    new Recipe(5, 'Bokkum Bap', 'Fried rice w/ vegetable', 'https://upload.wikimedia.org/wikipedia/commons/7/75/Korean_Chinese_fried_rice_2.jpg'),
    new Recipe(6, 'Jabchae Bap', 'Rice w/ shredded pork vegetable & crystal noodle', 'https://live.staticflickr.com/4184/34673795605_6747e4a4fc_b.jpg'),
    new Recipe(7, 'Tangsooyuk', 'Fried Pork with Sweet & Sour Sauce', 'https://cdn.pixabay.com/photo/2016/01/07/05/36/sweet-and-sour-pork-1125334_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
