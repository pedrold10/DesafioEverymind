

package com.nunessports.produtobackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table
public class Produto{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long produtoId;
    private String nome;
    private Long codigo;
    private String descricao;
    private Double preco;

}