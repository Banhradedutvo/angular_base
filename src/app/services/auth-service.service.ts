import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuth,SigninValidator } from '../interfaces/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:8080/api/auth'; 
  constructor(private http: HttpClient) {
    
   }
   registerUser(user: IAuth): Observable<any> {
    const url = `${this.apiUrl}/signup`; 
    console.log(url);
    return this.http.post<IAuth>(url, user);
  }
  loginUser(user: SigninValidator): Observable<any> {
    const url = `${this.apiUrl}/signin`;
    console.log(url);
    return this.http.post<SigninValidator>(url, user);
  }
}
