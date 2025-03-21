'use client';

import { PostMetadata } from '@/lib/posts';
import { useState } from 'react';
import { BlogPostCard } from './BlogPostCard';
import { AnimatePresence, motion } from 'framer-motion';

type PostFilterProps = {
  categories: string[];
  posts: PostMetadata[];
};

export function PostFilter({ categories, posts }: PostFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter(post => post.categories.includes(selectedCategory));

  return (
    <>
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 justify-center flex-wrap">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === 'All'
                ? 'bg-primary text-white'
                : 'bg-background text-gray-600 hover:bg-secondary'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-background text-gray-600 hover:bg-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredPosts.map(post => (
            <motion.div
              key={post.slug}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { delay: 0.45, type: 'spring' },
              }}
              //   exit={{
              //     opacity: 0,
              //     transition: { delay: 0.5 },
              //   }}
              layout
            >
              <BlogPostCard key={post.slug} metadata={post} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
