'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import routes from "@/lib/routes"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

export default function HeaderNav() {
  const pathname = usePathname()

  return (
    <>
      <header className="w-full px-14 flex justify-between items-center bg-white shadow-lg rounded-lg">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center p-1">
                <Link href="/" passHref>
                  <Image src="/images/logoredmn.png" alt="Logo" width={80} height={80} />
                </Link>
                <Link href="/" passHref>
                  <h1 className="ml-3 text-4xl font-bold">ARAGRAPH</h1>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ir à Página Inicial</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <nav className="flex mr-8">
          {routes.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className={`px-4 py-2 rounded-lg ${pathname === item.path ? 'bg-[#1F6789] text-white' : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              aria-current={pathname === item.path ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  )
}