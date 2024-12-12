import { BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './ui/Container';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <BookOpen className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              DevBlog
            </span>
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className={`${isActive('/')} transition-colors duration-200 font-medium`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tags"
                  className={`${isActive('/tags')} transition-colors duration-200 font-medium`}
                >
                  Tags
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}