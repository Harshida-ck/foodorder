import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartitem';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  /**
   * Method to add items to cart
   * @param food 
   * @returns 
   */
   addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
  
    if (cartItem) {
      // If the same food item is already in the cart, increase its quantity
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
  
    // If the food item is not in the cart, create a new cart item and add it to the cart
    this.cart.items.push(new CartItem(food));
  }
  

  /**
   * Method to remove items from cart
   * @param foodId 
   */
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  /**
   * Method to change the quantity of cart items
   * @param quantity 
   * @param foodId 
   * @returns 
   */
  changeQuantity(quantity: number, foodId: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if (!cartItem) {
      return;
    }
    cartItem.quantity = quantity
  }

  /**
   * Method to get cart items
   * @returns 
   */
  getCart(): Cart {
    return this.cart;
  }
}
