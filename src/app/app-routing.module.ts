import { AboutComponent } from './about/about.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'shopping-list/shopping-edit', component: ShoppingEditComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/recipe-list', component: RecipeListComponent },
  { path: 'recipes/recipe-list/:id', component: RecipeItemComponent },
  { path: 'recipes/recipe-detail', component: RecipeDetailComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
