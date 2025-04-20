import { getAllPostIds, getPostById } from '@/lib/posts';
import { format } from 'date-fns';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, Post } = await getPostById(slug);

  return (
    <>
      <h1 className="text-3xl font-bold pt-12 mb-0 text-primary">
        {metadata.title}
      </h1>
      <p className="text-sm text-gray-500 font-medium">
        {format(new Date(metadata.date), 'do MMM yyyy')}
      </p>
      <Post />
    </>
  );
}

export function generateStaticParams() {
  return getAllPostIds().map((id: string) => ({ slug: id }));
}

export const dynamicParams = false;
