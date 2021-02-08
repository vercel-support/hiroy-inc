import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Information } from '../interfaces/apiInformation';

import { faHamburger, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props: Information) {
    const [information, setInformation] = useState(props);
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () => {
        setNavigationToggler(!navigationToggler);
    }

    return (
        <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
            <button onClick={handleNavigationToggler} className="mi-header-toggler">
                {!navigationToggler ? <FontAwesomeIcon icon={faHamburger} /> : <FontAwesomeIcon icon={faWindowClose} />}
            </button>
            <div className="mi-header-inner">
                <div className="mi-header-image">
                    <Link href="/">
                        <a>
                            <Image src={information.brandImage || ''} alt="brandimage" width={300} height={300} />
                        </a>
                    </Link>
                </div>

                <ul className="mi-header-menu">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                </ul>
                <p className="mi-header-copyright">&copy; {new Date().getFullYear()} <b>Hi Roy Inc (Not Joking)</b></p>
            </div>
        </nav>
    )
}


export default Header;