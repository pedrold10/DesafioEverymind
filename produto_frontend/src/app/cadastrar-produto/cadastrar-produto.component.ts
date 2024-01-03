import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit{
  adicionarProdutoRequest: Produto = {
    codigo: "",
    nome: "",
    descricao: "",
    preco: 0
  }
  
  constructor(private produtoService: ProdutoService,
    private router: Router) {
    
  }
  ngOnInit(): void{

  }

  adicionarProduto(){
    this.produtoService.adicionarProduto(this.adicionarProdutoRequest)
    .subscribe({
      next: () => this.router.navigate(["produtos"])
    })

  }
}
