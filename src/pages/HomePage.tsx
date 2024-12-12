import { Container } from '../components/ui/Container';
import { PageTitle } from '../components/ui/PageTitle';
import { BlogCard } from '../components/blog/BlogCard';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { useBlogs } from '../hooks/useBlogs';

export function HomePage() {
  const { blogs, loading, error } = useBlogs();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Container className="py-12">
      <PageTitle subtitle="Discover the latest insights, tutorials, and stories from our blog.">
        Latest Posts
      </PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Container>
  );
}