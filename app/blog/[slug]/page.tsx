import { getAllPostIds } from '@/lib/posts';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);
  return <Post />;
}

export function generateStaticParams() {
  return getAllPostIds().map((id: string) => ({ slug: id }));
}

export const dynamicParams = false;
