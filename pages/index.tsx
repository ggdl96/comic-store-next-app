import Head from 'next/head';
import AppComponent from '../src/components/SmartAppComponent';
import { ComicStore } from '../src/model/ComicStore/ComicStore';
import RequesterSuccess from '../src/model/RequesterSuccess';

export default function Home() {
  const requester = new RequesterSuccess(['comic 1', 'comic 2']);
  const comicStore = new ComicStore(requester);

  return (
    <div>
      <Head>
        <title>Comics Store App</title>
      </Head>
      <AppComponent comicStore={comicStore} />
    </div>
  );
}
