'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import joanna from '../../assets/joanna.jpg';

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] lg:grid-cols-[1fr_1.5fr] gap-10 items-center py-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src={joanna}
            alt="Joanna Florence"
            width={50}
            height={50}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Hi there!</h2>
            <p className="text-gray-600 text-base mb-4">
              I'm <span className="text-primary">Joanna</span>, keen sewist and
              crafter! Most days you can find me making something with the help
              of my assistant, my miniature dachshund Charlie.
            </p>
            <p className="text-gray-600 text-base mb-4">
              I've always loved crafts and grew up knitting and cross stitching.
              In 2020 I discovered the joy of sewing and I've been hooked ever
              since. I am largely self-taught, having learnt a lot through the
              wonderful online sewing community.
            </p>
            <p className="text-gray-600 text-base">
              For the latest updates, follow my Instagram account{' '}
              <a href="https://www.instagram.com/joannaflorencemakes">
                @joannaflorencemakes
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
