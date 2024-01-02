package com.nunessports.produtobackend.services;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nunessports.produtobackend.models.Produto;
import com.nunessports.produtobackend.repositories.ProdutoRepository;

@Service
public class ProdutoService {
    private final ProdutoRepository produtoRepository;

    @Autowired
    public ProdutoService(ProdutoRepository produtoRepository){
        this.produtoRepository = produtoRepository;
    }
    public Produto produtoPorId(Long id){
        return produtoRepository.findById(id)
            .orElseThrow(() -> new NoSuchElementException("Produto não encontrado com o ID: " + id));
    }
    
    public List<Produto> listProduto(){
        return produtoRepository.findAll();
    }

    public Produto saveProduto(Produto produto){
        return produtoRepository.save(produto);
    }

    
    public boolean deletarProduto(Long id) {
        if (produtoRepository.existsById(id)) {
            produtoRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
