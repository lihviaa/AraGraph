import BirdList from "@/components/BirdList"; 
 
export default function Home() { 
  return ( 
    <main className="flex flex-col items-center font-sans bg-gray-100 min-h-screen bg-[url('/images/equipe/background_equipe.jpg')] bg-cover bg-center">
    <div className="container flex  mx-auto px-4 py-8"> 
      <BirdList /> 
    </div>
    </main>
  ); 
}
