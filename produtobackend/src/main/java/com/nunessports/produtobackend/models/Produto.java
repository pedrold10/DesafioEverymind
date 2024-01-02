

package com.nunessports.produtobackend.models;

import lombok.Data;

@Data
public class Produto{
    private String nome;
    private Long codigo;
    private String descricao;
    private Double preco;

}