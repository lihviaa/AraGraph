package br.aragraph.controller;

import br.aragraph.controller.AveDTO.AveDTO;
import br.aragraph.model.Ave;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AveDTOTest {

    @Test
    void testMap() {
        AveDTO aveDTO = new AveDTO(1L, "TaxonTest", "NomeComumTest", "OrdemTest", "FamiliaTest", "GeneroTest",
                "EspecieTest", "LinkAudioTest", "LinkImgTest", "LinkWikiTest", "StatusExtincaoTest");

        Ave ave = aveDTO.map();

        assertNotNull(ave);
        assertEquals("TaxonTest", ave.getTaxon());
        assertEquals("NomeComumTest", ave.getNomeComum());
        assertEquals("OrdemTest", ave.getOrdem());
        assertEquals("FamiliaTest", ave.getFamilia());
        assertEquals("GeneroTest", ave.getGenero());
        assertEquals("EspecieTest", ave.getEspecie());
        assertEquals("LinkAudioTest", ave.getLinkAudio());
        assertEquals("LinkImgTest", ave.getLinkImg());
        assertEquals("LinkWikiTest", ave.getLinkWiki());
        assertEquals("StatusExtincaoTest", ave.getStatusExtincao());
    }
}
