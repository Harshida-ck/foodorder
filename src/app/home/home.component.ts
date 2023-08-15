import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Foods[] = []
  constructor(private foodService: FoodService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      } else {
        this.foods = this.foodService.getAll();
      }
    })
  }

}
