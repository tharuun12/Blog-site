import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  title?: string;
}

export function Breadcrumbs({ title }: BreadcrumbsProps) {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  if (isHomePage) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
      <Link 
        to="/" 
        className="flex items-center hover:text-blue-600 transition-colors"
      >
        <Home size={16} className="mr-1" />
        Home
      </Link>
      <ChevronRight size={16} />
      <span className="font-medium text-gray-900">{title || 'Blog Post'}</span>
    </nav>
  );
}