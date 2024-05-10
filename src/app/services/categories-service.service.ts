import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../models/CategoriesModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  categoriesURL: string = 'http://localhost:8080/cuentalo/app/api/categories/';

  constructor(private httpclient: HttpClient) {
  }

  public list(){
    return this.httpclient.get<Categories[]>(this.categoriesURL + 'all');
  }

}
