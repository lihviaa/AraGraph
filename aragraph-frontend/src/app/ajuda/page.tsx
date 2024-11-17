import { ArrowDownWideNarrow, List, Search, SquareMousePointer, Volume2 } from "lucide-react"
import Image from "next/image"

export default function Ajuda() {
	return (
		<div className="min-h-screen bg-gray-100">
			<main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12">
				<h2 className="text-4xl text-teal-500 font-extrabold text-center mb-10">CONHECENDO A FERRAMENTA</h2>

				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
						<List />
						Lista de Aves
					</h2>
					<p className="text-gray-700 mb-2">
						Na página principal, você tem acesso a uma lista de aves, exibindo o nome comum, nome científico e foto de cada uma.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto1.png" alt="lista aves" width={301} height={300} />

					</div>
					<p>
						Selecione uma ave para acessar mais informações sobre ela, como ordem e família.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto2.png" alt="card detalhado" width={400} height={400} />
					</div>
					<p>
						Para conhecer ainda mais sobre a ave, você pode clicar em <span className="font-bold text-teal-600">Saiba Mais</span>, onde será redirecionado para uma página com ainda mais detalhes sobre a ave.
					</p>
				</section>

				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
						<Volume2 />
						Sons de Aves
					</h2>
					<p>
						Você também pode ouvir o canto da ave ao clicar em <span className="font-bold text-teal-600">Tocar Som</span>.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto3.png" alt="escutar som" width={300} height={300} />
					</div>
				</section>

				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
						<Search />
						Utilizando a Barra de Busca
					</h2>
					<p>
						A barra de busca tem como objetivo facilitar a procura por uma ave específica.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto4.png" alt="barra de busca rapazinho" width={500} height={500} />
					</div>
					<p>
						No exemplo acima, procuramos pelo termo <span className="font-bold text-teal-600">Rapazinho</span>, o qual foi encontrado no nome comum de duas aves.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto5.png" alt="barra de busca apodidae" width={500} height={500} />
					</div>
					<p>
						Neste outro exemplo, procuramos pela família dos Apodidae, a qual retornou quatro aves.
					</p>
				</section>

				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
						<ArrowDownWideNarrow />
						Utilizando a Ordenação
					</h2>
					<p>
						A ferramenta de ordenação se encontra à direita da barra de ferramentas.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto6.png" alt="ordernação" width={300} height={300} />
					</div>
					<p className="py-4">
						Existem duas formas principais de ordenação: por ordem alfabética e por estado de preservação.
					</p>
					<p>
						A ordenação em ordem alfabética organizará a lista de aves por nome comum, táxon, ordem, família e gênero, de acordo com a ordem alfabética destes.
					</p>

					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto7.png" alt="ordenação alfabetica" width={700} height={700} />
					</div>
					<p>
						No exemplo acima, ordenamos a lista de aves pela ordem alfabética do nome comum.
					</p>

					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto8.png" alt="ordenação ordem" width={700} height={700} />
					</div>

					<p className="py-4">
						Neste segundo exemplo, a lista de aves foi ordenada pela ordem alfabética da ordem de cada uma das aves.
					</p>

					<p className="py-2">
						A ordenação por estado de preservação organizará as aves da lista da seguinte forma:
					</p>

					<p>
						<span className="font-bold">Menos Vulnerável</span>: A lista inicia pelas aves menos vulneráveis, e ao final da lista estão as aves mais vulneráveis.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto9.png" alt="ordenação estado de preservação menos" width={700} height={700} />
					</div>

					<p>
						<span className="font-bold">Mais Vulnerável</span>: A lista inicia pelas aves mais vulneráveis, e ao final da lista estão as aves menos vulneráveis.
					</p>

					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto10.png" alt="ordenação estado de preservação mais" width={700} height={700} />
					</div>
				</section>

				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
						<SquareMousePointer />
						Navegando pela Ferramenta
					</h2>

					<p>
						Em <span className="font-bold text-teal-600">Equipe</span>, você encontra os idealizadores e desenvolvedores da ferramenta.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto11.png" alt="equipe" width={300} height={300} />
					</div>

					<p>
						Para cada um dos AraGraphers, você pode clicar em Conhecer e ser redirecionado ao seu perfil no GitHub.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto12.png" alt="AraGraphers" width={300} height={300} />
					</div>

					<p>
						Em <span className="font-bold text-teal-600">Sobre</span>, você poderá ler sobre o propósito da aplicação e a origem do seu nome.					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto13.png" alt="sobre" width={300} height={300} />
					</div>

					<p>
						A qualquer momento, você pode clicar no nome <span className="font-bold text-teal-600">AraGraph</span> ou na logo para ser redirecionado à página inicial com o catálogo de aves.					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto14.png" alt="logo" width={300} height={300} />
					</div>

				</section>
				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
						<List />
						Lista Vermelha da IUCN
					</h2>
					<p className="py-4">
						A ferramenta também exibe o estado de conservação de cada ave com base na classificação da
						<span className="font-bold text-teal-600"> Red List da IUCN</span> (International Union for Conservation of Nature).
					</p>
		
					<p className="py-2">
						Cada ave possui seu estado de conservação. Os estados são classificados como:
					</p>
					<ul className="list-disc list-inside text-gray-700 mb-4">
						<li>
							<span className="font-bold text-green-600">LC (Least Concern):</span> Menor Preocupação
						</li>
						<li>
							<span className="font-bold text-yellow-500">NT (Near Threatened):</span> Quase Ameaçada
						</li>
						<li>
							<span className="font-bold text-orange-500">VU (Vulnerable):</span> Vulnerável
						</li>
						<li>
							<span className="font-bold text-red-500">EN (Endangered):</span> Em Perigo
						</li>
						<li>
							<span className="font-bold text-purple-500">CR (Critically Endangered):</span> Criticamente Ameaçada
						</li>
						<li>
							<span className="font-bold text-gray-600">EX (Extinct):</span> Extinta
						</li>
					</ul>
					<p>
						Essa classificação é útil para identificar espécies em risco e promover a conscientização sobre sua preservação.
					</p>
				</section>


			</main>
		</div>
	)
}