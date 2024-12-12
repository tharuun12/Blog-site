import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Blog } from '../types/blog';

export function useBlogNavigation(currentBlogId: string) {
  const [prevBlog, setPrevBlog] = useState<Blog | undefined>();
  const [nextBlog, setNextBlog] = useState<Blog | undefined>();

  useEffect(() => {
    async function fetchNavigationBlogs() {
      try {
        // Fetch previous blog
        const { data: prevData } = await supabase
          .from('blogs')
          .select('id, title')
          .eq('status', 'published')
          .lt('created_at', (await supabase.from('blogs').select('created_at').eq('id', currentBlogId).single()).data?.created_at)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        // Fetch next blog
        const { data: nextData } = await supabase
          .from('blogs')
          .select('id, title')
          .eq('status', 'published')
          .gt('created_at', (await supabase.from('blogs').select('created_at').eq('id', currentBlogId).single()).data?.created_at)
          .order('created_at', { ascending: true })
          .limit(1)
          .single();

        setPrevBlog(prevData || undefined);
        setNextBlog(nextData || undefined);
      } catch (error) {
        console.error('Error fetching navigation blogs:', error);
      }
    }

    if (currentBlogId) {
      fetchNavigationBlogs();
    }
  }, [currentBlogId]);

  return { prevBlog, nextBlog };
}