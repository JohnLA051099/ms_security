import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { CardModel } from '../model/card-model';

@Injectable({
  providedIn: 'root',
})
export class CardService {

  constructor (private httpClient : HttpClient) {
    
  }

getCards(): Observable<CardModel[]> {
  return this.httpClient.get<CardModel[]>('http://3.17.27.245:8080/api/v1/card/list');
}

saveCard(request: any): Observable<any> {
  return this.httpClient.post<any>('http://3.17.27.245:8080/api/v1/card/save', request);
}
  
  updateCard(request: any): Observable<any>{
  return this.httpClient.post<any>('http://3.17.27.245:8080/api/v1/card' + '/update', request).pipe(map(res => res));
}

  deleteCard(id: number): Observable<any>{
  return this.httpClient.get<any>('http://3.17.27.245:8080/api/v1/card' + '/delete/' + id).pipe(map(res => res));
}
}
