import React from 'react';

const FeaturesSection: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-white relative z-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Solar Energy?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Harnessing the power of the sun to provide clean, sustainable energy for Monterrey and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 mx-auto">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">High Efficiency</h3>
                        <p className="text-gray-600 text-center">
                            Our panels utilize the latest photovoltaic technology to maximize energy conversion even on cloudy days.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 mx-auto">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Eco Friendly</h3>
                        <p className="text-gray-600 text-center">
                            Reduce your carbon footprint significantly by switching to 100% renewable solar energy.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600 mx-auto">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Cost Savings</h3>
                        <p className="text-gray-600 text-center">
                            Lower your electricity bills immediately and earn tax incentives for sustainable home improvements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
