import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../models/CategoriesModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  categoriesURL: string = 'http://localhost:8080/cuentalo/app/api/categories/';

  constructor(private httpclient: HttpClient) {
  }

  public getOne(categoryId: number) {
    return this.httpclient.get<Categories>(this.categoriesURL + categoryId)
  }

  public list(): Observable<any[]> {
    return this.httpclient.get<Categories[]>(this.categoriesURL + 'all');
  }

  public save(category: Categories): Observable<Categories> {
    return this.httpclient.post<Categories>(this.categoriesURL + 'save', category)
  }

  public delete(categoryId: number): Observable<any> {
    return this.httpclient.delete<any>(this.categoriesURL + 'delete/' + categoryId);
  }



}
