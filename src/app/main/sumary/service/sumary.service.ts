import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sumary } from 'src/model/sumary' 

@Injectable({
  providedIn: 'root'
})
export class SumaryService {

  urlApi = `${environment.api}`;

  public constructor(private http: HttpClient) { }

  listarSummary(): Observable<Sumary> {    
    return this.http.get<Sumary>(`${this.urlApi}/summary`);
}

}
