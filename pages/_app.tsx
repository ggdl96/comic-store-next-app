import '../styles/globals.css';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
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

  }, [])
  return <Component {...pageProps} />
}

export default MyApp
