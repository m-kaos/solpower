import React from 'react';
import { Link } from 'react-router-dom';
import { BlogArticle } from '../../data/blog-structure';

interface BreadcrumbsProps {
  breadcrumbs: BlogArticle[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  const buildPath = (index: number): string => {
    if (index === 0) return '/blog';

    const paths = breadcrumbs.slice(0, index + 1).map(b => b.slug);
    return `/blog/${paths.join('/')}`;
  };

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-[#008BD6] transition-colors">
        Inicio
      </Link>
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>

      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.id}>
          {index === breadcrumbs.length - 1 ? (
            <span className="text-[#008BD6] font-medium" aria-current="page">
              {crumb.title}
            </span>
          ) : (
            <>
              <Link
                to={buildPath(index)}
                className="hover:text-[#008BD6] transition-colors"
              >
                {crumb.title}
              </Link>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
