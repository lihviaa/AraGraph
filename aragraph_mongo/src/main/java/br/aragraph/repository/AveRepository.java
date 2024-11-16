
package br.aragraph.repository;

import br.aragraph.model.Ave;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AveRepository extends MongoRepository<Ave,Long>{ 
    //METODOS GET para o BD
    Ave findByTaxon(String taxon);
    Ave findByNomeComum(String nomeComum);
    List<Ave> findByFamilia(String familia);
    
    //Metodos de teste
    boolean existsByNomeComum(String nomeComum);
}
