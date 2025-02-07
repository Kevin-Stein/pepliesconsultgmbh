import React from 'react';
import { HashLink } from 'react-router-hash-link';

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // Adjust this value to set the offset
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about" scroll={scrollWithOffset}>
                Über uns
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services" scroll={scrollWithOffset}>
                Leistungen
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#portfolio" scroll={scrollWithOffset}>
                Athleten
            </HashLink>
            
        </>
    )
}

export default NavLinks;
