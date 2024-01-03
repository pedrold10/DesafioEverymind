import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtoSelecionado: any;

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { 
    
  }

  obterProduto(codigo: Number): Observable<Produto>{
    return this.http.get<Produto>(`${this.baseApiUrl}/${codigo}`)
  }

  listarProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseApiUrl}`)
  }
}