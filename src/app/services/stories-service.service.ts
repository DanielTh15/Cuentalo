import { Injectable } from '@angular/core';
import { Story } from '../models/StoryModel';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesServiceService {

  url: string = 'http://localhost:8080/cuentalo/app/api/story/';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<any[]> {
    return this.httpClient.get<Story[]>(this.url + 'all')
  }

  save(story: Story): Observable<Story> {
    return this.httpClient.post<Story>(this.url + 'save', story)

  }

  delete(idStory: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + "delete/" + idStory)
  }

  update(story: Story): Observable<Story> {
    return this.httpClient.put<Story>(this.url + '', story)
  }

}
