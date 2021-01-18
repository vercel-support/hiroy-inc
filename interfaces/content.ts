export interface Content {
  databaseId: number;
  title: string;
  slug: string;
  link: string;
  content: string;
  data: string;
  excerpt: string;
}

export interface VideoContent extends Content {
  video_url: string;
}