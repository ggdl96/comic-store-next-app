import Head from 'next/head'

import AppComponent from '../components/Search';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Comics Store App</title>
      </Head>
      <AppComponent />
    </div>
  )
}
