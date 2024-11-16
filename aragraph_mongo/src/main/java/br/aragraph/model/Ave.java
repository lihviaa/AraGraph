package br.aragraph.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//Anotação para o MongoDB
//Collecion é nome da coleção que estamos manipulando
@Document (collection = "aves_collection")
public class Ave {
    
    @Id
    private Long id;
    private String taxon;
    private String nomeComum;
    private String ordem;
    private String familia;
    private String genero;
    private String especie;
    private String linkAudio;
    private String linkImg;
    private String linkWiki;
    private String statusExtincao;
    
    
    public Long getId() { return id; }
    
    public String getTaxon() { return taxon; }

    public void setTaxon(String taxon) { this.taxon = taxon; }

    public String getNomeComum() { return nomeComum; }

    public void setNomeComum(String nomeComum) { this.nomeComum = nomeComum; }

    public String getOrdem() { return ordem; }

    public void setOrdem(String ordem) { this.ordem = ordem; }

    public String getFamilia() { return familia; }

    public void setFamilia(String familia) { this.familia = familia; }

    public String getGenero() { return genero; }

    public void setGenero(String genero) { this.genero = genero; }

    public String getEspecie() { return especie; }

    public void setEspecie(String especie) { this.especie = especie; }

    public String getLinkImg() { return linkImg; }

    public void setLinkImg(String linkImg) { this.linkImg = linkImg; }

    public String getLinkAudio() { return linkAudio; }

    public void setLinkAudio(String linkAudio) { this.linkAudio = linkAudio; }

    public String getLinkWiki() { return linkWiki; }

    public void setLinkWiki(String linkWiki) { this.linkWiki = linkWiki; }

    public String getStatusExtincao() { return statusExtincao; }

    public void setStatusExtincao(String statusExtincao) { this.statusExtincao = statusExtincao; }
    
    
}
