import React from 'react';

// types.
import { Post } from '../types/wp';

// components.
import SafeHtml from '../components/SafeHtml';
import Image from 'next/image';

export interface PostComponentProps {
  post: Post
}

const PostComponent: React.FC<Post> = ({title, featuredImage, excerpt}) => {
  return(
    <article className="flex flex-row items-stretch content-center video-wrapper mt-10 mb-10">
      <div className="w-1/4">
        <Image 
          src={featuredImage.node.mediaItemUrl} alt={featuredImage.node.caption || 'hi roy'} 
          sizes={featuredImage.node.sizes} 
          width={featuredImage.node.mediaDetails.width}
          height={featuredImage.node.mediaDetails.height}
          layout="responsive"
        />
      </div>
      <div className="w-3/4 pl-10 flex flex-col justify-center content-center">
        <div>
          <h4 className="font-bold text-xl">{title}</h4>
          <SafeHtml html={excerpt} />
        </div>
      </div>
    </article>
  )
}

export default PostComponent