import { CMS_NAME } from '../lib/constants'
import Link from 'next/link';

// icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  return (
    <>
      <section className="flex flex-col items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="flex-1 text-center text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Hi.
        </h1>
        <h4 className="flex-1 text-center text-lg mt-5 md:pl-8">
          A statically generated <strong>{CMS_NAME}</strong> using{' '}
          <Link
            href="https://nextjs.org/"
          >
            <a className="underline hover:text-success duration-200 transition-colors">Next.js</a>
          </Link>{' '}
        </h4>
      </section>
      <section id="social" className="flex flex-col items-center mt-16 mb-16">
        <a href="https://twitter.com/royboy789" className="flex flex-row items-center mb-5" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="w-6 mr-1" />/ @royboy789
        </a>
        <a href="https://github.com/royboy789" className="flex flex-row items-center" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="w-6 mr-1" /> / @royboy789
        </a>
      </section>
    </>
  )
}

export default Intro
