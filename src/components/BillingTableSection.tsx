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
        { period: "del 24 NOV 22 al 20 ENE 23", kwh: 586, amount: "$1,346.00" },
        { period: "del 20 ENE 23 al 21 MAR 23", kwh: 971, amount: "$2,875.00" },
        { period: "del 21 MAR 23 al 18 MAY 23", kwh: 332, amount: "$337.00" },
        { period: "del 18 MAY 23 al 19 JUL 23", kwh: 857, amount: "$1,042.00" },
        { period: "del 19 JUL 23 al 18 SEP 23", kwh: 1167, amount: "$2,211.00" },
        { period: "del 18 SEP 23 al 21 NOV 23", kwh: 650, amount: "$1,696.00" },
        { period: "del 21 NOV 23 al 17 ENE 24", kwh: 486, amount: "$1,149.00" },
        { period: "del 17 ENE 24 al 15 MAR 24", kwh: 560, amount: "$1,350.00" },
        { period: "del 15 MAR 24 al 16 MAY 24", kwh: 254, amount: "$271.00" },
        { period: "del 16 MAY 24 al 17 JUL 24", kwh: 219, amount: "$235.00" },
        { period: "del 17 JUL 24 al 13 SEP 24", kwh: 195, amount: "$210.00" },
    ];

    return (
        <section className="py-20" style={{ background: '#f1f1f1' }}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Por fin podrás ahorrar en tu factura de CFE
                    </h2>
                    <p className="text-xl text-gray-600">
                        Mira cuánto podrías estar ahorrando con paneles solares
                    </p>
                </div>

                <div className="max-w-6xl mx-auto overflow-x-auto rounded-[50px] shadow-[20px_20px_60px_0px_rgba(0,0,0,0.1),-20px_-20px_60px_0px_rgba(255,255,255,0.7)] p-6" style={{ background: '#f1f1f1' }}>
                    <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
                        <thead className="bg-[#007F5F] text-white">
                            <tr>
                                <th className="py-4 px-6 text-left font-bold">Período</th>
                                <th className="py-4 px-6 text-center font-bold">kWh</th>
                                <th className="py-4 px-6 text-center font-bold">Importe</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {billingData.map((row, index) => (
                                <React.Fragment key={index}>
                                    <tr className={`${getRowColor(row.amount)} transition-colors`}>
                                        <td className="py-3 px-6 border-b border-gray-200">{row.period}</td>
                                        <td className="py-3 px-6 text-center border-b border-gray-200 font-semibold">{row.kwh}</td>
                                        <td className="py-3 px-6 text-center border-b border-gray-200 font-bold text-lg">{row.amount}</td>
                                    </tr>

                                    {index === 4 && (
                                        <tr className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
                                            <td colSpan={3} className="py-6 px-6 text-center">
                                                <div className="flex items-center justify-center gap-6">
                                                    <div className="flex gap-1">
                                                        {[...Array(6)].map((_, i) => (
                                                            <div key={i} className="w-3 h-8 bg-blue-600 border border-gray-300 rounded-sm"></div>
                                                        ))}
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <svg className="w-6 h-6 text-yellow-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        <svg className="w-6 h-6 text-yellow-400 animate-bounce" style={{ animationDelay: '0.1s' }} fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>

                                                    <span className="text-white font-bold text-xl">⚡ PANELES SOLARES INSTALADOS ⚡</span>

                                                    <div className="flex gap-2">
                                                        <svg className="w-6 h-6 text-yellow-400 animate-bounce" style={{ animationDelay: '0.2s' }} fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        <svg className="w-6 h-6 text-yellow-400 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>

                                                    <div className="flex gap-1">
                                                        {[...Array(6)].map((_, i) => (
                                                            <div key={i} className="w-3 h-8 bg-blue-600 border border-gray-300 rounded-sm"></div>
                                                        ))}
                                                    </div>
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
