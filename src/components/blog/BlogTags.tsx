import { Tag as TagIcon } from 'lucide-react';

interface BlogTagsProps {
  tags: string[];
  size?: 'sm' | 'base';
}

export function BlogTags({ tags, size = 'sm' }: BlogTagsProps) {
  const baseClasses = "inline-flex items-center gap-1 px-3 py-1 rounded-full transition-colors duration-200";
  const sizeClasses = size === 'sm' ? 'text-xs' : 'text-sm';
  
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className={`
            ${baseClasses} ${sizeClasses}
            bg-blue-50 text-blue-700 hover:bg-blue-100
          `}
        >
          <TagIcon size={size === 'sm' ? 12 : 14} />
          {tag}
        </span>
      ))}
    </div>
  );
}