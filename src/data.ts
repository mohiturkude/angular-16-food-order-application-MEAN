import {Food} from './app/shared/models/Food';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    imageUrl: 'assets/food-1.jpg',
  },
  {
    id:'2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    imageUrl: 'assets/food-2.jpg',
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    imageUrl: 'assets/food-3.jpg',
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    imageUrl: 'assets/food-4.jpg',
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    imageUrl: 'assets/food-5.jpg',
  },
  {
    id:'6',
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    imageUrl: 'assets/food-6.jpg',
  },
]