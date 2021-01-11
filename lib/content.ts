import ExternalWP from '../services/ExternalApi/ExternalWP';

const wpBlog = new ExternalWP({
  isGraph: true,
  url: process.env.WP_BLOG_GRAPH || '',
});

async function getWPTV() {
  const res = await fetch('https://wordpress.tv/api/videos.json?speakers=roy-sivan');
  return await res.json();
}

const content = {
  wpBlog : {
    latest: wpBlog.getLatestPosts(),
    lastest100: wpBlog.getFirstPosts( 100 ),
  },
  speaking: {
    wptv : getWPTV()
  }
};

export default content;