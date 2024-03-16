import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  reviews = [
    {
      id: 1,
      name: 'Kelly Souza',
      rate: 5,
      image:
        'https://lh3.googleusercontent.com/a/ACg8ocIe2eCV0NK8fpKfheV6OwXmnZI17fmiYwmuZjvG_Jjy=w36-h36-p-rp-mo-br100',
      comment:
        'Ótimo atendimento. Todas as vezes que precisei fui muito bem atendida com rapidez e eficiência.',
    },
    {
      id: 2,
      name: 'Marcus Mengão',
      rate: 5,
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjUD25LZS4Fk0CJCuGgQ8umvLLuZ5VOJulChYD3QQ7QkNjM=w60-h60-p-rp-mo-br100',
      comment:
        'Atendimento impecável do Bruno, os técnicos profissionais ao extremo! Me assessoraram corretamente. Forma de pagamento excelente. Preço justo. Farei novos serviços com a empresa.',
    },
    {
      id: 3,
      name: 'Taynah Dias',
      rate: 5,
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjWb2O-eYD_3bjStgdnXcckqYgGt06BVmF0f6L8XEdGcgX0=w36-h36-p-rp-mo-br100',
      comment:
        'Empresa MUITO BOAAA! chegou no horário, trabalho ficou perfeito e do jeito que eu queria! Já vou fazer no outro banheiro com eles tbm!!',
    },
    {
      id: 4,
      name: 'Roberto Rocha',
      rate: 5,
      image:
        'https://lh3.googleusercontent.com/a/ACg8ocJ1MAEnV03o7m8RbRUdPURKOCw_nrF9IgcQb77yLERy=w36-h36-p-rp-mo-br100',
      comment:
        'Atendimento impecável! Prazo atendido com precisão, preços competitivos. Certeza de indicação',
    },
  ];
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

  range(start: number, end: number): number[] {
    const numeros = [];
    for (let i = start; i < end; i++) {
      numeros.push(i);
    }
    return numeros;
  }
}
