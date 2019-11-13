import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBook(): Observable<any> {
    return this.http.get(environment.api_URL);
  }

  getBook(id: string): Observable<any> {
    return this.http.get(environment.api_URL + id);
  }
}
