// Types.
export type Nodes = {
	__typename: string;
	nodes: Array<any>;
};

export type Node = {
	__typename: string;
	node: any;
};

type Template = {
	template: string;
	templateName: string;
}

export interface Post {
	author: Node;
	categories: Nodes;
	content: string;
	databaseId: number;
	date: string;
	excerpt: string;
	featuredImage: any;
	link: string;
	slug: string;
	tags: Nodes;
	title: string;
	type: string;
	template: Template;
}

export interface ContentQuery {
	contentNodes: {
		nodes: Post[];
	};
}