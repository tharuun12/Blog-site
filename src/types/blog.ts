export interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  status: 'published' | 'draft';
  tags: string[];
  media_urls: string[];
  created_at: string;
  updated_at: string;
}