import Head from 'next/head'
import AppComponent from '../components/SmartAppComponent';
import Requester from '../model/Requester';

export default function Home() {
  const requester = new Requester(['comic 1', 'comic 2']);

  return (
    <div>
      <Head>
        <title>Comics Store App</title>
      </Head>
      <AppComponent requester={requester} />
    </div>
  )
}
