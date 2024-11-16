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
						<Image src="/images/ajuda/foto1.png" alt="lista aves" width={300} height={300} />

					</div>
					<p>
						Selecione uma ave para acessar mais informações sobre ela, como ordem e família.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto2.png" alt="card detalhado" width={300} height={300} />
					</div>
					<p>
						Para conhecer ainda mais sobre a ave, você pode clicar em Saiba Mais, onde será redirecionado para uma página com ainda mais detalhes sobre a ave.
					</p>
				</section>

				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2">
						<Volume2 />
						Sons de Aves
					</h2>
					<p>
						Você também pode ouvir o canto da ave ao clicar em Tocar Som.
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
						No exemplo acima, procuramos pelo termo Rapazinho, o qual foi encontrado no nome comum de duas aves.
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
						Menos Vulnerável: A lista inicia pelas aves menos vulneráveis, e ao final da lista estão as aves mais vulneráveis.
					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto9.png" alt="ordenação estado de preservação menos" width={700} height={700} />
					</div>

					<p>
						Mais Vulnerável: A lista inicia pelas aves mais vulneráveis, e ao final da lista estão as aves menos vulneráveis.
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
						Em Equipe, você encontra os idealizadores e desenvolvedores da ferramenta.
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
						Em "Sobre", você poderá ler sobre o propósito da aplicação e a origem do seu nome.					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto13.png" alt="sobre" width={300} height={300} />
					</div>

					<p>
						A qualquer momento, você pode clicar no nome AraGraph ou na logo para ser redirecionado à página inicial com o catálogo de aves.					</p>
					<div className="flex justify-center py-8">
						<Image src="/images/ajuda/foto14.png" alt="logo" width={300} height={300} />
					</div>

				</section>

			</main>
		</div>
	)
}