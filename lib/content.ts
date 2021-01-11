import ExternalWP from '../services/ExternalApi/ExternalWP';

const wpBlog = new ExternalWP({
  isGraph: true,
  url: process.env.WP_BLOG_GRAPH || '',
});

const content = {
  wpBlog : {
    latest: wpBlog.getLatestPosts(),
    lastest100: wpBlog.getFirstPosts( 100 ),
  }
};

export default content;