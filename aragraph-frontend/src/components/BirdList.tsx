"use client";

import React, { useState, useEffect } from 'react';
import { Bird, Volume2, VolumeX, Search, ArrowDownWideNarrow } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";


interface BirdType {
  id: number;
  taxon: string;
  nomeComum: string;
  ordem: string;
  familia: string;
  genero: string;
  especie: string;
  linkAudio: string;
  linkImg: string;
  linkWiki: string;
  statusExtincao: string;
}

export default function BirdList() {
  const [birds, setBirds] = useState<BirdType[]>([]);
  const [selectedBird, setSelectedBird] = useState<BirdType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await fetch("/api/birds");
        if (!response.ok) {
          throw new Error("Erro na resposta do servidor.");
        }
        const data = await response.json();
        setBirds(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Um erro no servidor ocorreu. Por favor, volte mais tarde.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBirds();
  }, []);

  

  if (loading) {
    return (
      <div>
        <p className="font-semibold text-white">Carregando lista...</p>
      </div>
    );
  }

  if (error) {
    return <p>Um erro no servidor ocorreu. Por favor, volte mais tarde.</p>;
  }

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

  const handleSortChange = (value: string) => {
    setSortCriteria(value);
  };

  const sortBirds = (birds: BirdType[]) => {
    return [...birds].sort((a, b) => {
      switch (sortCriteria) {
        case 'nome comum':
          return a.nomeComum.localeCompare(b.nomeComum);
        case 'taxon':
          return a.taxon.localeCompare(b.taxon);
        case 'ordem':
          return a.ordem.localeCompare(b.ordem);
        case 'familia':
          return a.familia.localeCompare(b.familia);
        case 'genero':
          return a.genero.localeCompare(b.genero);
        case 'menos vulneravel':
          return a.statusExtincao.localeCompare(b.statusExtincao);
        case 'mais vulneravel':
          return b.statusExtincao.localeCompare(a.statusExtincao);
        default:
          return 0;
      }
    });
  };

  const filteredBirds = birds
    .filter((birds: BirdType) =>
      birds.nomeComum.toLowerCase().includes(searchTerm.toLowerCase()) ||
      birds.taxon.toLowerCase().includes(searchTerm.toLowerCase()) ||
      birds.ordem.toLowerCase().includes(searchTerm.toLowerCase()) ||
      birds.familia.toLowerCase().includes(searchTerm.toLowerCase()) ||
      birds.genero.toLowerCase().includes(searchTerm.toLowerCase()) ||
      birds.especie.toLowerCase().includes(searchTerm.toLowerCase()) ||
      birds.statusExtincao.toLowerCase().includes(searchTerm.toLowerCase())
    );


  const sortedBirds = sortBirds(filteredBirds);

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
      <div className="sticky rounded top-0 gap-32 bg-white z-10 py-4 shadow-md w-full flex px-8 justify-center">
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
        <div className="px-8 flex items-center gap-2">
          <ArrowDownWideNarrow />
          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Ordem Alfabética</SelectLabel>
                <SelectItem value="nome comum">Nome Comum</SelectItem>
                <SelectItem value="taxon">Táxon</SelectItem>
                <SelectItem value="ordem">Ordem</SelectItem>
                <SelectItem value="familia">Família</SelectItem>
                <SelectItem value="genero">Gênero</SelectItem>
                <SelectLabel>Preservação</SelectLabel>
                <SelectItem value="menos vulneravel">Menos Vulnerável</SelectItem>
                <SelectItem value="mais vulneravel">Mais Vulnerável</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-6">
        {sortedBirds.map((birds: BirdType) => (
          <TooltipProvider key={birds.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card
                  onClick={() => setSelectedBird(birds)}
                  className="cursor-pointer hover:bg-gray-100 transition-colors h-48 flex flex-col justify-center items-center"
                >
                  <div className="flex flex-col items-center p-2 gap-2">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src={birds.linkImg}
                        alt={`${birds.id}`}
                        className="object-cover"
                      />
                      <AvatarFallback>
                        <Bird />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <div className="text-md font-semibold">{birds.nomeComum}</div>
                      <div className="text-xs text-gray-600">{birds.taxon}</div>
                    </div>
                  </div>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ver Informações</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      <Dialog open={selectedBird !== null} onOpenChange={handleCloseDialog}>
        {selectedBird && (
          <DialogContent className="max-w-xl p-4">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {selectedBird.nomeComum}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2">
              <div className="w-full h-48 md:h-64 relative rounded-lg overflow-hidden">
                <img
                  src={selectedBird.linkImg}
                  alt={selectedBird.nomeComum}
                  className="w-full h-full object-contain bg-gray-100"
                />
              </div>
              <p className="text-gray-600 italic text-sm">{selectedBird.taxon}</p>
              <div className="grid grid-cols-2 gap-2">
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
                <div>
                  <p className="font-semibold text-sm">Status de Extinção:</p>
                  <p className="text-gray-600 text-sm">{selectedBird.statusExtincao}</p>
                </div>
                <div>
                  <a
                    href={selectedBird.linkWiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 underline text-sm"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
              <div className="pt-4">
                {selectedBird.linkAudio && (
                  <>
                    <audio ref={audioRef} src={selectedBird.linkAudio} />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={toggleAudio}
                            className="mt-2 mb-2 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm mx-auto"
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
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Escute o Canto da Ave</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
