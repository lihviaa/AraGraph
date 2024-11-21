package br.aragraph.repository;

import br.aragraph.model.Ave;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataMongoTest
class AveRepositoryTest {

    @Autowired
    private AveRepository aveRepository;

    @Test
    void testFindByTaxon() {
        Ave ave = new Ave();
        ave.setTaxon("TaxonTest");
        ave.setNomeComum("NomeComumTest");
        aveRepository.save(ave);

        Ave foundAve = aveRepository.findByTaxon("TaxonTest");
        assertNotNull(foundAve);
        assertEquals("NomeComumTest", foundAve.getNomeComum());
    }

    @Test
    void testExistsByNomeComum() {
        Ave ave = new Ave();
        ave.setNomeComum("UniqueNomeComum");
        aveRepository.save(ave);

        assertTrue(aveRepository.existsByNomeComum("UniqueNomeComum"));
        assertFalse(aveRepository.existsByNomeComum("NonexistentNomeComum"));
    }

    @Test
    void testFindByFamilia() {
        Ave ave1 = new Ave();
        ave1.setFamilia("FamiliaTest");
        aveRepository.save(ave1);

        Ave ave2 = new Ave();
        ave2.setFamilia("FamiliaTest");
        aveRepository.save(ave2);

        List<Ave> aves = aveRepository.findByFamilia("FamiliaTest");
        assertEquals(2, aves.size());
    }
}
