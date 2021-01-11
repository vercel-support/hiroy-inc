// Types.
export type Nodes = {
	__typename: string;
	nodes: Array<any>;
};

export type Node = {
	__typename: string;
	node: any;
};
interface Image {
  __typename: string;
	databaseId: number;
	altText: string;
  caption?: null;
  mediaItemUrl: string;
	sizes: string;
	fileSize: string;
	mediaDetails: {
		file: string;
		height: string;
		width: string;
		sizes: {
			file: string;
			fileSize: string;
			height: string;
			mimeType: string;
			name: string;
			sourceUrl: string;
			width: string;
		}
	}
}

export interface FeaturedImage {
  __typename: string;
  node: Image;
}


type Template = {
	template: string;
	templateName: string;
}

export interface Post {
	categories: Nodes;
	content: string;
	databaseId: number;
	date: string;
	excerpt: string;
	featuredImage: FeaturedImage;
	link: string;
	slug: string;
	tags: Nodes;
	title: string;
	type: string;
}

export interface ContentQuery {
	contentNodes: {
		nodes: Post[];
	};
}

type WPTVResponseQuery = {
  results: number;
  pages: number;
}
export interface WPTVResponse {
  query: WPTVResponseQuery,
  videos: Array<any>;
}