import { Component } from '@angular/core';
import { Product } from '../models/product.interface';
import { category } from '../models/categories.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  // products: Product[] = [];
  category: category[] = [];

  constructor() {
    this.fetchData();
  }

  async fetchData() {
    const url = 'https://dummyjson.com/products';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);

      const beauty_products = data.products.filter(
        (product: Product) => product.category === 'beauty'
      );
      const grocery_products = data.products.filter(
        (product: Product) => product.category === 'groceries'
      );
      const fragrance_products = data.products.filter(
        (product: Product) => product.category === 'fragrances'
      );
      const furniture_products = data.products.filter(
        (product: Product) => product.category === 'furniture'
      );
      // this.products =products.sort((a: { weight: number; }, b: { weight: number; } ) => a.weight - b.weight);
      console.log(beauty_products);
      console.log(grocery_products);
      console.log(fragrance_products);
      console.log(furniture_products);
      this.category = [
        {
          name: 'Beauty Products',
          products: beauty_products,
        },
        {
          name: 'Grocery Products',
          products: grocery_products,
        },
        {
          name: 'Fragrance Products',
          products: fragrance_products,
        },
        {
          name: 'Furniture Products',
          products: furniture_products,
        },
      ];
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
