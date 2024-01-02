package com.nunessports.produtobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nunessports.produtobackend.models.Produto;
import com.nunessports.produtobackend.services.ProdutoService;

@RestController
@RequestMapping("/")
public class ProdutoController {
    private final ProdutoService produtoService;

    @Autowired
    public ProdutoController(ProdutoService produtoService){
        this.produtoService = produtoService;
    }

    @GetMapping("/produtos")
    public List<Produto> listProduto() {
        return produtoService.listProduto();
    }
    @GetMapping("/produtos/{id}")
    public ResponseEntity<Produto> produtoPorId(@PathVariable Long id){
        Produto produto = produtoService.produtoPorId(id);
        return produto != null ? ResponseEntity.ok(produto) : ResponseEntity.notFound().build();
    }

    @PostMapping("/produtos")
    public ResponseEntity<Produto> adicionarProduto(@RequestBody Produto produto) {
        Produto novoProduto = produtoService.saveProduto(produto);
        return ResponseEntity.ok(novoProduto);
    }
    @PutMapping("/produtos/{id}")
    public ResponseEntity<Produto> atualizarProdutoPorId(@PathVariable Long id,
                                                     @RequestBody Produto produtoAtualizado){
        Produto produto = produtoService.produtoPorId(id);
        if(produto != null){
            produto.setNome(produtoAtualizado.getNome());
            produto.setDescricao(produtoAtualizado.getDescricao());
            produto.setPreco(produtoAtualizado.getPreco());
            produto = produtoService.saveProduto(produto);
            return ResponseEntity.ok(produto);
        }
        else
            return ResponseEntity.notFound().build();
    }
    @DeleteMapping("/produtos/{id}")
    public ResponseEntity<Void> deletarProduto(@PathVariable Long id) {
        boolean produtoRemovido = produtoService.deletarProduto(id);

        return produtoRemovido ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
