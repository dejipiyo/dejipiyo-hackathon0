import Head from 'next/head';
import data from '../../items.json';
import type { NextPage } from 'next';

console.log(data);

const Index: NextPage<void> = () => (
  <>
    <Head>
      <title>TOP</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>トップページ</div>
  </>
);

export default Index;
