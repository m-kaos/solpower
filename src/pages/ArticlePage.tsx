import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getArticleByPath, getBreadcrumbs } from '../data/blog-structure';
import Breadcrumbs from '../components/blog/Breadcrumbs';
import ArticleSidebar from '../components/blog/ArticleSidebar';

const ArticlePage: React.FC = () => {
  const params = useParams<{ '*': string }>();
  const pathSegments = params['*']?.split('/').filter(Boolean) || [];

  const article = getArticleByPath(pathSegments);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbs = getBreadcrumbs(article.slug);
  const subArticles = article.subArticles || [];
  const basePath = `/blog/${pathSegments.join('/')}`;

  return (
    <main className="min-h-screen bg-[#F1F1F1] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-lg p-8">
              <header className="mb-8">
                <div className="inline-flex items-center px-3 py-1 bg-[#F39611]/10 text-[#F39611] text-sm font-semibold rounded-full mb-4">
                  {article.category}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h1>

                <p className="text-xl text-gray-700 mb-6">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pb-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-[#008BD6]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime} min lectura
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(article.datePublished).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </header>

              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#008BD6]/20 to-[#F39611]/20 rounded-2xl flex items-center justify-center overflow-hidden mb-8">
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
                  <p className="text-sm text-gray-600">Imagen destacada del artículo</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2>Introducción</h2>
                <p>
                  {article.description}
                </p>

                <h2>Beneficios Principales</h2>
                <p>
                  La energía solar representa una inversión inteligente para tu hogar o negocio en Monterrey.
                  Con el clima favorable de la región, puedes maximizar la producción de energía y reducir
                  significativamente tus costos eléctricos.
                </p>

                <h2>¿Por Qué Elegir SOLPOWER?</h2>
                <p>
                  Con más de 14 años de experiencia en el mercado de Nuevo León, SOLPOWER ofrece:
                </p>
                <ul>
                  <li>Instalación profesional certificada</li>
                  <li>Garantías extendidas en equipos y mano de obra</li>
                  <li>Asesoría personalizada desde el diseño hasta la interconexión con CFE</li>
                  <li>Servicio posventa y mantenimiento preventivo</li>
                </ul>

                <h2>Próximos Pasos</h2>
                <p>
                  Si estás listo para dar el paso hacia la energía solar, te recomendamos explorar
                  nuestros artículos relacionados para conocer más detalles sobre cada aspecto del
                  proceso.
                </p>
              </div>

              {/* Related Sub-Articles */}
              {subArticles.length > 0 && (
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Explora Temas Específicos
                  </h2>

                  <div className="grid grid-cols-1 gap-6">
                    {subArticles.map((subArticle) => (
                      <Link
                        key={subArticle.id}
                        to={`${basePath}/${subArticle.slug}`}
                        className="group liquid-glass-card hover:shadow-xl transition-all duration-300 bg-[#F1F1F1]/50"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-[#008BD6]/10 to-[#F39611]/10 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-12 h-12 text-[#008BD6]"
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

                          <div className="flex-1">
                            <div className="inline-flex items-center px-2 py-1 bg-[#F39611]/10 text-[#F39611] text-xs font-semibold rounded-full mb-2">
                              {subArticle.category}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#008BD6] transition-colors">
                              {subArticle.title}
                            </h3>

                            <p className="text-gray-700 mb-3">
                              {subArticle.description}
                            </p>

                            <div className="flex items-center space-x-4 text-sm text-gray-600">
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
                                {subArticle.readTime} min
                              </div>
                              {(subArticle.subArticles?.length || 0) > 0 && (
                                <div className="flex items-center text-[#008BD6]">
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
                                  {subArticle.subArticles?.length} artículos
                                </div>
                              )}
                            </div>
                          </div>

                          <svg
                            className="w-6 h-6 text-gray-400 group-hover:text-[#008BD6] group-hover:translate-x-2 transition-all flex-shrink-0"
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
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ArticleSidebar
              articles={subArticles}
              title="Artículos Relacionados"
              basePath={basePath}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;
