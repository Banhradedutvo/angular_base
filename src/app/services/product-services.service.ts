import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct ,IProductResponse} from '../interfaces/product';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  private apiUrl = `http://localhost:8080/api/products`;
  constructor(private http: HttpClient) { 
    
  }
  getProducts(): Observable<IProductResponse> {
    return this.http.get<IProductResponse>(this.apiUrl);
  }
  getProduct(_id:string): Observable<IProduct> {

    return this.http.get<{message: string, data: IProduct}>(`${this.apiUrl}/${_id}`)
      .pipe(
        map(res => res.data) 
      );
  
  }
  addProduct(product: IProduct[]): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`${this.apiUrl}`, product);
  }
  updateProduct(productId: string, product: IProduct): Observable<IProduct[]> {
    const url = `${this.apiUrl}/${productId}/edit`;
    return this.http.put< IProduct[]>(url, product);
  }
  deleteProduct(productId: string): Observable<any> {
    const url = `${this.apiUrl}/${productId}`; 
    return this.http.delete<any>(url);
  }

}
