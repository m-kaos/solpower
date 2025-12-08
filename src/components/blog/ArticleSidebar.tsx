import React from 'react';
import { Link } from 'react-router-dom';
import { BlogArticle } from '../../data/blog-structure';

interface ArticleSidebarProps {
  articles: BlogArticle[];
  title: string;
  basePath: string;
}

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({ articles, title, basePath }) => {
  if (articles.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="liquid-glass-card p-6 bg-[#008BD6]/5">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

        <ul className="space-y-3">
          {articles.map((article) => (
            <li key={article.id}>
              <Link
                to={`${basePath}/${article.slug}`}
                className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-[#008BD6]/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-[#F39611] flex-shrink-0 mt-0.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#008BD6] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {article.readTime} min lectura
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Box */}
      <div className="liquid-glass-card p-6 bg-gradient-to-br from-[#008BD6]/10 to-[#F39611]/10 mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          ¿Listo para ahorrar?
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          Obtén una cotización gratuita y descubre cuánto puedes ahorrar con paneles solares.
        </p>
        <Link
          to="/#quoter"
          className="block text-center bg-[#008BD6] text-white px-4 py-2 rounded-lg hover:bg-[#007BCB] transition-colors font-semibold text-sm"
        >
          Cotizar Ahora
        </Link>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
