import { PostMetadata } from '@/lib/posts';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

type BlogPostCardProps = {
  metadata: PostMetadata;
};

export function BlogPostCard({ metadata }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${metadata.slug}`} key={metadata.slug} className="group">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full">
          <Image
            src={
              metadata.image ||
              'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2940&auto=format&fit=crop'
            }
            alt={metadata.title}
            width={1200} // Pick appropriate dimensions/aspect ratio
            height={675}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-1 group-hover:text-gray-600 transition-colors duration-200 text-primary">
            {metadata.title}
          </h2>
          <p className="text-gray-500 mb-0 line-clamp-2">{metadata.excerpt}</p>
          <hr className="text-gray-200 my-3"></hr>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 font-medium">
              {format(new Date(metadata.date), 'do MMM yyyy')}
            </div>
            <div className="flex gap-2">
              {metadata.categories.map(category => (
                <span
                  key={category}
                  className="text-xs px-2 py-1 bg-primary text-white rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
