// import { Injectable } from "@angular/core";
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinList.service';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class RecipeService {

    private recipeList: Recipe[] = [
        new Recipe(
            'Soya Chaap',
            'Healthy and tasty Chaaps',
            'https://smedia2.intoday.in/aajtak/images/stories/092017/soya-chaap_pakwangali_520_091217101757.jpg',
            [new Ingredient('soya', 10),
            new Ingredient('Mustard Sauce', 5)]
        ),
        new Recipe(
            'Fafda',
            'Gaarma Garam gujrati fafde',
            'https://i.ytimg.com/vi/B4l1ory9l4s/hqdefault.jpg',
            [new Ingredient('Besan', 1),
            new Ingredient('oil', 1)]
        )
      ];

    constructor(private slService: ShoppingListService) {}
    getRecipes(){
        return this.recipeList.slice();
    }

    getRecipe(id: number) {
        return this.recipeList[id];
    }

    addToShoppingList(ingredient: Ingredient[]) {
        this.slService.addIngredients(ingredient);
    }
}