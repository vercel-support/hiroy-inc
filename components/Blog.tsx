import React from "react";
import ProgressiveImage from 'react-progressive-image';
import Link from 'next/link';
import Image from 'next/image';

import { Content } from '../interfaces/content';

interface BlogProps {
  post: Content;
}
const Blog : React.FC<BlogProps> = ({post}) => {
  const { title, featuredImage, date } = post;
  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link href={post.link}>
          <div>
            <Image src={featuredImage.url || '/images/me_tv.jpg'} width={300} height={300}/>
            <div className="mi-blog-date">
              <span className="date">{title}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
