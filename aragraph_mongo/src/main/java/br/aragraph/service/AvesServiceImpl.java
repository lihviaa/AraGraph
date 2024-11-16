
package br.aragraph.service;

import br.aragraph.model.Ave;

import org.springframework.stereotype.Service;
import br.aragraph.repository.AveRepository;
import java.util.List;
import java.util.NoSuchElementException;




//Aqui vamos implementar todas as regras de negócio definidas na interface
//Precisa adicionar as excessões e refinar os métodos
@Service
public class AvesServiceImpl implements AveService {
    
    private final AveRepository aveRepository;
    
    public AvesServiceImpl(AveRepository aveRepository){
        this.aveRepository = aveRepository;
    }
    
    //METODOS GET
    @Override
    public Ave getAveByID(Long id){
        return aveRepository.findById(id).orElseThrow(NoSuchElementException::new);
        
    }
     
    @Override
    public Ave getAveByTaxon(String taxon){
        return aveRepository.findByTaxon(taxon);
    }

    @Override
    public Ave getAveByNomeComum(String nomeComum) {
        return aveRepository.findByNomeComum(nomeComum);
    }

    @Override
    public List<Ave> getAveByFamilia(String familia) {
        return aveRepository.findByFamilia(familia);
    }
    
    @Override
    public List<Ave> getAllAves(){
        return aveRepository.findAll();
        //se for vazio implementar exceção
    }
    
    
    //METODOS POST
    @Override
    public Ave create(Ave ave){
        if(aveRepository.existsByNomeComum(ave.getNomeComum())){
            throw new IllegalArgumentException("Essa nome de ave já foi criada");
        }
        return aveRepository.save(ave);
    }
    
    
    
    
    
}
