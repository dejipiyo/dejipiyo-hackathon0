import Head from 'next/head';
import data from '../../items.json';
import type { NextPage } from 'next';
import { Header } from '@/components';

console.log(data);

const Index: NextPage<void> = () => (
  <>
    <Head>
      <title>TOP</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div>トップページ</div>
  </>
);

export default Index;
