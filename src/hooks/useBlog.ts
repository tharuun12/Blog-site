import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Blog } from '../types/blog';

export function useBlog(id: string | undefined) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      if (!id) return;

      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('id', id)
          .eq('status', 'published')
          .single();

        if (error) throw error;
        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  return { blog, loading, error };
}