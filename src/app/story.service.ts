import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private baseUrl = 'http://localhost:8080'; // Replace with your backend URL
  private sessionUuid;;

  constructor(private http: HttpClient) {
    this.sessionUuid = sessionStorage.getItem('sessionUuid');
   }

  startGame(): Observable<any> {
    return this.http.post(`${this.baseUrl}/start/${this.sessionUuid}`, {});
  }

  continueGame(prompt: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/prompt/${this.sessionUuid}`, prompt, { headers: { 'Content-Type': 'text/xml' } });
  }
}