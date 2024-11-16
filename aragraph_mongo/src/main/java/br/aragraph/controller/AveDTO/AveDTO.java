package br.aragraph.controller.AveDTO;

import br.aragraph.model.Ave;

//CLASSE NÃO FOI UTILIZADA ATÉ O MOMENTO

//Data Transfer Object
//Controlar o que vamos expor pra API(Estou passando todos os campos por enquanto)
 public record AveDTO (Long id, String taxon, String nomComum, String ordem,
                       String familia, String genero, String especie, String linkAudio, String linkImg, 
                       String linkWiki,String statusExtincao){
    
    public Ave map(){
        Ave ave = new Ave();
        
        ave.setTaxon(this.taxon);
        ave.setNomeComum(this.nomComum);
        ave.setOrdem(this.ordem);
        ave.setFamilia(this.familia);
        ave.setGenero(this.genero);
        ave.setEspecie(this.especie);
        ave.setLinkAudio(this.linkAudio);
        ave.setLinkImg(this.linkImg);
        ave.setLinkWiki(this.linkWiki);
        ave.setStatusExtincao(statusExtincao);
        
        return ave;
    }
}
