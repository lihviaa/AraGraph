'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import routes from "@/lib/routes"

export default function HeaderNav() {
  const pathname = usePathname()

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" />
      <header className="w-full p-1 flex justify-between items-center bg-white shadow-lg rounded-lg">
        <div className="flex items-center p-1">
          <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
          <Link href="/" passHref>
            <h1 className="ml-3 text-4xl font-bold" style={{ fontFamily: 'Julius Sans One, sans-serif' }}>ARAGRAPH</h1> 
          </Link>
        </div>
        <nav className="flex space-x-4">
          {routes.map((item) => (
            <Link 
              href={item.path} 
              key={item.label} 
              className={`px-4 py-2 rounded-lg ${
                pathname === item.path ? 'bg-[#1F6789] text-white' : 'bg-transparent text-gray-600 hover:text-gray-900'
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
