import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { faHamburger, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Header() {
    const [information, setInformation] = useState("");
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () => {
        setNavigationToggler(!navigationToggler);
    }

    useEffect(() => {
        axios.get('/api/information')
            .then(response => {
                setInformation(response.data);
            })
    }, [])

    return (
        <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
            <button onClick={handleNavigationToggler} className="mi-header-toggler">
                {!navigationToggler ? <FontAwesomeIcon icon={faHamburger} /> : <FontAwesomeIcon icon={faWindowClose} />}
            </button>
            <div className="mi-header-inner">
                <div className="mi-header-image">
                    <Link href="/">
                        <img src={information.brandImage} alt="brandimage" />
                    </Link>
                </div>

                <ul className="mi-header-menu">
                    <li><Link href="/"><span>Home</span></Link></li>
                    <li><Link href="/about"><span>About</span></Link></li>
                    <li><Link href="/resume"><span>Resume</span></Link></li>
                    <li><Link href="/portfolios"><span>Portfolios</span></Link></li>
                    <li><Link href="/blogs"><span>Blogs</span></Link></li>
                    <li><Link href="/contact"><span>Contact</span></Link></li>
                </ul>
                <p className="mi-header-copyright">&copy; {new Date().getFullYear()} <b><a rel="noopener noreferrer" target="_blank" href="https://nuclearthemes.com">NuclearThemes</a></b></p>
            </div>
        </nav>
    )
}


export default Header;