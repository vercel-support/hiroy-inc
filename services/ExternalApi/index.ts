// GraphQL
import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject } from '@apollo/client';
import { config } from '@fortawesome/fontawesome-svg-core';

export interface ExternalApiConfig {
  url: string;
  isGraph?: boolean;
  isRest?: boolean;
}

export default class ExternalApi {

  config: ExternalApiConfig;
  graphClient: ApolloClient<NormalizedCacheObject> | Boolean;

  constructor( config: ExternalApiConfig ) {
    if ( ! config.isGraph && config.isRest || '' === config.url ) {
      throw new Error('Must be GraphQL or Rest');
    }
    this.config = config;
    this.graphClient = this.config.isGraph ? this.setGraphClient() : false;
  }

  /**
   * Setup Apollo Client
   */
  setGraphClient() : ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
      uri: process.env.WP_BLOG_GRAPH,
      cache: new InMemoryCache(),
    });
  }
}