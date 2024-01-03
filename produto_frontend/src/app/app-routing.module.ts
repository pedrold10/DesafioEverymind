import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';

const routes: Routes = [
  {
    path: 'produtos',
    component: ListarProdutosComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
