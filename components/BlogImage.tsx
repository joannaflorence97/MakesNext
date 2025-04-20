import React from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageWithCaptionProps = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  imageCount: number;
};

const ImageWithCaption = ({
  src,
  alt,
  caption,
  imageCount,
}: ImageWithCaptionProps) => {
  // Calculate basis dynamically based on the number of images
  // 2 images: 50%, 3 images: 33.33%
  const basis = imageCount === 3 ? 'calc(33.33% - 1rem)' : 'calc(50% - 1rem)';
  // Adjust sizes for 2 vs 3 images
  const sizes =
    imageCount === 3
      ? '(max-width: 768px) 100vw, 33vw'
      : '(max-width: 768px) 100vw, 50vw';

  return (
    <div
      className="flex flex-col items-center flex-1 min-w-[150px]"
      style={{ flexBasis: basis }}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="rounded-lg w-full h-auto"
        sizes={sizes}
      />
      {caption && (
        <p className="mt-2 text-sm text-gray-600 text-center">{caption}</p>
      )}
    </div>
  );
};

type BlogImageLayoutProps = {
  images: {
    src: StaticImageData;
    alt: string;
    caption?: string;
  }[];
};

export const BlogImageLayout = ({ images = [] }: BlogImageLayoutProps) => {
  // Ensure the number of images doesn't exceed available images
  const limitedImages = images.slice(0, 3);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="flex flex-wrap gap-4 justify-center">
        {limitedImages.map((img, index) => (
          <ImageWithCaption
            key={index}
            imageCount={limitedImages.length}
            {...img}
          />
        ))}
      </div>
    </div>
  );
};
