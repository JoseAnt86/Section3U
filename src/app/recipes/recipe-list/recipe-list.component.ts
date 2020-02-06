import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://www.veganricha.com/wp-content/uploads/2019/12/Sticky-Sesame-Cauliflower-veganricha-5837-2.jpg')


  ];

  constructor() {
  }

  ngOnInit() {
  }

}
