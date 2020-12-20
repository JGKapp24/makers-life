import Head from 'next/head';
import Header from '../components/Header';

export default function Home () {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Makers Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="">
          <div className="w-full p-8 md:py-10 md:px-20 text-5xl md:text-8xl font-extrabold tracking-wider">
            MAKERS <br/>
            LIFE
            <div className="block md:inline-block w-full md:w-1/2 break-normal whitespace-pre-wrap text-base md:text-xl font-semibold md:font-bold tracking-normal">
              A Renaissance <br className="hidden md:block" />
              mission for <br className="hidden md:block" />
              modern times
            </div>
          </div>

        </div>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer> */}
    </div>
  );
}
