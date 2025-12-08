import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const [isPastHero, setIsPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsPastHero(window.scrollY > window.innerHeight - 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isPastHero
            ? 'bg-[#008BD6]/95 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-4'
            } px-6 md:px-12 flex justify-between items-center`}>

            <div className="flex items-center gap-3">
                <img
                    src={logo}
                    alt="Solpower"
                    className={`h-10 md:h-12 transition-all duration-500 ${isPastHero ? 'brightness-100' : 'brightness-0 invert'
                        }`}
                />
            </div>

            <div className="hidden md:flex gap-6">
                <a href="#contact" className={`glass-button px-6 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/20 capitalize ${isPastHero ? 'text-gray-800 hover:bg-gray-200' : 'text-white'
                    }`}>
                    Contacto
                </a>
                <a href="#nosotros" className={`glass-button px-6 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/20 capitalize ${isPastHero ? 'text-gray-800 hover:bg-gray-200' : 'text-white'
                    }`}>
                    Nosotros
                </a>
            </div>

            <div className="md:hidden text-white cursor-pointer p-2 glass-button rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
