import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

// icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
  return (
    <>
      <section className="flex flex-col items-center mt-16 mb-16">
        <h1 className="flex-1 text-center text-8xl font-bold tracking-tighter leading-tight">
          Hi.
        </h1>
        <h4 className="flex-1 text-center text-lg mt-5">
          A statically generated <strong>{CMS_NAME}</strong>
        </h4>
      </section>
      <section id="me" className="flex flex-col md:flex-row content-center mb-20">
        <div className="flex-initial md:w-1/2 md:p-20 md:pt-0">
          <div className="relative w-full h-full text-center">
            <Image src="/assets/images/me.jpeg" width="400" height="400" layout="responsive" />
          </div>
        </div>
        <div className="flex-initial pt-10 w-full md:w-1/4 md:pt-20">
          <section id="social" className="flex flex-col items-center md:items-left">
            <a href="https://twitter.com/royboy789" className="flex flex-row items-center mb-5" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="w-6 mr-1" />/ @royboy789
            </a>
            <a href="https://github.com/royboy789" className="flex flex-row items-center mb-5" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="w-6 mr-1" /> / @royboy789
            </a>
            <a href="https://linkedin.com/in/royboy789" className="flex flex-row items-center mb-10" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 mr-1" /> / royboy789
            </a>
            <a href="https://bit.ly/hi-roy" className="flex flex-row items-center mb-2" target="_blank" rel="noopener noreferrer">
              swag @ https://bit.ly/hi-roy
            </a>
            <a href="https://hiroy.club" className="flex flex-row items-center " target="_blank" rel="noopener noreferrer">
              club @ https://hiroy.club
            </a>
          </section>
        </div>
      </section>
    </>
  )
}

export default Intro
