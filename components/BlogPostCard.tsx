import { PostMetadata } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';

type BlogPostCardProps = {
  metadata: PostMetadata;
};

export function BlogPostCard({ metadata }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${metadata.slug}`} key={metadata.slug} className="group">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative overflow-hidden h-72">
          <Image
            src={
              metadata.image ||
              'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2940&auto=format&fit=crop'
            }
            alt={metadata.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              {/* Avatar goes here */}
              <span className="text-sm font-medium text-gray-700">
                Joanna Laikin
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-3 group-hover:text-gray-600 transition-colors duration-200">
            {metadata.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{metadata.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 font-medium">0 Views</div>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                Sewing
              </span>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                YouTube
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
