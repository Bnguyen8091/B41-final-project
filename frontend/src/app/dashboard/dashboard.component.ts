import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService, NewsArticle } from '../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  newsArticles: NewsArticle[] = [];
  errorMessage: string = ''; // To display any error messages

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews() {
    this.newsService.getNews().subscribe({
      next: (response) => {
        console.log('News fetched successfully:', response);
        this.newsArticles = response;
      },
      error: (error) => {
        console.error('Failed to fetch news:', error);
        this.errorMessage = 'An error occurred while fetching news.';
      },
    });
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  openReadMore() {
    window.open('https://inside.charlotte.edu/news-features/', '_blank');
  }
}
