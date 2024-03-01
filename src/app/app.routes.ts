import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-inicial',
    pathMatch: 'full',
  },
  {
    path: 'pagina-inicial',
    component: HomeComponent,
  },
  {
    path: 'sobre-nos',
    component: SobreNosComponent,
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
];
