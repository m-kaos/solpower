import React from 'react';
import { Link } from 'react-router-dom';
import { blogStructure } from '../data/blog-structure';

const BlogHub: React.FC = () => {
  const mainArticle = blogStructure;
  const subArticles = blogStructure.subArticles || [];

  return (
    <main className="min-h-screen bg-[#F1F1F1] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog SOLPOWER
          </h1>
          <div className="w-24 h-1 bg-[#F39611] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Descubre todo sobre paneles solares en Monterrey: ahorro, instalación, tecnología y beneficios de la energía solar para tu hogar o negocio
          </p>
        </div>

        {/* Featured Main Article */}
        <div className="mb-16">
          <Link
            to={`/blog/${mainArticle.slug}`}
            className="group block liquid-glass-card hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Placeholder */}
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#008BD6]/20 to-[#F39611]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-32 h-32 mx-auto mb-4 text-[#008BD6]"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <p className="text-sm text-gray-600">Imagen destacada</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8">
                <div className="inline-flex items-center px-3 py-1 bg-[#F39611]/10 text-[#F39611] text-xs font-semibold rounded-full mb-4 w-fit">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Artículo Principal
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#008BD6] transition-colors">
                  {mainArticle.title}
                </h2>

                <p className="text-lg text-gray-700 mb-6">
                  {mainArticle.excerpt}
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {mainArticle.readTime} min lectura
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {subArticles.length} artículos relacionados
                  </div>
                </div>

                <div className="inline-flex items-center text-[#008BD6] font-semibold group-hover:text-[#007BCB]">
                  Leer artículo completo
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Sub Articles Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Artículos por Tema
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subArticles.map((article) => {
              const subSubCount = article.subArticles?.length || 0;

              return (
                <Link
                  key={article.id}
                  to={`/blog/${mainArticle.slug}/${article.slug}`}
                  className="group liquid-glass-card hover:shadow-xl transition-all duration-300 bg-white overflow-hidden flex flex-col"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-[#008BD6]/10 to-[#F39611]/10 flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg
                        className="w-16 h-16 mx-auto text-[#008BD6]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-2 py-1 bg-[#F39611]/10 text-[#F39611] text-xs font-semibold rounded-full mb-3 w-fit">
                      {article.category}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#008BD6] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-700 mb-4 line-clamp-3 flex-1">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {article.readTime} min
                      </div>
                      <div className="flex items-center text-[#008BD6] font-semibold">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {subSubCount} artículos
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 liquid-glass-card bg-gradient-to-br from-[#008BD6]/10 to-[#F39611]/10 p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para Reducir tu Factura de CFE?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Con más de 14 años de experiencia, SOLPOWER te ayuda a ahorrar hasta 95% en tu factura eléctrica. Obtén una cotización gratuita hoy mismo.
            </p>
            <Link
              to="/#quoter"
              className="inline-flex items-center bg-[#008BD6] text-white px-8 py-4 rounded-lg hover:bg-[#007BCB] transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Cotizar Gratis
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogHub;
