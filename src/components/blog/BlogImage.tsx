import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  height?: string;
  className?: string;
}

export function BlogImage({ 
  src, 
  alt, 
  height = "h-48",
  className = ""
}: BlogImageProps) {
  const [error, setError] = useState(false);
  
  // Fallback image from Unsplash
  const fallbackImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80";
  
  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${height} ${className}`}>
      <img
        src={error ? fallbackImage : src}
        alt={alt}
        onError={handleError}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}