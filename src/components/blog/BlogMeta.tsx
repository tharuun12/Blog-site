import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

interface BlogMetaProps {
  date: string;
  author: string;
  size?: 'sm' | 'base';
}

export function BlogMeta({ date, author, size = 'base' }: BlogMetaProps) {
  const iconSize = size === 'sm' ? 16 : 18;
  const textSize = size === 'sm' ? 'text-sm' : 'text-base';
  const dateFormat = size === 'sm' ? 'MMM d, yyyy' : 'MMMM d, yyyy';
  
  return (
    <div className={`flex gap-4 ${textSize} text-gray-600`}>
      <div className="flex items-center gap-1.5">
        <Calendar size={iconSize} className="text-blue-600" />
        {format(new Date(date), dateFormat)}
      </div>
      <div className="flex items-center gap-1.5">
        <User size={iconSize} className="text-blue-600" />
        {author}
      </div>
    </div>
  );
}