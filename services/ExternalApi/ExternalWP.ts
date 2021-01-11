import { ApolloClient, ApolloError, ApolloQueryResult, gql, NormalizedCacheObject } from '@apollo/client';

// Base ExternalApi Class.
import ExternalApi, { ExternalApiConfig } from '.';

// types.
import { ContentQuery } from '../../types/wp';

// External WP
export default class ExternalWP extends ExternalApi {

	constructor(config: ExternalApiConfig) {
		super(config);
	}

	/**
	 * Get Latest Posts
	 */
	getLatestPosts = async () => {
		if ( ! this.graphClient ) {
			console.log(this.config);
			throw new Error('External WP Error: Needs to be GraphQL');
		}
		// typescript cheat.
		// @TODO learn how to do this better.
		this.graphClient = this.graphClient as ApolloClient<NormalizedCacheObject>;

		return await this.graphClient.query<ApolloQueryResult<ContentQuery>>({
			query: gql`
				query{
					contentNodes(
						where: {
							contentTypes: [POST]
						}
					){
						nodes{
							... on Post {
								databaseId
								title
								slug
								link
								content
								date
								excerpt
								featuredImage {
									node {
										databaseId
										altText
										caption
										mediaItemUrl
										sizes
										fileSize
										mediaDetails{
											file
											height
											sizes {
												file
												fileSize
												height
												mimeType
												name
												sourceUrl
												width
											}
											width
										}
									}
								}
								categories {
									nodes {
										__typename
										databaseId
										link
										slug
										name
									}
								}
								tags {
									nodes {
										__typename
										databaseId
										link
										slug
										name
									}
								}
							}
						}
					}
				}
			`,
		});
	}

	/**
	 * Get Latest n Posts
	 */
	getFirstPosts = async (first: number) => {
		if ( ! this.graphClient ) {
			console.log(this.graphClient);
			throw new Error('External WP Error: Needs to be GraphQL');
		}
		// typescript cheat.
		// @TODO learn how to do this better.
		this.graphClient = this.graphClient as ApolloClient<NormalizedCacheObject>;

		return this.graphClient.query({
			query: gql`
				query AllContent($first: Int) {
					contentNodes(first: $first, where: { contentTypes: [POST] }) {
						nodes {
							... on Post {
								databaseId
								title
								slug
								link
								content
								date
								excerpt
								featuredImage {
									node {
										databaseId
										altText
										caption
										mediaItemUrl
										sizes
										fileSize
										mediaDetails{
											file
											height
											sizes {
												file
												fileSize
												height
												mimeType
												name
												sourceUrl
												width
											}
											width
										}
									}
								}
								categories {
									nodes {
										__typename
										databaseId
										link
										slug
										name
									}
								}
								tags {
									nodes {
										__typename
										databaseId
										link
										slug
										name
									}
								}
							}
						}
					}
				}
			`,
			variables: {
				first: 100
			}
		}).then((res) => {
			return res;
		}, (error : ApolloError) => {
			console.log('error');
			console.log(error.graphQLErrors);
			console.log(error.message);
			console.log(error.name);
			throw error;
		});
	}
}