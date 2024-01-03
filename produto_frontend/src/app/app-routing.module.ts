import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ListarProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
