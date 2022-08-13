import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'
import NextNProgress from 'nextjs-progressbar'
const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <NextNProgress
        color="#ef4444"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
       <header className="z-30 flex w-full items-center bg-white py-2 shadow-md dark:bg-gray-800 sm:py-2">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="font-sans text-2xl font-semibold text-gray-800 dark:text-white">
          {'PDFly.in'}
        </div>
        <div className="flex items-center">
          <div className="hidden items-center font-sans text-lg uppercase text-gray-800 dark:text-white lg:flex">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target={link.target}
                className="flex py-2 px-6 hover:text-red-500"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
      <SectionContainer>
        <main className="overflow-x-hidden">{children}</main>
      </SectionContainer>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
