import Head from 'next/head';
import Header from '../components/Header2';
import DoubleChevronRightIcon from '../components/icons/DoubleChevronRightIcon';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Makers Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="relative grid grid-cols-1 px-12 py-8 pb-10 md:py-10 md:px-20 place-items-center">
          <div
            className="absolute inset-y-0 left-0 grid grid-cols-1 place-items-center"
          >
            <button
              type="button"
              className="px-2 py-4 text-gray-900 bg-gray-200 shadow-md focus:outline-none hover:bg-gray-500 focus:ring ring-blue-300"
            >
              <DoubleChevronRightIcon className="transform rotate-180" />
            </button>
          </div>
          <div
            className="absolute inset-y-0 right-0 grid grid-cols-1 place-items-center"
          >
            <button
              type="button"
              className="px-2 py-4 text-gray-900 bg-gray-200 shadow-md focus:outline-none hover:bg-gray-500 focus:ring ring-blue-300"
            >
              <DoubleChevronRightIcon />
            </button>
          </div>
          <div>
            <div className="mb-10 text-5xl font-extrabold tracking-wider md:text-8xl text-gray-50">
              MAKERS
              {' '}
              <br />
              LIFE
              <div className="block w-full text-base font-semibold tracking-normal break-normal whitespace-pre-wrap md:inline-block md:w-1/2 md:text-xl md:font-bold"
              >
                A Renaissance
                {' '}
                <br className="hidden md:block" />
                mission for
                {' '}
                <br className="hidden md:block" />
                modern times
              </div>
            </div>
            <button
              type="button"
              className="max-w-sm px-5 py-3 text-lg font-bold bg-gray-800 border border-black text-gray-50 focus:outline:none"
            >
              Weekly Note
            </button>
            <div className="absolute inset-0 bg-opacity-25 bg-cover -z-10 bg-front-page" />
            <div className="absolute inset-0 bg-black bg-opacity-25 -z-10" />
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
