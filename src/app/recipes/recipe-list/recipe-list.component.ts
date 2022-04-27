import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe ','This is a test recipe ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2CO9NSzi_0_mPs6GCt7G_CbPjUkiky6ovA&usqp=CAU'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
