import { Link } from 'react-router-dom';
import type { Blog } from '../../types/blog';
import { BlogMeta } from './BlogMeta';
import { BlogTags } from './BlogTags';
import { BlogImage } from './BlogImage';

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  const snippet = blog.content.slice(0, 150) + '...';

  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <Link to={`/blog/${blog.id}`} className="block relative">
        <div className="relative">
          <BlogImage 
            src={blog.media_urls[0] || ''} 
            alt={blog.title} 
            height="h-48"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
      </Link>
      <div className="p-6">
        <BlogMeta date={blog.created_at} author={blog.author} size="sm" />
        <Link to={`/blog/${blog.id}`}>
          <h2 className="text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {blog.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{snippet}</p>
        <div className="flex justify-between items-center">
          <BlogTags tags={blog.tags.slice(0, 3)} />
          <Link 
            to={`/blog/${blog.id}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}