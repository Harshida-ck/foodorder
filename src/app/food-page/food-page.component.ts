import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: Foods
  constructor(private route: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) { 
      route.params.subscribe((params)=> {
        if(params['id']){
          this.food= foodService.getFoodById(params['id'])
        }
      }
      )
    }

  ngOnInit(): void {
  }

  /**
   * Method to navigate to cart page on clicking Add to Cart button
   */
  addToCart(){
    this.cartService.addToCart(this.food);
    console.log(this.food)
    this.router.navigateByUrl('/cart-page')
  }

}
