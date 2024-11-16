package br.aragraph.controller;



import br.aragraph.model.Ave;
import br.aragraph.service.AveService;
import java.net.URI;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



//Controller responsável por expor os endpoints da aplicação


@RestController
@RequestMapping("/aves")
public class AveController {
   
    //Vamos usar a interface de serviço para não expor as implementações
    private final AveService aveService;
    
    public AveController (AveService aveService){
        this.aveService = aveService;
    }
    
    
    @GetMapping("id/{id}")
    public ResponseEntity <Ave> findById(@PathVariable Long id){
        var ave = aveService.getAveByID(id);
        return ResponseEntity.ok(ave);
    }
    
    @GetMapping("/taxon/{taxon}")
    public ResponseEntity <Ave> getAveByTaxon(@PathVariable String taxon){
        Ave ave_encontrada = aveService.getAveByTaxon(taxon);
        return ResponseEntity.ok().body(ave_encontrada);
    }
    
    @GetMapping("/nome/{nome_comum}")
    public ResponseEntity <Ave> getAveByNomeComum(@PathVariable String nome_comum){
        Ave ave_encontrada = aveService.getAveByNomeComum(nome_comum);
        return ResponseEntity.ok().body(ave_encontrada);
    }
    
    @GetMapping("/familia/{familia}")
    public ResponseEntity <List<Ave>> getAveByFamilia(@PathVariable String familia){
        List<Ave> ave_encontrada = aveService.getAveByFamilia(familia);
        return ResponseEntity.ok().body(ave_encontrada);
    }
    @GetMapping("/nome/todas")
    public ResponseEntity <List<Ave>> getAllAves(){
        List<Ave> ave_encontrada = aveService.getAllAves();
        return ResponseEntity.ok().body(ave_encontrada);
    }
   
    
   
    
    
  
    @PostMapping("/addAve")
    public ResponseEntity<Ave> create(@RequestBody Ave ave){
        var aveCriada = aveService.create(ave);
        
        //Retornando a URL da aveCriada
        URI localizacao = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("id/{id}")
                .buildAndExpand(aveCriada.getId())
                .toUri();
        
        return ResponseEntity.created(localizacao).body(aveCriada);
        
    }
    
}
