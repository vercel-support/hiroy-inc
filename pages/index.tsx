import { ApolloQueryResult } from '@apollo/client'
import Head from 'next/head'

// constants.
import { CMS_NAME } from '../lib/constants'

// types.
import { ContentQuery, Post } from '../types/wp'

// content.
import content from '../lib/content'

// components.
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'

type Props = {
  nodes: Post[]
}

const Index = ({ nodes }: Props) => {
  const heroPost = nodes[0]
  const morePosts = nodes.slice(1)

  const Posts = () => {
    return nodes.map((post) => (
      <div key={`post-${Math.random()}`}>
        {post.title}
      </div>
    ))
  }
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {Posts()}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {

  // WordPress Blog (Arc Ctrl)
  const allPosts = await content.wpBlog.lastest100 as ApolloQueryResult<ContentQuery>;

  return {
    props: allPosts.data.contentNodes,
  }
}
