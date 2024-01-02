package com.nunessports.produtobackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nunessports.produtobackend.models.Produto;

public interface ProdutoRepository extends JpaRepository<Long, Produto>{
    
}
