import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((res) => {
      console.log(res);
      this.articles = res['articles'];
    });
  }

}
