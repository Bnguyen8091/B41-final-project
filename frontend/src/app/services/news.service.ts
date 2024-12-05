import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface NewsArticle {
  title: string;
  summary: string;
  imageUrl: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = this.getBackendUrl();
    console.log(`Using backend URL: ${this.baseUrl}`);
  }

  // Dynamically determine backend URL
  private getBackendUrl(): string {
    const ngrokUrl = 'https://938b6a36ff29.ngrok.app/api';
    const localhostUrl = 'http://localhost:3000/api';

    // Use ngrok if the app is served from ngrok; otherwise, use localhost
    if (window.location.origin.includes('ngrok')) {
      console.log('Using Ngrok backend URL');
      return ngrokUrl;
    }

    console.log('Using Localhost backend URL');
    return localhostUrl;
  }

  // Fetch news articles from the backend without requiring authorization
  getNews(): Observable<NewsArticle[]> {
    console.log('Fetching news from:', `${this.baseUrl}/news`);
    return this.http.get<NewsArticle[]>(`${this.baseUrl}/news`).pipe(
      catchError((error) => {
        console.error('Error fetching news:', error);
        return throwError(() => error);
      })
    );
  }
}
