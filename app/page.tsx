import { getAllPosts } from '@/lib/posts';
import { PostFilter } from '@/components/PostFilter';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <PostFilter
      categories={['amelia', 'dress', 'lyra', 'joni']}
      posts={posts}
    />
  );
}
