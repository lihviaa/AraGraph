import MembrosCard from '../../components/MembrosCard'

export default function Equipe() {
  return (
    <main className="flex flex-col items-center font-sans bg-gray-100 min-h-screen bg-[url('/images/background_equipe.jpg')] bg-cover bg-center">
      <section className="text-center mt-12 px-4 py-12 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-4xl text-teal-500 font-extrabold">ARAGRAPHERS</h2>
        <p className="text-gray-600 mt-4">Conheça um pouco mais sobre os idealizadores do projeto</p>

        <MembrosCard />
      </section>
    </main>
  )
}
