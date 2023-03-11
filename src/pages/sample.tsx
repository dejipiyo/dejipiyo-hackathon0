import Head from 'next/head';
import type { NextPage } from 'next';
import { usePageSample } from '@/hooks/pages/use-page-sample';

const Index: NextPage<void> = () => {
  const { data, register, handleSubmit, errors } = usePageSample();

  return (
    <>
      <Head>
        <title>テストページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>テストページ</div>
      <p>ID: {data?.pokemon?.number}</p>
      <p>ポケモン名：{data?.pokemon?.name}</p>

      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <input {...register('name')} />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <input type="number" {...register('age', { valueAsNumber: true })} />
        {errors.age?.message && <p>{errors.age?.message}</p>}
        <input type="submit" />
      </form>
    </>
  );
};

export default Index;
