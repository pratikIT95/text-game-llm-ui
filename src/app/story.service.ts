import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private baseUrl = 'http://localhost:8080'; // Replace with your backend URL
  private sessionUuid : string = '';

  constructor(private http: HttpClient) {
   }

  startGame(): Observable<any> {
    console.log("Current session ID for start",sessionStorage.getItem('sessionUuid'));
    return this.http.post(`${this.baseUrl}/start/${sessionStorage.getItem('sessionUuid')}`, {});
  }

  continueGame(prompt: string): Observable<any> {
    console.log("Current session ID for continue",sessionStorage.getItem('sessionUuid'));
    return this.http.post(`${this.baseUrl}/prompt/${sessionStorage.getItem('sessionUuid')}`, prompt, { headers: { 'Content-Type': 'text/xml' } });
  }
}