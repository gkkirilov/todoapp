import { Injectable } from '@angular/core';
import { Category } from './category';


@Injectable()
export class CategoryDataService {

  lastId = 0;
  categories: Category[] = [];

  constructor() { }

  // POST /categories
  addCategory(category: Category): CategoryDataService {
    if (!category.id) {
      category.id = ++this.lastId;
    }
    this.categories.push(category);
    return this;
  }

  // DELETE /categories/:id
  public deleteCategoryById(id: number): CategoryDataService {
    this.categories = this.categories.filter(category => category.id !== id);
    return this;
  }

  // PUT /categories/:id
  updateCategoriesById(id: number, values: Object = {}): Category | any {
    let category = this.getCategoryById(id);
    if (!category) {
      return null;
    }
    Object.assign(category, values);
    return category;
  }

  // GET /categories
  getAllCategories(): Category[] {
    return this.categories;
  }

  // GET /categories/:id
  getCategoryById(id: number): Category {
    return this.categories.filter(category => category.id === id).pop();
  }

}
