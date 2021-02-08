export interface FeaturedImage {
  url: string;
}
export interface Content {
  databaseId: number;
  title: string;
  slug: string;
  link: string;
  content: string;
  date: string;
  excerpt: string;
  featuredImage: FeaturedImage;
}

export interface VideoContent extends Content {
  video_url: string;
}