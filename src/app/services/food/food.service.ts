import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 300,
        favourite: false,
        star: 4,
        tags: ['fast food', 'pizza', 'lunch'],
        imageUrl: '/assets/food-1.jpeg',
        cookTime: '40-50',
        origins: ['Italy']
      },
      {
        id: 2,
        name: 'Burger',
        price: 150,
        favourite: true,
        star: 4.5,
        tags: ['fast food', 'Burger', 'lunch'],
        imageUrl: '/assets/food-2.jpeg',
        cookTime: '10-20',
        origins: ['Germany']
      },
      {
        id: 3,
        name: 'Sandwich',
        price: 150,
        favourite: false,
        star: 3,
        tags: ['fast food', 'sandwich', 'lunch'],
        imageUrl: '/assets/food-3.jpeg',
        cookTime: '10-20',
        origins: ['Engalnd']
      },
      {
        id: 4,
        name: 'Waffles',
        price: 200,
        favourite: false,
        star: 4,
        tags: ['fast food', 'waffles', 'Breakfast'],
        imageUrl: '/assets/food-4.jpeg',
        cookTime: '10-15',
        origins: ['Belgium']
      },
      {
        id: 5,
        name: 'Pancake',
        price: 200,
        favourite: false,
        star: 4,
        tags: ['fast food', 'pancake', 'breakfast'],
        imageUrl: '/assets/food-5.jpeg',
        cookTime: '10-15',
        origins: ['Greece']
      },
      {
        id: 6,
        name: 'Mojito',
        price: 150,
        favourite: false,
        star: 4,
        tags: ['fast food', 'Mojito', 'Drink'],
        imageUrl: '/assets/food-6.jpeg',
        cookTime: '15-20',
        origins: ['Cuba']
      },
      {
        id: 7,
        name: 'Loaded Fries',
        price: 300,
        favourite: false,
        star: 4,
        tags: ['fast food', 'loade fries', 'snack'],
        imageUrl: '/assets/food-7.jpeg',
        cookTime: '20-30',
        origins: ['United States']
      },
      {
        id: 8,
        name: 'Juice',
        price: 100,
        favourite: false,
        star: 4,
        tags: ['fast food', 'juice', 'drink'],
        imageUrl: '/assets/food-8.jpeg',
        cookTime: '5-10',
        origins: ['Italy']
      }
    ];
  }
}
