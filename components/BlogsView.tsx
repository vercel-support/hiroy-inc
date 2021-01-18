import React from "react";

import { Content } from '../interfaces/content';

// components.
import Blog from './Blog';

interface BlogsViewProps {
  blogs: Content[]
}

const BlogsView: React.FC<BlogsViewProps> = ({blogs}) => {
  return (
    <div className="row mt-30-reverse">
      {blogs.map(blog => (
        <div className="col-lg-6 col-md-6 col-12 mt-30" key={blog.databaseId}>
          <Blog data={blog} />
        </div>
      ))}
    </div>
  );
}

export default BlogsView;
