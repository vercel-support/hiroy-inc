import { ApolloQueryResult } from '@apollo/client'
import Head from 'next/head'

// constants.
import { CMS_NAME } from '../lib/constants'

// types.
import { ContentQuery, Post, WPTVResponse } from '../types/wp'

// content.
import content from '../lib/content'

// components.
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import VideoPlayer from '../components/VideoComponent'
import PostComponent from '../components/PostComponent';

type Speaking = {
  wptv: WPTVResponse;
}

interface HomeProps {
  blog: Post[];
  speaking: Speaking;
}

const Index = ({ blog, speaking }: HomeProps) => {

  const Posts = () => {
    return blog.map((post) => (
      <PostComponent {... post} key={`post-${post.databaseId}`} />
    ))
  }

  const Videos = () => {
    return speaking.wptv.videos.map((video:any) => {
      return(
        <VideoPlayer {... video} key={`video-${Math.random()}`} />
      )
    })
  }
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <div className="pr-20 pl-20">
            <Intro />
            {Posts()}
            {Videos()}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {

  // WordPress Blog (Arc Ctrl)
  const allPosts = await content.wpBlog.getFirst(100) as ApolloQueryResult<ContentQuery>
  
  // WordPress TV
  const wpTV = await content.speaking.wptv()

  return {
    props: {
      blog: allPosts.data.contentNodes.nodes,
      speaking: {
        wptv: wpTV
      }
    }
  }
}
