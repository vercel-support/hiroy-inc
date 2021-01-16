import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <span className="text-sm font-bold tracking-tighter leading-tight text-left">
            &copy; 2021 Hi Roy INC (not even joking)
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
