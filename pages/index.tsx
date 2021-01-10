import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getBlogPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

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

  const allPosts = await getBlogPosts()

  console.log(allPosts.data.contentNodes.nodes);

  return {
    props: allPosts.data.contentNodes,
  }
}
