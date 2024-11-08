import Image from 'next/image'

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-4xl text-teal-500 font-extrabold text-center mb-12">SOBRE O PROJETO</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex justify-center">
            <Image src="/images/sobre/birds1.png" alt="Imagem sobre a ferramenta" width={300} height={300} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sobre a ferramenta</h3>
            <p className="text-gray-700 text-justify">
              AraGraph é uma ferramenta para visualizar dados taxonômicos de aves brasileiras, exibindo informações como nome científico, classificação, status de conservação e recursos multimídia, incluindo fotos, cantos e links para mais detalhes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Ideia e nome do projeto</h3>
            <p className="text-gray-700 text-justify">
              Ara, do Tupi-Guarani, é um vocábulo referente a aves no geral. Optamos por utilizar um termo dessa língua como homenagem aos povos indígenas, pioneiros no processo de nomeação das aves brasileiras.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/images/sobre/birds2.png" alt="Imagem ideia e nome do projeto" width={300} height={300} className="rounded-full" />
          </div>
        </div>
      </main>
    </div>
  )
}
