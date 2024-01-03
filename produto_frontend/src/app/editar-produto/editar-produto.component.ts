import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit{
  editarProdutoRequest: Produto = {
    codigo: "",
    nome: "",
    descricao: "",
    preco: 0
  }
  constructor(private route: ActivatedRoute,
    private produtoService: ProdutoService, 
    private router: Router) {
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe({
      next: (params) => {
        const codigo = params.get("codigo");

        if(codigo){
          this.produtoService.obterProduto(codigo)
          .subscribe({
            next: (response) => {
              this.editarProdutoRequest = response;
            }
          });
        }
      }
    })}

    editarProduto(){
      this.produtoService.editarProduto(this.editarProdutoRequest.codigo, this.editarProdutoRequest)
      .subscribe({
        next: () => {
          this.router.navigate(["produtos"])
        }
      });
    }
    
  deletarProduto(codigo: string){
    this.produtoService.deletarProduto(codigo)
    .subscribe({
      next: (response) => {
        this.router.navigate(["produtos"])
      }
    })
  }
}
