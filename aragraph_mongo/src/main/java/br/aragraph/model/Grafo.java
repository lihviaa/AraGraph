package br.aragraph.model;

import br.aragraph.model.Ave;

//CLASSE NÃO FOI UTILIZADA ATÉ O MOMENTO

public class Grafo {
    private int id;
    private int vertices;
    private int arestas;
    private int matriz[][];
    
    
    private Ave aves;

    public Grafo(int vertices,int arestas){
        //TO DO
        //ALOCAR MATRIZ DINAMICAMENTE?
        this.vertices = vertices;
        this.arestas = arestas;
        
    }
    
    public int getVertices() { return vertices; }

    public void setVertices(int vertices) { this.vertices = vertices;  }

    public int getArestas() { return arestas; }

    public void setArestas(int arestas) { this.arestas = arestas; }

    public int[][] getMatriz() { return matriz; }

    public void setMatriz(int[][] matriz) { this.matriz = matriz; }
    
    public boolean fileToGraph(){
        //TO DO
        return false;
    }
    
    public boolean graphToFile(){
        //TO DO
        return false;
    }
    
}
