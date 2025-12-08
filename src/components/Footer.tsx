import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer id="contact" className="bg-gradient-to-br from-[#007F5F] via-[#008BD6] to-[#007F5F] text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <img src={logo} alt="Solpower" className="h-16 mb-4 brightness-0 invert" />
                        <p className="text-white/90 mb-4 leading-relaxed">
                            Reduce tu factura de CFE hasta en un 95% con energía solar limpia y renovable.
                        </p>
                        <p className="text-white/90 leading-relaxed">
                            Somos una empresa filial de{' '}
                            <a
                                href="https://doctormanzana.com.mx/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F39611] hover:text-[#F39611]/80 transition-colors font-semibold"
                            >
                                Doctor Manzana Monterrey
                            </a>
                            {' '}con más de 14 años de experiencia.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            <li>
                                {isHomePage ? (
                                    <button
                                        onClick={() => scrollToSection('quoter')}
                                        className="text-white/90 hover:text-white hover:translate-x-1 transition-all inline-flex items-center"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        Cotizador
                                    </button>
                                ) : (
                                    <Link
                                        to="/#quoter"
                                        className="text-white/90 hover:text-white hover:translate-x-1 transition-all inline-flex items-center"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        Cotizador
                                    </Link>
                                )}
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all inline-flex items-center"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://doctormanzana.com.mx/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all inline-flex items-center"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Doctor Manzana
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Contacto</h4>
                        <div className="space-y-4">
                            <a
                                href="https://wa.me/message/S7YOUJLEW2Q7C1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white/90 hover:text-white transition-all hover:scale-105 bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                            >
                                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <div>
                                    <div className="font-semibold">WhatsApp</div>
                                    <div className="text-sm">+52 81 3681 6486</div>
                                </div>
                            </a>
                            <p className="text-sm text-white/80 mt-4">
                                Horario de atención: Lun - Vie, 9:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 pt-8 text-center">
                    <p className="text-white/80">
                        © {new Date().getFullYear()} SOLPOWER. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
