import Link from "next/link";
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

const footernav = [
  { name: 'Privacy Policy', href: '/', current: false },
  { name: 'Terms', href: '#', current: false },
  { name: 'Contact', href: '/about', current: false },
  { name: 'Advertisement', href: '#', target:'_blank', current: false },
]

function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 px-6">
      <div className="flex items-center justify-center lg:justify-between text-center lg:text-left flex-wrap py-8 w-full max-w-screen-xl mx-auto">
        <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
          <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <div className="lg:grow">
              <span className="text-gray-800 dark:text-gray-300 block lg:inline-block mb-2 lg:mb-0 lg:mr-8">
                © {new Date().getFullYear()} {"Stacktix.org"}
              </span>
              {footernav.map((item) => (
                <Link  key={item.name} href={item.href} target={item.target}>                 
                  <a className="footer-menu-item no-underline inline-block lg:mt-0 hover:text-gray-800 text-gray-900 dark:text-gray-300 dark-hover:text-gray-100 mr-4">
                    {item.name}
                  </a>
                </Link>   
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
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

export default Footer;