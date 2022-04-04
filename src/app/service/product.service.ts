import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:8000/api/products');
  }

  public create(data): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/products/create', data);
  }

  public getById(id): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/products/' + id);
  }

  public update(id, data): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/products/eidt/' + id, data);
  }

  public delete(id): Observable<any> {
    return this.http.delete<any>('http://127.0.0.1:8000/api/products/delete/' + id);
  }


}
