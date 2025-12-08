import React from 'react';

const BenefitsSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#F1F1F1] to-transparent" aria-labelledby="benefits-heading">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 id="benefits-heading" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Principales beneficios de tener paneles solares
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Benefit 1 */}
                    <div className="liquid-glass-card p-8 bg-[#008BD6]/10">
                        <div className="card-content">
                            <div className="w-20 h-20 bg-[#F39611] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Ahorro económico</h3>
                            <p className="text-gray-700 text-center">
                                Reduce tu factura de CFE hasta en un 95% y recupera tu inversión en pocos años.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="liquid-glass-card p-8 bg-[#008BD6]/10">
                        <div className="card-content">
                            <div className="w-20 h-20 bg-[#007F5F] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Aumento del valor de la propiedad</h3>
                            <p className="text-gray-700 text-center">
                                Las propiedades con sistemas solares tienen mayor valor en el mercado inmobiliario.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="liquid-glass-card p-8 bg-[#008BD6]/10">
                        <div className="card-content">
                            <div className="w-20 h-20 bg-[#008BD6] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Bajo mantenimiento y larga vida útil</h3>
                            <p className="text-gray-700 text-center">
                                Los paneles solares requieren mínimo mantenimiento y tienen una vida útil de más de 25 años.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SVG Filter */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.008 0.008"
                            numOctaves={2}
                            seed={92}
                            result="noise"
                        />
                        <feGaussianBlur
                            in="noise"
                            stdDeviation={2}
                            result="blurred"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="blurred"
                            scale={150}
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>
        </section>
    );
};

export default BenefitsSection;
