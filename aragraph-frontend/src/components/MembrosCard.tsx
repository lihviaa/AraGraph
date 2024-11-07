import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"; 
import { SquareUserRound } from "lucide-react";
import { teamMembers } from '../lib/Members'

export default function MembrosCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 max-w-7xl mx-auto">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
          <Avatar className="h-40 w-40 mx-auto">
            <AvatarImage src={member.image} alt={member.alt} />
            <AvatarFallback>
              <SquareUserRound />
            </AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-600 mt-2 text-sm">{member.role}</p>
          <a 
            href={member.linkedin} 
            className="mt-4 inline-block px-6 py-2 text-sm font-medium text-white bg-teal-300 rounded-full hover:bg-teal-400 transition duration-300"
          >
            CONHECER
          </a>
        </div>
      ))}
    </div>
  );
}