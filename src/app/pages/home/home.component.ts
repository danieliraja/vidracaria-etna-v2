import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'A Etna vidros oferece serviços de vidraçaria de alta qualidade em toda cidade do Rio de janeiro. Solicite um orçamento grátis!',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
    ]);
    this.title.setTitle('Vidraçaria Etna Vidros | Rio de janeiro');
  }
}
