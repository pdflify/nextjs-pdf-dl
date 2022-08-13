import Link from 'next/link'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 px-6 dark:bg-gray-800 ">    
      <div className="f mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-center py-8 text-center lg:justify-between lg:text-left">
        <div className="mb-2 w-full lg:mb-0 lg:w-1/2">
          <div className="block w-full lg:flex lg:w-auto lg:items-center">
            <div className="lg:grow">
              <span className="mb-2 block text-gray-800 dark:text-gray-300 lg:mb-0 lg:mr-8 lg:inline-block">
              {`© ${new Date().getFullYear()}`} {'Stacktix.org'}
              </span>
              {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link  
              
              href={link.href} 

              className="text-2xl">

                {link.title}
                
              </Link>
            </div>
          ))}
            </div>
          </div>
        </div>
        <div className=" w-full justify-center lg:w-1/2 lg:justify-end">
         <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
      </div>
    </footer>
  );
}