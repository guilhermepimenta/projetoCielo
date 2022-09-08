import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagination } from 'src/model/pagination';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  urlApi = `${environment.api}`;

  public constructor(private http: HttpClient) { }

  listarPagination(): Observable<Pagination> {    
    return this.http.get<Pagination>(`${this.urlApi}/pagination`);
  }
}
