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
      <h1>{metadata.title}</h1>
      {format(new Date(metadata.date), 'do MMM yyyy')}
      <Post />
    </>
  );
}

export function generateStaticParams() {
  return getAllPostIds().map((id: string) => ({ slug: id }));
}

export const dynamicParams = false;
