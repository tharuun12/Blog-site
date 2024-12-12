import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Blog } from '../../types/blog';

interface BlogNavigationProps {
  prevBlog?: Blog;
  nextBlog?: Blog;
}

export function BlogNavigation({ prevBlog, nextBlog }: BlogNavigationProps) {
  return (
    <nav className="flex justify-between items-center border-t border-gray-200 mt-12 pt-8">
      {prevBlog ? (
        <Link
          to={`/blog/${prevBlog.id}`}
          className="group flex items-center gap-2 text-gray-600 hover:text-blue-600"
        >
          <ChevronLeft className="transition-transform group-hover:-translate-x-1" />
          <div>
            <div className="text-sm text-gray-500">Previous</div>
            <div className="font-medium">{prevBlog.title}</div>
          </div>
        </Link>
      ) : (
        <div /> // Empty div for spacing
      )}

      {nextBlog ? (
        <Link
          to={`/blog/${nextBlog.id}`}
          className="group flex items-center gap-2 text-right text-gray-600 hover:text-blue-600"
        >
          <div>
            <div className="text-sm text-gray-500">Next</div>
            <div className="font-medium">{nextBlog.title}</div>
          </div>
          <ChevronRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <div /> // Empty div for spacing
      )}
    </nav>
  );
}