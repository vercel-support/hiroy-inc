import React from "react";

import { Content } from '../interfaces/content';

// components.
import Blog from './Blog';

interface BlogsViewProps {
  blogs: Content[]
}

const BlogsView: React.FC<BlogsViewProps> = ({blogs}) => {
  const posts = blogs.map((post) => {
    return(
      <div className="col-lg-6 col-md-6 col-12 mt-30" key={post.databaseId}>
        <Blog post={post} />
      </div>
    )
  });
  return (
    <div className="row mt-30-reverse">
      {posts}
    </div>
  );
}

export default BlogsView;
