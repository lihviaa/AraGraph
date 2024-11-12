
const birdslist = [
	{
		id: 0,
		taxon: "Phyllaemulor bracteatus",
		nomecomum: "Urutau-ferrugem",
		ordem: "Nyctibiiformes",
		familia: "Nyctibiidae",
		genero: "Phyllaemulor",
		especie: "bracteatus",
		linkAudio: "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/3971/1793773_5e232c42bc03e0cc4e77e048cec30551.mp3",
		imagem: "https://mirantedogaviao.com.br/br/wp-content/uploads/2022/10/urutau-ferrugem-.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/urutau-ferrugem",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 1,
		taxon: "Nyctibius grandis",
		nomecomum: "Urutau-grande",
		ordem: "Nyctibiiformes",
		familia: "Nyctibiidae",
		genero: "Nyctibius",
		especie: "grandis",
		linkAudio: "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/34/43027_dae11a25179087377994a25599de0230.mp3",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fb/M%C3%A3e-da-lua-gigante_%28Nyctibius_grandis%29.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/urutau-grande",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 2,
		taxon: "Nyctibius aethereus",
		nomecomum: "Urutau-pardo",
		ordem: "Nyctibiiformes",
		familia: "Nyctibiidae",
		genero: "Nyctibius",
		especie: "aethereus",
		linkAudio: "https://www.xeno-canto.org/537851/download",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/311/113222_e9d662333cfe12a94be4de8072fe9c47.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/urutau-pardo",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 3,
		taxon: "Nyctibius griseus",
		nomecomum: "Urutau-comum",
		ordem: "Nyctibiiformes",
		familia: "Nyctibiidae",
		genero: "Nyctibius",
		especie: "griseus",
		linkAudio: "https://www.xeno-canto.org/891762/download",
		imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOZGFMJLB7De8DjAxui3Wu6QKAX9GauzE9oSlTmUamvKLCl_PE",
		linkWiki: "https://www.wikiaves.com.br/wiki/urutau",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 4,
		taxon: "Nyctibius leucopterus",
		nomecomum: "Urutau-de-asa-branca",
		ordem: "Nyctibiiformes",
		familia: "Nyctibiidae",
		genero: "Nyctibius",
		especie: "leucopterus",
		linkAudio: "https://www.xeno-canto.org/797888/download",
		imagem: "https://mirantedogaviao.com.br/br/wp-content/uploads/2022/10/urutau-de-asa-branca.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/urutau-de-asa-branca",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 5,
		taxon: "Cypseloides senex",
		nomecomum: "Taperuçu-velho",
		ordem: "Apodiformes",
		familia: "Apodidae",
		genero: "Cypseloides ",
		especie: "senex",
		linkAudio: "https://www.xeno-canto.org/500223/download",
		imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkuQx7byuNKy_tE2DYV6nh294sd7Mys391uDFkKUibYL1WeVC",
		linkWiki: "https://www.wikiaves.com.br/wiki/taperuçu-velho",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 6,
		taxon: "Streptoprocne biscutata",
		nomecomum: "Taperuçu-de-coleira-falha",
		ordem: "Apodiformes",
		familia: "Apodidae",
		genero: "Streptoprocne ",
		especie: "biscutata",
		linkAudio: "https://www.xeno-canto.org/325751/download",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/2714/4172608q_86517b3066600ba8c33e804f2817ad5f.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/taperuçu-de-coleira-falha",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 7,
		taxon: "Panyptila cayennensis",
		nomecomum: "Andorinhão-estofador",
		ordem: "Apodiformes",
		familia: "Apodidae",
		genero: "Panyptila ",
		especie: "cayennensis",
		linkAudio: "https://www.xeno-canto.org/931469/download",
		imagem: "https://www.oiseaux.net/photos/sylvain.uriot/images/martinet.de.cayenne.syur.1g.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/andorinhão-estofador",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 8,
		taxon: "Chaetura meridionalis",
		nomecomum: "Andorinhão-do-temporal",
		ordem: "Apodiformes",
		familia: "Apodidae",
		genero: "Chaetura ",
		especie: "meridionalis",
		linkAudio: "https://www.xeno-canto.org/550077/download",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/0851/1580127r_eef3eea90de45b1cb374d13c5be4d962.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/andorinhão-do-temporal",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 9,
		taxon: "Calliphlox amethystina",
		nomecomum: "Estrelinha-ametista",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Calliphlox ",
		especie: "amethystina",
		linkAudio: "https://www.xeno-canto.org/938327/download",
		imagem: "https://s2.glbimg.com/d_bKuwAwOa5QSesPWch0CZLhv4k=/696x390/top/smart/s.glbimg.com/jo/g1/f/original/2016/10/14/estrelinha-ametista_rudimar_narciso_cipriani.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/estrelinha-ametista",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 10,
		taxon: "Stephanoxis loddigesii",
		nomecomum: "Beija-flor-de-topete-azul",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Stephanoxis ",
		especie: "loddigesii",
		linkAudio: "https://www.xeno-canto.org/490725/download",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/7752/2577168_a4882eb7ec6ea7ed22ba82b94a44979d.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/beija-flor-de-topete-azul",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 11,
		taxon: "Chionomesa lactea",
		nomecomum: "Beija-flor-de-peito-azul",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Chionomesa",
		especie: "lactea",
		linkAudio: "https://www.xeno-canto.org/537649/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Amazilia_lactea-4.jpg/800px-Amazilia_lactea-4.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/beija-flor-de-peito-azul",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 12,
		taxon: "Chlorestes notata",
		nomecomum: "Beija-flor-de-garganta-azul",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Chlorestes",
		especie: "notata",
		linkAudio: "https://www.xeno-canto.org/468185/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Blue-chinned_sapphire_%28Chlorestes_notata_notata%29_male.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/beija-flor-de-garganta-azul",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 13,
		taxon: "Elliotomyia chionogaster",
		nomecomum: "Beija-flor-verde-e-branco",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Elliotomyia",
		especie: "chionogaster",
		linkAudio: "https://www.xeno-canto.org/732163/download",
		imagem: "https://static.inaturalist.org/photos/56721360/large.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/beija-flor-verde-e-branco",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 14,
		taxon: "Hylocharis chrysura",
		nomecomum: "Beija-flor-dourado",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Hylocharis",
		especie: "chrysura",
		linkAudio: "https://www.xeno-canto.org/924674/download",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/4162/2614378_cc78a092e9df4ea2faf422c808edb29d.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/beija-flor-dourado",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 15,
		taxon: "Eupetomena macroura",
		nomecomum: "Beija-flor-tesoura",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Eupetomena",
		especie: "macroura",
		linkAudio: "https://www.xeno-canto.org/472001/download",
		imagem: "https://i.pinimg.com/736x/4a/5a/da/4a5ada67e24fbbd51718dcbed190e5bd.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/beija-flor-tesoura",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 16,
		taxon: "Thalurania glaucopis",
		nomecomum: "Beija-flor-de-fronte-violeta",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Thalurania",
		especie: "glaucopis",
		linkAudio: "https://www.xeno-canto.org/931225/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ThaluraniaGlaucopis200805DarioSanches.jpg/280px-ThaluraniaGlaucopis200805DarioSanches.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/beija-flor-de-fronte-violeta",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 17,
		taxon: "Anthracothorax nigricollis",
		nomecomum: "Beija-flor-de-veste-preta",
		ordem: "Apodiformes",
		familia: "Trochilidae",
		genero: "Anthracothorax",
		especie: "nigricollis",
		linkAudio: "https://www.xeno-canto.org/419280/download",
		imagem: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/320975841/900",
		linkWiki: "https://www.wikiaves.com.br/wiki/beija-flor-de-veste-preta",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 18,
		taxon: "Jacamerops aureus",
		nomecomum: "Jacamaraçu",
		ordem: "Galbuliformes",
		familia: "Galbulidae",
		genero: "Jacamerops",
		especie: "aureus",
		linkAudio: "https://www.xeno-canto.org/536739/download",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/4552/2554426_cfb2355d3fffb785cea88c9597b52646.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/jacamaraçu",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 19,
		taxon: "Jacamaralcyon tridactyla",
		nomecomum: "Cuitelão",
		ordem: "Galbuliformes",
		familia: "Galbulidae",
		genero: "Jacamaralcyon",
		especie: "tridactyla",
		linkAudio: "https://www.xeno-canto.org/783668/download",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/066/660964_e1ba06f5eef03a0ad78eeb76480d078a.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/cuitelão",
		statusExtincao: "Quase Ameaçada"
	},
	{
		id: 20,
		taxon: "Cyphos macrodactylus",
		nomecomum: "Rapazinho-de-boné-vermelho",
		ordem: "Galbuliformes",
		familia: "Bucconidae",
		genero: "Cyphos",
		especie: "macrodactylus",
		linkAudio: "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/8451/1548929_0f3020d5113339cdd9e13d7e30b1e0d3.mp3",
		imagem: "https://pbs.twimg.com/media/GUQ0Cd-XEAArIku.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/rapazinho-de-boné-vermelho",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 21,
		taxon: "Galbula leucogastra",
		nomecomum: "Ariramba-bronzeada",
		ordem: "Galbuliformes",
		familia: "Galbulidae",
		genero: "Galbula",
		especie: "leucogastra",
		linkAudio: "https://www.xeno-canto.org/834305/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/9/90/Purplish_Jacamar_%28Galbula_leucogastra%29.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/ariramba-bronzeada",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 22,
		taxon: "Galbula cyanescens",
		nomecomum: "Ariramba-da-capoeira",
		ordem: "Galbuliformes",
		familia: "Galbulidae",
		genero: "Galbula",
		especie: "cyanescens",
		linkAudio: "https://www.xeno-canto.org/536115/download",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/7504/4057300g_3e23258f25838b6797f204452caae0e9.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/ariramba-da-capoeira",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 23,
		taxon: "Nystalus maculatus",
		nomecomum: "Rapazinho-dos-velhos",
		ordem: "Galbuliformes",
		familia: "Bucconidae",
		genero: "Nystalus",
		especie: "maculatus",
		linkAudio: "https://www.xeno-canto.org/857535/download",
		imagem: "https://static.inaturalist.org/photos/31676142/large.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/rapazinho-dos-velhos",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 24,
		taxon: "Chelidoptera tenebrosa",
		nomecomum: "Urubuzinho",
		ordem: "Galbuliformes",
		familia: "Bucconidae",
		genero: "Chelidoptera",
		especie: "tenebrosa",
		linkAudio: "https://www.xeno-canto.org/554232/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Chelidoptera_tenebrosa_Swallow-wing.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/urubuzinho",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 25,
		taxon: "Guira guira",
		nomecomum: "Anu-branco",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Guira",
		especie: "guira",
		linkAudio: "https://www.xeno-canto.org/549955/download",
		imagem: "https://inaturalist-open-data.s3.amazonaws.com/photos/23659730/large.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/anu-branco",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 26,
		taxon: "Crotophaga major",
		nomecomum: "Anu-coroca",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Crotophaga",
		especie: "major",
		linkAudio: "https://www.xeno-canto.org/474851/download",
		imagem: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/56436051/900",
		linkWiki: "https://www.wikiaves.com.br/wiki/anu-coroca",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 27,
		taxon: "Crotophaga ani",
		nomecomum: "Anu-preto",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Crotophaga",
		especie: "ani",
		linkAudio: "https://www.xeno-canto.org/549957/download",
		imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuYWqOvsJCV-T2uHhMfO-49aR0Q7uOO3maQsV_tmPIGmzjLXGi",
		linkWiki: "https://www.wikiaves.com.br/wiki/anu-preto",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 28,
		taxon: "Dromococcyx pavoninus",
		nomecomum: "Peixe-frito-pavonino",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Dromococcyx",
		especie: "pavoninus",
		linkAudio: "https://www.xeno-canto.org/549969/download",
		imagem: "https://www.estanciamimosa.eco.br/blog/wp-content/uploads/2023/10/Peixe-frito-pavonino_Foto-Fernando-Maidana-2.png",
		linkWiki: "https://www.wikiaves.com.br/wiki/peixe-frito-pavonino",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 29,
		taxon: "Dromococcyx phasianellus",
		nomecomum: "Peixe-frito",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Dromococcyx",
		especie: "phasianellus",
		linkAudio: "https://www.xeno-canto.org/537800/download",
		imagem: "https://inaturalist-open-data.s3.amazonaws.com/photos/250837780/medium.jpeg",
		linkWiki: "https://www.wikiaves.com.br/wiki/peixe-frito",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 30,
		taxon: "Tapera naevia",
		nomecomum: "Saci",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Tapera",
		especie: "naevia",
		linkAudio: "https://www.xeno-canto.org/465035/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/8/88/Tapera_naevia.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/saci",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 31,
		taxon: "Neomorphus geoffroyi",
		nomecomum: "Jacu-estalo",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Neomorphus",
		especie: "geoffroyi",
		linkAudio: "https://www.xeno-canto.org/843687/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Rufous-vented_Ground_Cuckoo.jpg/640px-Rufous-vented_Ground_Cuckoo.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/jacu-estalo",
		statusExtincao: "Vulnerável"
	},
	{
		id: 32,
		taxon: "Neomorphus squamiger",
		nomecomum: "Jacu-estalo-escamoso",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Neomorphus",
		especie: "squamiger",
		linkAudio: "https://www.xeno-canto.org/609966/download",
		imagem: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/181353131/1200",
		linkWiki: "https://www.wikiaves.com.br/wiki/jacu-estalo-escamoso",
		statusExtincao: "Vulnerável"
	},
	{
		id: 33,
		taxon: "Neomorphus rufipennis",
		nomecomum: "Jacu-estalo-de-asa-vermelha",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Neomorphus",
		especie: "rufipennis",
		linkAudio: "https://www.xeno-canto.org/456232/download",
		imagem: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/174762061/900",
		linkWiki: "https://www.wikiaves.com.br/wiki/jacu-estalo-de-asa-vermelha",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 34,
		taxon: "Neomorphus pucheranii",
		nomecomum: "Jacu-estalo-de-bico-vermelho",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Neomorphus",
		especie: "pucheranii",
		linkAudio: "https://www.xeno-canto.org/207704/download",
		imagem: "https://i.pinimg.com/originals/57/7f/ea/577fea1e1fbbf5f1520bb75582aa176e.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/jacu-estalo-de-bico-vermelho",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 35,
		taxon: "Coccycua minuta",
		nomecomum: "Chincoã-pequeno",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Coccycua",
		especie: "minuta",
		linkAudio: "https://www.xeno-canto.org/566086/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Coccycua_minuta_Little_Cuckoo%3B_Miranda%2C_Mato_Grosso_do_Sul%2C_Brazil.jpg/800px-Coccycua_minuta_Little_Cuckoo%3B_Miranda%2C_Mato_Grosso_do_Sul%2C_Brazil.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/chincoã-pequeno",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 36,
		taxon: "Micrococcyx cinereus",
		nomecomum: "Papa-lagarta-cinzento",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Micrococcyx",
		especie: "cinereus",
		linkAudio: "https://s3.amazonaws.com/media.wikiaves.com.br/recordings/44/44021_c313bcbfa530a145e320aae2d8a8c885.mp3",
		imagem: "https://s3.amazonaws.com/media.wikiaves.com.br/images/5924/4295702g_8466080ce4ddd5345f58288ee0024809.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/papa-lagarta-cinzento",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 37,
		taxon: "Piaya cayana",
		nomecomum: "Alma-de-gato",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Piaya",
		especie: "cayana",
		linkAudio: "https://www.xeno-canto.org/540106/download",
		imagem: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/218227141/900",
		linkWiki: "https://www.wikiaves.com.br/wiki/alma-de-gato",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 38,
		taxon: "Cuculus canorus",
		nomecomum: "Cuco-canoro",
		ordem: "Cuculiformes",
		familia: "Cuculidae",
		genero: "Cuculus",
		especie: "canorus",
		linkAudio: "https://www.xeno-canto.org/931823/download",
		imagem: "https://inaturalist-open-data.s3.amazonaws.com/photos/100389658/large.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/cuco-canoro",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 39,
		taxon: "Pelecanus occidentalis",
		nomecomum: "Pelicano",
		ordem: "Pelecaniformes",
		familia: "Pelecanidae",
		genero: "Pelecanus",
		especie: "occidentalis",
		linkAudio: "https://www.xeno-canto.org/540652/download",
		imagem: "https://www.ecoregistros.org/site/images/dataimages/2015/06/09/101835/Pelicano-pardo--2-.JPG",
		linkWiki: "https://www.wikiaves.com.br/wiki/pelicano",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 40,
		taxon: "Platalea ajaja",
		nomecomum: "Colhereiro",
		ordem: "Pelecaniformes",
		familia: "Threskiornithidae",
		genero: "Platalea",
		especie: "ajaja",
		linkAudio: "https://www.xeno-canto.org/418905/download",
		imagem: "https://static.inaturalist.org/photos/32776247/large.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/colhereiro",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 41,
		taxon: "Theristicus caudatus",
		nomecomum: "Curicaca",
		ordem: "Pelecaniformes",
		familia: "Threskiornithidae",
		genero: "Theristicus",
		especie: "caudatus",
		linkAudio: "https://www.xeno-canto.org/465632/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3b/CURICACA_%28_Theristicus_caudatus_%29.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/curicaca",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 42,
		taxon: "Mesembrinibis cayennensis",
		nomecomum: "Coró-coró",
		ordem: "Pelecaniformes",
		familia: "Threskiornithidae",
		genero: "Mesembrinibis",
		especie: "cayennensis",
		linkAudio: "https://www.xeno-canto.org/922819/download",
		imagem: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/536042021/900",
		linkWiki: "https://www.wikiaves.com.br/wiki/coró-coró",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 43,
		taxon: "Eudocimus ruber",
		nomecomum: "Guará",
		ordem: "Pelecaniformes",
		familia: "Threskiornithidae",
		genero: "Eudocimus",
		especie: "ruber",
		linkAudio: "https://www.xeno-canto.org/222844/download",
		imagem: "https://static.inaturalist.org/photos/222873544/large.jpeg",
		linkWiki: "https://www.wikiaves.com.br/wiki/guará",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 44,
		taxon: "Cochlearius cochlearius",
		nomecomum: "Arapapá",
		ordem: "Pelecaniformes",
		familia: "Ardeidae",
		genero: "Cochlearius",
		especie: "cochlearius",
		linkAudio: "https://www.xeno-canto.org/880041/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/4/46/Cochlearius_cochleariaPCCA20071227-8443B.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/arapapá",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 45,
		taxon: "Butorides striata",
		nomecomum: "Socozinho",
		ordem: "Pelecaniformes",
		familia: "Ardeidae",
		genero: "Butorides",
		especie: "striata",
		linkAudio: "https://www.xeno-canto.org/939543/download",
		imagem: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/56638961/900",
		linkWiki: "https://www.wikiaves.com.br/wiki/socozinho",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 46,
		taxon: "Ardea purpurea",
		nomecomum: "Garça-roxa",
		ordem: "Pelecaniformes",
		familia: "Ardeidae",
		genero: "Ardea",
		especie: "purpurea",
		linkAudio: "https://www.xeno-canto.org/935101/download",
		imagem: "https://upload.wikimedia.org/wikipedia/commons/4/43/Purple_heron_%28Ardea_purpurea%29_by_Shantanu_Kuveskar.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/garça-roxa",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 47,
		taxon: "Egretta gularis",
		nomecomum: "Garça-negra",
		ordem: "Pelecaniformes",
		familia: "Ardeidae",
		genero: "Egretta",
		especie: "gularis",
		linkAudio: "https://www.xeno-canto.org/864520/download",
		imagem: "https://static.inaturalist.org/photos/185487713/large.jpeg",
		linkWiki: "https://www.wikiaves.com.br/wiki/garça-negra",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 48,
		taxon: "Egretta caerulea",
		nomecomum: "Garça-azul",
		ordem: "Pelecaniformes",
		familia: "Ardeidae",
		genero: "Egretta",
		especie: "caerulea",
		linkAudio: "https://www.xeno-canto.org/898143/download",
		imagem: "https://www.ecoregistros.org/site/images/albumes/21/13030/garza-azul--SA--1.jpg",
		linkWiki: "https://www.wikiaves.com.br/wiki/garça-azul",
		statusExtincao: "Pouco Preocupante"
	},
	{
		id: 49,
		taxon: "Egretta thula",
		nomecomum: "Garça-branca-pequena",
		ordem: "Pelecaniformes",
		familia: "Ardeidae",
		genero: "Egretta",
		especie: "thula",
		linkAudio: "https://www.xeno-canto.org/559898/download",
		imagem: "https://www.ecoregistros.org/site/images/dataimages/2023/05/07/534400/Garcita-Blanca--Egretta-thula--03-28abr23-Miramar-de-Ansenuza.JPG",
		linkWiki: "https://www.wikiaves.com.br/wiki/garça-branca-pequena",
		statusExtincao: "Pouco Preocupante"
	}
]

export default birdslist;