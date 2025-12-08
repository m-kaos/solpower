import React from 'react';

const BillingTableSection: React.FC = () => {
    const getRowColor = (amount: string) => {
        const numAmount = parseFloat(amount.replace(/[$,]/g, ''));
        if (numAmount >= 3000) return 'bg-red-100 hover:bg-red-200';
        if (numAmount >= 2000) return 'bg-orange-100 hover:bg-orange-200';
        if (numAmount >= 1000) return 'bg-yellow-100 hover:bg-yellow-200';
        return 'bg-green-100 hover:bg-green-200';
    };

    const billingData = [
        { period: "Nov - Ene '22", kwh: 586, amount: "$1,346" },
        { period: "Ene - Mar '23", kwh: 971, amount: "$2,875" },
        { period: "Mar - May '23", kwh: 332, amount: "$337" },
        { period: "May - Jul '23", kwh: 857, amount: "$1,042" },
        { period: "Jul - Sep '23", kwh: 1167, amount: "$2,211" },
        { period: "Sep - Nov '23", kwh: 650, amount: "$1,696" },
        { period: "Nov - Ene '24", kwh: 486, amount: "$1,149" },
        { period: "Ene - Mar '24", kwh: 560, amount: "$1,350" },
        { period: "Mar - May '24", kwh: 254, amount: "$271" },
        { period: "May - Jul '24", kwh: 219, amount: "$235" },
        { period: "Jul - Sep '24", kwh: 195, amount: "$210" },
    ];

    return (
        <section className="py-20" style={{ background: '#f1f1f1' }} aria-labelledby="billing-heading">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 id="billing-heading" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Por fin podrás ahorrar en tu factura de CFE
                    </h2>
                    <p className="text-xl text-gray-600">
                        Mira cuánto podrías estar ahorrando con paneles solares
                    </p>
                </div>

                <div className="max-w-4xl mx-auto overflow-x-auto rounded-[30px] shadow-[20px_20px_60px_0px_rgba(0,0,0,0.1),-20px_-20px_60px_0px_rgba(255,255,255,0.7)] p-8" style={{ background: '#f1f1f1' }}>
                    <table className="w-full border-collapse rounded-xl overflow-hidden">
                        <thead className="bg-gradient-to-r from-[#007F5F] to-[#008BD6] text-white">
                            <tr>
                                <th className="py-4 px-4 text-left font-bold text-sm md:text-base">Período</th>
                                <th className="py-4 px-4 text-center font-bold text-sm md:text-base">kWh</th>
                                <th className="py-4 px-4 text-center font-bold text-sm md:text-base">Importe</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {billingData.map((row, index) => (
                                <React.Fragment key={index}>
                                    <tr className={`${getRowColor(row.amount)} transition-all duration-200`}>
                                        <td className="py-3 px-4 border-b border-gray-200 text-sm md:text-base">{row.period}</td>
                                        <td className="py-3 px-4 text-center border-b border-gray-200 font-semibold text-sm md:text-base">{row.kwh}</td>
                                        <td className="py-3 px-4 text-center border-b border-gray-200 font-bold text-base md:text-lg">{row.amount}</td>
                                    </tr>

                                    {index === 4 && (
                                        <tr className="bg-gradient-to-r from-[#F39611] to-[#F39611]/80">
                                            <td colSpan={3} className="py-4 px-4 text-center">
                                                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                                    </svg>
                                                    <span className="text-white font-bold text-sm md:text-lg">Paneles Instalados</span>
                                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg text-gray-700 mb-6">
                        ¿Quieres reducir estos costos? Cotiza tu sistema solar ahora.
                    </p>
                    <a
                        href="https://wa.me/message/S7YOUJLEW2Q7C1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#F39611] hover:bg-[#F39611]/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
                    >
                        Agenda una cita
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BillingTableSection;
