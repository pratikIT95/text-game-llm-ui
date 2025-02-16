import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private baseUrl = 'http://localhost:8080'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  startGame(userId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/start/${userId}`, {});
  }

  continueGame(userId: string, prompt: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/prompt/${userId}`, prompt, { headers: { 'Content-Type': 'application/json' } });
  }
}