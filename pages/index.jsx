/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header2';
import DoubleChevronRightIcon from '../components/icons/DoubleChevronRightIcon';

const steps = [
  { id: '01', name: 'About Lydia', href: '/about' },
  { id: '02', name: 'How this works', href: '/about' },
  { id: '03', name: 'Connect with me', href: '/about' },
];

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Makers Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="bg-gray-100">
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
            <div className="mx-auto max-w-7xl">
              <div className="relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full"
                    src="/LydiaImg2.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-7xl lg:text-8xl">
                    <span className="block text-white">MAKERS</span>
                    <span className="block text-white">LIFE</span>
                  </h1>
                  <p className="max-w-lg mx-auto mt-6 text-lg text-center text-gray-100 md:text-2xl sm:max-w-3xl">
                    A Renaissance mission
                    <br className="" />
                    {' '}
                    for modern times
                  </p>
                  <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <span />
                      <Link href="/weeklyNote" passHref>
                        <a
                          className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm bg-opacity-70 hover:bg-opacity-90 sm:px-8"
                        >
                          Weekly Note
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Progress">
          <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
            {steps.map((step) => (
              <li key={step.name} className="md:flex-1">
                <Link href={step.href} passHref>
                  <a
                    className="flex flex-row py-2 pl-4 border-l-4 border-gray-200 group hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                  >
                    <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase group-hover:text-gray-700">
                      {step.id}
                    </span>
                    <span className="ml-2 font-medium">{step.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </main>

      {/* <main>
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
              <div className="block w-full text-base font-semibold tracking-normal break-normal whitespace-pre-wrap md:inline-block md:w-1/2 md:text-xl md:font-bold">
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
      </main> */}

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
