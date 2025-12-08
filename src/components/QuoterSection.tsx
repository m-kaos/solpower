import React, { useState } from 'react';

type QuoteMode = 'bimonthly' | 'yearly' | 'single-bill';
type BillType = 'monthly' | 'bimonthly';

interface PlanDetails {
    plan: string;
    panels: number;
    totalKwh: number;
    price: number;
    customPanels?: boolean;
}

const QuoterSection: React.FC = () => {
    const [mode, setMode] = useState<QuoteMode>('bimonthly');
    const [billType, setBillType] = useState<BillType>('bimonthly');
    const [bimonthlyValues, setBimonthlyValues] = useState<number[]>([0, 0, 0, 0, 0, 0]);
    const [yearlyConsumption, setYearlyConsumption] = useState<number>(0);
    const [singleBillValue, setSingleBillValue] = useState<number>(0);
    const [result, setResult] = useState<PlanDetails | null>(null);
    const [downPaymentPercent, setDownPaymentPercent] = useState<number>(100);
    const [paymentMonths, setPaymentMonths] = useState<number>(1);

    const calculatePlan = (totalKwh: number): PlanDetails => {
        if (totalKwh >= 20000) {
            const estimatedPanels = Math.round(totalKwh / 920);
            return { plan: 'Consulta Técnica Requerida', panels: estimatedPanels, totalKwh, price: 0, customPanels: true };
        } else if (totalKwh >= 16600) {
            return { plan: 'Plan Premium XL', panels: 18, totalKwh, price: 149990 };
        } else if (totalKwh >= 14600) {
            return { plan: 'Plan Premium L', panels: 16, totalKwh, price: 134990 };
        } else if (totalKwh >= 11400) {
            return { plan: 'Plan Premium M', panels: 14, totalKwh, price: 119990 };
        } else if (totalKwh >= 9600) {
            return { plan: 'Plan Premium', panels: 12, totalKwh, price: 99990 };
        } else if (totalKwh >= 7600) {
            return { plan: 'Plan Avanzado Plus', panels: 10, totalKwh, price: 86900 };
        } else if (totalKwh >= 4800) {
            return { plan: 'Plan Avanzado', panels: 8, totalKwh, price: 78990 };
        } else if (totalKwh >= 2400) {
            return { plan: 'Plan Intermedio', panels: 6, totalKwh, price: 64990 };
        } else {
            return { plan: 'Plan Básico', panels: 4, totalKwh, price: 39990 };
        }
    };

    const handleBimonthlyCalculate = () => {
        const total = bimonthlyValues.reduce((sum, val) => sum + val, 0);
        setResult(calculatePlan(total));
    };

    const handleYearlyCalculate = () => {
        setResult(calculatePlan(yearlyConsumption));
    };

    const handleSingleBillCalculate = () => {
        const multiplier = billType === 'monthly' ? 12 : 6;
        const total = singleBillValue * multiplier;
        setResult(calculatePlan(total));
    };

    const resetCalculator = () => {
        setBimonthlyValues([0, 0, 0, 0, 0, 0]);
        setYearlyConsumption(0);
        setSingleBillValue(0);
        setResult(null);
        setDownPaymentPercent(100);
        setPaymentMonths(1);
    };

    const calculatePayment = () => {
        if (!result || result.customPanels) return null;
        const downPayment = (result.price * downPaymentPercent) / 100;
        const remaining = result.price - downPayment;
        const monthlyPayment = remaining / paymentMonths;
        return { downPayment, remaining, monthlyPayment };
    };

    const paymentCalc = calculatePayment();

    return (
        <section id="quoter" className="py-20" style={{ background: '#f1f1f1' }} aria-labelledby="quoter-heading">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 id="quoter-heading" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Calcula tu ahorro
                    </h2>
                    <p className="text-xl text-gray-600">
                        Descubre cuántos paneles solares necesitas
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <button
                            onClick={() => { setMode('bimonthly'); resetCalculator(); }}
                            className={`p-4 font-semibold transition-all md:border-r border-gray-300 ${mode === 'bimonthly'
                                ? 'bg-[#f1f1f1] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] text-gray-800'
                                : 'bg-[#f1f1f1] shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] text-gray-600 hover:text-gray-800'
                                } rounded-t-[50px] md:rounded-t-none md:rounded-tl-[50px]`}
                        >
                            📊 Consumo Bimestral
                        </button>
                        <button
                            onClick={() => { setMode('yearly'); resetCalculator(); }}
                            className={`p-4 font-semibold transition-all md:border-r border-gray-300 ${mode === 'yearly'
                                ? 'bg-[#f1f1f1] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] text-gray-800'
                                : 'bg-[#f1f1f1] shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] text-gray-600 hover:text-gray-800'
                                } md:rounded-none`}
                        >
                            📅 Consumo Anual
                        </button>
                        <button
                            onClick={() => { setMode('single-bill'); resetCalculator(); }}
                            className={`p-4 font-semibold transition-all ${mode === 'single-bill'
                                ? 'bg-[#f1f1f1] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] text-gray-800'
                                : 'bg-[#f1f1f1] shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.7)] text-gray-600 hover:text-gray-800'
                                } md:rounded-none md:rounded-tr-[50px]`}
                        >
                            🧾 Solo Tengo Mi Último Recibo
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto rounded-b-[50px] shadow-[20px_20px_60px_0px_rgba(0,0,0,0.1),-20px_-20px_60px_0px_rgba(255,255,255,0.7)] p-8 transition-all duration-500 ease-in-out overflow-hidden" style={{ background: '#f1f1f1' }}>
                    {mode === 'bimonthly' && (
                        <div className="transition-opacity duration-300">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ingresa tu consumo bimestral (kWh)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {bimonthlyValues.map((value, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Bimestre {index + 1}
                                        </label>
                                        <input
                                            type="number"
                                            min="0"
                                            value={value || ''}
                                            onChange={(e) => {
                                                const newValues = [...bimonthlyValues];
                                                newValues[index] = parseFloat(e.target.value) || 0;
                                                setBimonthlyValues(newValues);
                                            }}
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#007F5F] focus:outline-none"
                                            placeholder="0"
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={handleBimonthlyCalculate}
                                disabled={bimonthlyValues.every(v => v === 0)}
                                className={`w-full font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg ${bimonthlyValues.every(v => v === 0)
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-[#F39611] hover:bg-[#F39611]/90 hover:scale-105'
                                    } text-white`}
                            >
                                Calcular Plan Recomendado
                            </button>
                        </div>
                    )}

                    {mode === 'yearly' && (
                        <div className="transition-opacity duration-300">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ingresa tu consumo anual total (kWh)</h3>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Consumo Anual (kWh)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={yearlyConsumption || ''}
                                    onChange={(e) => setYearlyConsumption(parseFloat(e.target.value) || 0)}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#007F5F] focus:outline-none text-lg"
                                    placeholder="Ej: 3600"
                                />
                            </div>
                            <button
                                onClick={handleYearlyCalculate}
                                disabled={yearlyConsumption === 0}
                                className={`w-full font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg ${yearlyConsumption === 0
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-[#F39611] hover:bg-[#F39611]/90 hover:scale-105'
                                    } text-white`}
                            >
                                Calcular Plan Recomendado
                            </button>
                        </div>
                    )}

                    {mode === 'single-bill' && (
                        <div className="transition-opacity duration-300">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ingresa los datos de tu último recibo</h3>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700">
                                            <strong>Nota importante:</strong> Calcular basándose en un solo recibo puede no ser preciso, ya que el consumo eléctrico varía según la temporada del año. Para una cotización más exacta, te recomendamos usar el consumo anual o bimestral completo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Recibo</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setBillType('monthly')}
                                        className={`p-3 rounded-lg font-semibold transition-all ${billType === 'monthly' ? 'bg-[#007F5F] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                    >
                                        Mensual
                                    </button>
                                    <button
                                        onClick={() => setBillType('bimonthly')}
                                        className={`p-3 rounded-lg font-semibold transition-all ${billType === 'bimonthly' ? 'bg-[#007F5F] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                    >
                                        Bimestral
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Consumo en kWh ({billType === 'monthly' ? 'Mensual' : 'Bimestral'})
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={singleBillValue || ''}
                                    onChange={(e) => setSingleBillValue(parseFloat(e.target.value) || 0)}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#007F5F] focus:outline-none text-lg"
                                    placeholder="Ej: 300"
                                />
                                <p className="text-sm text-gray-500 mt-2">
                                    Se multiplicará por {billType === 'monthly' ? '12' : '6'} para estimar el consumo anual
                                </p>
                            </div>
                            <button
                                onClick={handleSingleBillCalculate}
                                disabled={singleBillValue === 0}
                                className={`w-full font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg ${singleBillValue === 0
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-[#F39611] hover:bg-[#F39611]/90 hover:scale-105'
                                    } text-white`}
                            >
                                Calcular Plan Recomendado
                            </button>
                        </div>
                    )}

                    {result && (
                        <div className="mt-8 transition-all duration-500 ease-in-out">
                            {result.customPanels ? (
                                <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white">
                                    <h3 className="text-2xl font-bold mb-4">⚠️ Instalación Personalizada Requerida</h3>
                                    <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm mb-4">
                                        <p className="text-lg mb-2">Consumo Anual: <strong>{result.totalKwh.toLocaleString()} kWh</strong></p>
                                        <p className="text-2xl font-bold">SON MÁS DE {result.panels} PANELES Y ES NECESARIA UNA VISITA DEL DEPARTAMENTO TÉCNICO SOLPOWER PARA UNA ESTIMACIÓN MÁS PRECISA</p>
                                    </div>
                                    <a href="https://wa.me/message/S7YOUJLEW2Q7C1" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-orange-600 font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg text-center">
                                        📱 Contactar Departamento Técnico
                                    </a>
                                </div>
                            ) : (
                                <div className="p-6 bg-gradient-to-r from-[#007F5F] to-[#008BD6] rounded-xl text-white">
                                    <h3 className="text-2xl font-bold mb-4">✨ Tu Plan Recomendado</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                                            <p className="text-sm opacity-90">Consumo Anual</p>
                                            <p className="text-3xl font-bold">{result.totalKwh.toLocaleString()} kWh</p>
                                        </div>
                                        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                                            <p className="text-sm opacity-90">Plan</p>
                                            <p className="text-2xl font-bold">{result.plan}</p>
                                        </div>
                                        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                                            <p className="text-sm opacity-90">Paneles Solares</p>
                                            <p className="text-3xl font-bold">{result.panels} paneles</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm mb-6">
                                        <p className="text-lg mb-2">Precio Total</p>
                                        <p className="text-5xl font-bold">${result.price.toLocaleString('es-MX')}</p>
                                        <p className="text-sm mt-2 opacity-90">MXN</p>
                                    </div>
                                    <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm mb-6">
                                        <p className="font-bold mb-2">El precio incluye:</p>
                                        <ul className="text-sm space-y-1">
                                            <li>✓ Instalación por técnicos certificados EC0586.01 y EC1181</li>
                                            <li>✓ Asesoría, visita técnica y trámite ante CFE</li>
                                            <li>✓ Paneles solares, inversor central, estructura de aluminio reforzada, cable fotovoltaico y protecciones</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white rounded-lg p-6 text-gray-800 mb-6">
                                        <h4 className="text-xl font-bold mb-4 text-[#007F5F]">Opciones de Pago</h4>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2">Pago Inicial</label>
                                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                                                {[100, 50, 60, 70, 80, 90].map((percent) => (
                                                    <button
                                                        key={percent}
                                                        onClick={() => setDownPaymentPercent(percent)}
                                                        className={`p-2 rounded-lg font-semibold text-sm transition-all ${downPaymentPercent === percent ? 'bg-[#007F5F] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                                                    >
                                                        {percent === 100 ? 'Contado' : `${percent}%`}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        {downPaymentPercent < 100 && (
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium mb-2">Plazo para el resto</label>
                                                <div className="grid grid-cols-3 gap-2">
                                                    {[1, 6, 12].map((months) => (
                                                        <button
                                                            key={months}
                                                            onClick={() => setPaymentMonths(months)}
                                                            className={`p-2 rounded-lg font-semibold transition-all ${paymentMonths === months ? 'bg-[#007F5F] text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                                                        >
                                                            {months} {months === 1 ? 'mes' : 'meses'}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {paymentCalc && (
                                            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                                                <div className="flex justify-between">
                                                    <span className="font-medium">Pago inicial:</span>
                                                    <span className="font-bold text-[#007F5F]">${paymentCalc.downPayment.toLocaleString('es-MX')}</span>
                                                </div>
                                                {downPaymentPercent < 100 && (
                                                    <>
                                                        <div className="flex justify-between">
                                                            <span className="font-medium">Restante:</span>
                                                            <span className="font-bold">${paymentCalc.remaining.toLocaleString('es-MX')}</span>
                                                        </div>
                                                        <div className="flex justify-between border-t pt-2">
                                                            <span className="font-medium">Pago mensual:</span>
                                                            <span className="font-bold text-lg text-[#F39611]">${paymentCalc.monthlyPayment.toLocaleString('es-MX')}/mes</span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <a href="https://wa.me/message/S7YOUJLEW2Q7C1" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-[#007F5F] font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg text-center">
                                        📱 Solicitar Cotización por WhatsApp
                                    </a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default QuoterSection;
