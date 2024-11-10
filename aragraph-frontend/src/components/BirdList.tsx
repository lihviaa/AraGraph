"use client";

import React, { useState } from 'react';
import { Bird, Volume2, VolumeX, Search } from "lucide-react";  
import birdslist from "@/lib/birdslist";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface BirdType {
  id: number;
  taxon: string;
  nomecomum: string;
  ordem: string;
  familia: string;
  genero: string;
  especie: string;
  linkAudio: string;
  imagem: string;
  linkWiki: string;
  statusExtincao: string;
}

export default function BirdList() {
  const [selectedBird, setSelectedBird] = useState<BirdType | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCloseDialog = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setSelectedBird(null);
  };

  const filteredBirds = birdslist.filter((bird) =>
    bird.nomecomum.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bird.taxon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
      <div className="sticky top-0 bg-white z-10 py-4 shadow-md w-full flex justify-center"> 
        <div className="flex items-center gap-2 w-[300px]">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar aves..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-6">
        {filteredBirds.map((bird) => (
          <Card 
            key={bird.id}
            onClick={() => setSelectedBird(bird)}
            className="cursor-pointer hover:bg-gray-50 transition-colors h-48 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center p-2 gap-2">
              <Avatar className="h-20 w-20">
                <AvatarImage 
                  src={bird.imagem} 
                  alt={`${bird.id}`}
                  className="object-cover" 
                />
                <AvatarFallback>
                  <Bird />
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-md font-semibold">{bird.nomecomum}</div>
                <div className="text-xs text-gray-600">{bird.taxon}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={selectedBird !== null} onOpenChange={handleCloseDialog}>
        {selectedBird && (
          <DialogContent className="max-w-xl p-4"> {/* Reduzi o tamanho máximo do modal e o padding */}
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold"> {/* Título menor */}
                {selectedBird.nomecomum}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2"> {/* Reduzi o espaçamento */}
              <div className="w-full h-48 md:h-64 relative rounded-lg overflow-hidden"> {/* Altura reduzida da imagem */}
                <img
                  src={selectedBird.imagem}
                  alt={selectedBird.nomecomum}
                  className="w-full h-full object-contain bg-gray-100"
                />
              </div>
              <p className="text-gray-600 italic text-sm">{selectedBird.taxon}</p> {/* Texto menor */}
              <div className="grid grid-cols-2 gap-2"> {/* Menor espaçamento na grade */}
                <div>
                  <p className="font-semibold text-sm">Ordem:</p>
                  <p className="text-gray-600 text-sm">{selectedBird.ordem}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Família:</p>
                  <p className="text-gray-600 text-sm">{selectedBird.familia}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Gênero:</p>
                  <p className="text-gray-600 text-sm">{selectedBird.genero}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Espécie:</p>
                  <p className="text-gray-600 text-sm">{selectedBird.especie}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold text-sm">Status de Extinção:</p>
                  <p className="text-gray-600 text-sm">{selectedBird.statusExtincao}</p>
                </div>
              </div>
              {selectedBird.linkAudio && (
                <>
                  <audio ref={audioRef} src={selectedBird.linkAudio} />
                  <button
                    onClick={toggleAudio}
                    className="mt-2 mb-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors flex items-center gap-2 text-sm mx-auto" // Tamanho do botão e texto reduzido
                  >
                    {isPlaying ? (
                      <>
                        <VolumeX className="w-4 h-4" />
                        Pausar Som
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        Tocar Som
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
