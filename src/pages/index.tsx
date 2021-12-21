import type { NextPage } from 'next'
import Head from 'next/head'
import NewsTabs from '../components/NewsTabs/NewsTabs';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>News</title>
      </Head>

      <main>
        <NewsTabs />
      </main>
    </div>
  )
}

export default Home
