import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
interface Image {
  src: string;
  dir: string;
  name: string;
  type?: string;
}

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent implements OnInit {
  $dataList: Observable<Image[]> = this.http
    .get('../../../assets/data/images.json')
    .pipe((data) => data as Observable<Image[]>);
  constructor(private readonly http: HttpClient) {}
  ngOnInit(): void {}
}
