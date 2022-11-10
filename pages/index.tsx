import Head from 'next/head'

import AppComponent from '../components/app';

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
