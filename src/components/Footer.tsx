import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#008BD6] text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Solpower</h3>
                        <p className="text-white/80 mb-4">
                            Reduce tu factura de CFE hasta en un 95% con energía solar limpia y renovable.
                        </p>
                        <p className="text-white/80">
                            Somos una empresa filial de{' '}
                            <a
                                href="https://doctormanzana.com.mx/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F39611] hover:underline"
                            >
                                Doctor Manzana Monterrey
                            </a>
                            {' '}con más de 14 años de experiencia.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#nosotros" className="text-white/80 hover:text-white transition-colors">
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="#cotizador" className="text-white/80 hover:text-white transition-colors">
                                    Cotizador
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Contacto</h4>
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/message/S7YOUJLEW2Q7C1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white/80 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                +52 81 3681 6486
                            </a>
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
