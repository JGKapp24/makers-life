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
        <div className="relative grid grid-cols-1 p-8 md:py-10 md:px-20 justify-items-start pb-10">
          <div className="w-full mb-10 text-5xl md:text-8xl text-gray-50 font-extrabold tracking-wider">
            MAKERS <br/>
            LIFE
            <div className="block md:inline-block w-full md:w-1/2 break-normal whitespace-pre-wrap text-base md:text-xl font-semibold md:font-bold tracking-normal">
              A Renaissance <br className="hidden md:block" />
              mission for <br className="hidden md:block" />
              modern times
            </div>
          </div>
          <button
            type="button"
            className="max-w-sm px-3 py-2 text-lg font-bold bg-gray-800 text-gray-50 focus:outline:none border border-black"
          >
            Weekly Note
          </button>
          <div className="-z-10 absolute inset-0 bg-front-page bg-cover bg-opacity-25" />
          <div className="-z-10 absolute inset-0 bg-black bg-opacity-25" />
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
