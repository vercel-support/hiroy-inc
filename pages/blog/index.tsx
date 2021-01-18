import React, { useState, useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { InformationData } from '../../interfaces/apiInformation';
import { Content } from '../../interfaces/content';

// components
import Sectiontitle from "../../components/Sectiontitle";
import Layout from "../../components/Layout";
import BlogsView from "../../components/BlogsView";

// queries
import { GET_BLOG_POSTS } from '../../queries/blog';

interface BlogProps extends InformationData {
  blog: Content[];
}

export const Blogs: React.FC<BlogProps> = ({information, blog}) => {
  const [posts, setPosts] = useState(blog);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const paginate = (e: MouseEvent, pageNumber: number) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <Layout information={information}>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Recent Blogs" />
          <BlogsView blogs={posts} />
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  
  const client = new ApolloClient({
    uri: process.env.HIROY_GRAPH || '',
    cache: new InMemoryCache()
  });

  const url = 'development' === process.env.NODE_ENV ? 'http://localhost:3000' : process.env.HIROY_URL;
  const res = await fetch(url + '/api/information');
  const data = await res.json();

  const blogPosts = await client.query<BlogResponse>({
    query: GET_BLOG_POSTS
  });

  return {
    props: {...data, blog: blogPosts.data.blog },
  }
}