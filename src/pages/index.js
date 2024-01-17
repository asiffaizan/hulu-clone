import Head from 'next/head';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';


export default function Home() {
  return (
    <Head>
      <title>Hulu 2.0</title>
      <link rel="icon" href="/favicon.ico" />
      <Header/>
      <Nav/>

      {/* Results */}
    </Head>
  )
}
