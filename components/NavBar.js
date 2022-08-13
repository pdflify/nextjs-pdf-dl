import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'

export default function NavBar() {
  return ( 
    <header className="dark:bg-gray-800 bg-white py-2 shadow-md sm:py-2 flex items-center z-30 w-full">
    <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="logo text-gray-800 dark:text-white font-sans font-semibold text-2xl">
        PDFly.in
        </div>
        <div className="flex items-center">
            <nav className="font-sans text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            {headerNavLinks.map((link) => (
             <Link key={link.title} href={link.href} target={link.target}
             className="py-2 px-6 flex hover:text-red-500">            
                {link.title}             
             </Link>
            ))}
            </nav>
            <ThemeSwitch />
            <MobileNav /> 
        </div>
    </div>
    </header>
  )
}

