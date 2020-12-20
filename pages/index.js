import Head from 'next/head';
import Cover from '../components/Cover';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Merry Christmas Anna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
    </Layout>
  )
}
