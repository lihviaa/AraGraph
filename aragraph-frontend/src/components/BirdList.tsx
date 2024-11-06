import { Bird } from "lucide-react";
import birdslist from "@/lib/birdslist";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function BirdCard() {
  return (
    <div className="flex flex-col gap-1">
      {birdslist.map((bird) => (
        <Card key={bird.id}>
          <div className="flex flex-row items-center p-4 gap-4 transition-shadow duration-300 hover:shadow-md">
            <Avatar className="h-12 w-12">
              <AvatarImage src={bird.imagem} alt={`${bird.id}`} />
              <AvatarFallback>
                <Bird />
              </AvatarFallback>
            </Avatar>
            <CardContent className="flex flex-col p-0">
              <div className="text-xl font-semibold">{bird.nomecomum}</div>
              <div className="text-base">{bird.taxon}</div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
