import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  _id?: string;
  name: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class CrudService {
  private baseUrl = 'https://crudcrud.com/api/947acdcba6b04c27b58538b3dde6d361/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item);
  }
  updateItem(id: string, item: Partial<Item>): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${id}`, item);
  }
  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}