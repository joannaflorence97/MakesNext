import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YouTubeVideo({
  videoId,
  title = 'YouTube video player',
  className = '',
}: YouTubeVideoProps) {
  return (
    <div className="flex justify-center">
      <div
        className={`w-full md:w-2xl overflow-hidden rounded-xl shadow-xl aspect-video ${className}`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full"
        />
      </div>
    </div>
  );
}
