import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Items } from 'src/model/items' 

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  urlApi = `${environment.api}`;

  public constructor(private http: HttpClient) { }

  listarItems(): Observable<Items[]> {
    // console.log(this.urlApi);
    return this.http.get<Items[]>(`${this.urlApi}/items`);
  }
  
}
