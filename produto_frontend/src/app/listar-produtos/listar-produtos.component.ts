import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit{
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {
    
  }

  ngOnInit(): void{
    this.produtoService.listarProdutos().subscribe(
      
        (produtos) => {
          this.produtos = produtos;
        }
      )
    
  }
}
