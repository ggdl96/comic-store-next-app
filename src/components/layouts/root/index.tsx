import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Comics Store App</title>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      {children}
    </div>
  );
}
