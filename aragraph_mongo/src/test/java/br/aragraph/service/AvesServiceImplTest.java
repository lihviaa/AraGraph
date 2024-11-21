package br.aragraph.service;

import br.aragraph.model.Ave;
import br.aragraph.repository.AveRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AvesServiceImplTest {

    @Mock
    private AveRepository aveRepository;

    @InjectMocks
    private AvesServiceImpl avesService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAveByID() {
        Ave ave = new Ave();
        ave.setTaxon("TaxonTest");
        ave.setNomeComum("NomeComumTest");
        
        when(aveRepository.findById(1L)).thenReturn(Optional.of(ave));

        Ave foundAve = avesService.getAveByID(1L);
        assertNotNull(foundAve);
        assertEquals("TaxonTest", foundAve.getTaxon());
        assertEquals("NomeComumTest", foundAve.getNomeComum());
    }

    @Test
    void testCreateThrowsExceptionIfNomeComumExists() {
        Ave ave = new Ave();
        ave.setNomeComum("NomeComumTest");

        when(aveRepository.existsByNomeComum("NomeComumTest")).thenReturn(true);

        assertThrows(IllegalArgumentException.class, () -> avesService.create(ave));
    }

    @Test
    void testCreateSuccessfullySavesNewAve() {
        Ave ave = new Ave();
        ave.setNomeComum("NomeComumUnique");

        when(aveRepository.existsByNomeComum("NomeComumUnique")).thenReturn(false);
        when(aveRepository.save(ave)).thenReturn(ave);

        Ave createdAve = avesService.create(ave);
        assertNotNull(createdAve);
        assertEquals("NomeComumUnique", createdAve.getNomeComum());

        verify(aveRepository, times(1)).save(ave);
    }

    @Test
    void testGetAllAves() {
        Ave ave1 = new Ave();
        Ave ave2 = new Ave();

        when(aveRepository.findAll()).thenReturn(Arrays.asList(ave1, ave2));

        List<Ave> allAves = avesService.getAllAves();
        assertEquals(2, allAves.size());
    }
}
