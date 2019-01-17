import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

;
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  Subscription: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.Subscription = this.shoppingService.ingredientsChanged.subscribe(
      (newingredients: Ingredient[]) => {
        this.ingredients = newingredients;
      }
    );
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  addIng(e: Ingredient) {
    //this.ingredients.push(e);
  }

}
