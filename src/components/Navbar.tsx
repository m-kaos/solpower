import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const [isPastHero, setIsPastHero] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsPastHero(window.scrollY > window.innerHeight - 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Desktop Navbar - Always visible */}
            <nav className={`hidden md:flex fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isPastHero
                    ? 'bg-white/10 backdrop-blur-md py-3 shadow-lg border-b border-white/20'
                    : 'bg-transparent py-4'
            } px-6 md:px-12 justify-between items-center`}>
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Solpower"
                        className={`h-10 md:h-12 transition-all duration-500 ${
                            isPastHero ? 'brightness-100' : 'brightness-0 invert'
                        }`}
                    />
                </div>

                <div className="flex gap-6 items-center">
                    <button
                        onClick={() => scrollToSection('quoter')}
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/20 ${
                            isPastHero ? 'text-gray-800' : 'text-white'
                        }`}
                    >
                        Cotizador
                    </button>
                    <a
                        href="#blog"
                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/20 ${
                            isPastHero ? 'text-gray-800' : 'text-white'
                        }`}
                    >
                        Blog
                    </a>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-6 py-2 rounded-lg text-sm font-medium bg-[#F39611] text-white hover:bg-[#F39611]/90 transition-all"
                    >
                        Contacto
                    </button>
                </div>
            </nav>

            {/* Mobile Burger Button - Fixed top right */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden fixed top-4 right-4 z-[60] p-2 rounded-md backdrop-blur-md cursor-pointer transition-all duration-500 ${
                    isPastHero
                        ? 'bg-white/90 text-gray-800 shadow-lg'
                        : 'bg-white/10 text-white'
                }`}
            >
                {mobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-lg shadow-2xl z-50 transition-transform duration-300 ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col gap-6 p-8 mt-16">
                    <button
                        onClick={() => scrollToSection('quoter')}
                        className="text-gray-800 font-medium text-lg text-left hover:text-[#008BD6] transition-colors"
                    >
                        Cotizador
                    </button>
                    <a
                        href="#blog"
                        className="text-gray-800 font-medium text-lg hover:text-[#008BD6] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Blog
                    </a>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-6 py-3 rounded-lg font-medium bg-[#F39611] text-white hover:bg-[#F39611]/90 transition-all text-center"
                    >
                        Contacto
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
