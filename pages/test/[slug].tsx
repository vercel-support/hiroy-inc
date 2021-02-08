import React from 'react'
import { GetServerSidePropsContext } from 'next';

interface TestPageProps {
  slug: string;
}

const TestPage: React.FC<TestPageProps> = ({ slug }) => {
  return(
    <div>
      <h1>TESTING </h1>
    </div>
  )
}

export default TestPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {

  return {
    props: {
      slug: context.query.slug
    }
  }
}