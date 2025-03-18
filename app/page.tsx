import { getAllPosts } from '@/lib/posts';
import { PostFilter } from '@/components/PostFilter';
import { ImageCarousel } from '@/components/ImageCarousel';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <ImageCarousel />
      <PostFilter
        categories={[
          'Beginners',
          'Patterns',
          'Hacks',
          'Tools',
          'Reviews',
          'Life',
        ]}
        posts={posts}
      />
    </>
  );
}
