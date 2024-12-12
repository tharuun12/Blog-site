import { Link } from 'react-router-dom';
import type { Blog } from '../types/blog';
import { BlogMeta } from './blog/BlogMeta';
import { BlogTags } from './blog/BlogTags';
import { BlogImage } from './blog/BlogImage';

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  const snippet = blog.content.slice(0, 150) + '...';
  const thumbnailUrl = blog.media_urls[0] || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80';

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/blog/${blog.id}`}>
        <BlogImage src={thumbnailUrl} alt={blog.title} />
      </Link>
      <div className="p-6">
        <BlogMeta date={blog.created_at} author={blog.author} size="sm" />
        <Link to={`/blog/${blog.id}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
            {blog.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{snippet}</p>
        <BlogTags tags={blog.tags} />
      </div>
    </article>
  );
}