import { Injectable } from '@angular/core';
import { Writer } from '../models/WriterModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WriterServiceService {

  url: string = 'http://localhost:8080/cuentalo/app/api/writer/';

  constructor(private httpClient: HttpClient) { }

  getOne(writerId: string): Observable<Writer> {
    return this.httpClient.get<Writer>(this.url + writerId);
  }

  list(): Observable<any[]> {
    return this.httpClient.get<Writer[]>(this.url + 'all')
  }

  save(writer: Writer): Observable<Writer> {
    return this.httpClient.post<Writer>(this.url + 'save/', writer)
  }

  delete(writerId: string): Observable<Writer> {
    return this.httpClient.delete<any>(this.url + 'delele/' + writerId)
  }
}
