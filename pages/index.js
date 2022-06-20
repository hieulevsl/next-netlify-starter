import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React from 'react';
import ReactPlayer from 'react-player';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className="description">
          <ReactPlayer
            controls={true}
            playing={true}
            url="http://live.vnrc.vn:1935/live/TMEC/playlist.m3u8"
            config={{
              file: {
                forceHLS: true,
              },
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
