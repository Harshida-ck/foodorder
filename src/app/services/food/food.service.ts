import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!
  }

  getAllFoodsByTag(tag: string): Foods[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 300,
        favourite: false,
        star: 4,
        tags: ['FastFood', 'Pizza', 'Lunch'],
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
        tags: ['FastFood', 'Burger', 'Lunch'],
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
        tags: ['FastFood', 'Sandwich', 'Lunch'],
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
        tags: ['Waffles', 'Breakfast'],
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
        tags: ['Pancake', 'Breakfast'],
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
        tags: ['Mojito', 'Drink'],
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
        tags: ['FastFood', 'LoadedFries', 'Snack'],
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
        tags: ['Juice', 'Drink'],
        imageUrl: '/assets/food-8.jpeg',
        cookTime: '5-10',
        origins: ['Italy']
      }
    ];
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 20 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 1 },
      { name: 'Burger', count: 1 },
      { name: 'Sandwich', count: 1 },
      { name: 'Waffles', count: 1 },
      { name: 'Pancake', count: 1 },
      { name: 'LoadedFries', count: 1 },
      { name: 'Juice', count: 1 },
      { name: 'Mojito', count: 1 },
      { name: 'Lunch', count: 3 },
      { name: 'Breakfast', count: 2 },
      { name: 'Drink', count: 2 },
      { name: 'Snack', count: 1 }
    ]
  }


}
