import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content');

export type PostMetadata = {
  title: string;
  date: Date;
  slug: string;
  image: string;
  excerpt: string;
};

export async function getAllPosts(): Promise<PostMetadata[]> {
  const files = fs
    .readdirSync(postsDirectory)
    .filter(file => file.endsWith('.mdx'));

  const posts = await Promise.all(
    files.map(async file => {
      const { metadata } = await import(`@/content/${file}`);
      const slug = file.replace(/\.mdx$/, '');

      return { ...metadata, slug };
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPostIds() {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(file => file.endsWith('.mdx'));
  return fileNames.map(fileName => {
    return fileName.replace(/\.mdx$/, '');
  });
}
