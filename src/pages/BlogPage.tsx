import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { BlogMeta } from '../components/blog/BlogMeta';
import { BlogTags } from '../components/blog/BlogTags';
import { BlogImage } from '../components/blog/BlogImage';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';
import { BlogNavigation } from '../components/navigation/BlogNavigation';
import { BackToTop } from '../components/navigation/BackToTop';
import { useBlog } from '../hooks/useBlog';
import { useBlogNavigation } from '../hooks/useBlogNavigation';

export function BlogPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { blog, loading, error } = useBlog(id);
  const { prevBlog, nextBlog } = useBlogNavigation(id || '');

  if (loading) return <LoadingSpinner />;
  if (error || !blog) return <ErrorMessage message={error || 'Blog not found'} />;

  return (
    <Container className="py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 group"
      >
        <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
        Back
      </button>

      <Breadcrumbs title={blog.title} />

      <article className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>
          <div className="flex justify-center mb-8">
            <BlogMeta date={blog.created_at} author={blog.author} />
          </div>
          <BlogTags tags={blog.tags} size="base" />
        </header>

        {blog.media_urls[0] && (
          <div className="mb-12 rounded-xl overflow-hidden">
            <BlogImage 
              src={blog.media_urls[0]} 
              alt={blog.title} 
              height="h-[500px]"
              className="rounded-xl"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <BlogTags tags={blog.tags} size="base" />
          <BlogNavigation prevBlog={prevBlog} nextBlog={nextBlog} />
        </footer>
      </article>

      <BackToTop />
    </Container>
  );
}