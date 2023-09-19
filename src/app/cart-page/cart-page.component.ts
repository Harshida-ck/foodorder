import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!: Cart;
  constructor(private cartService: CartService) { 
    this.setCart()
  }

  ngOnInit(): void {
  }

  async setCart() {
    try {
      // Fetch the cart data from the cartService
      this.cart = this.cartService.getCart(); // Assuming getCart() returns a Cart object directly
    } catch (error) {
      console.error('Error fetching cart data', error);
    }
  }
  

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); // instance load data
  }

  changeQuantity(cartItem: CartItem, quantityInString: string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }

}
