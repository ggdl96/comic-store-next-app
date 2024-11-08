import '../styles/globals.css';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { store, sagaMiddleware } from '../src/store';
import buildSaga from '../src/features/sagas';
import Requester from '../src/model/RequesterSuccess';
import { ComicStore } from '../src/model/ComicStore/ComicStore';
import { AppProps } from 'next/app';

const requester = new Requester(['comic 1', 'comic 2']);

const comicStore = new ComicStore(requester);
sagaMiddleware.run(buildSaga(comicStore));
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:9912');

    // Connection opened
    socket.addEventListener('open', function (event) {
      socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
    });
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
