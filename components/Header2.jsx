/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
  BookOpenIcon,
  MicrophoneIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const content = [
  {
    name: 'Blog',
    description: 'My thoughts and guides',
    href: '/blog',
    icon: BookOpenIcon,
  },
  {
    name: 'Podcast',
    description: 'Discussion of my incredibly varied interests',
    href: '/podcast',
    icon: MicrophoneIcon,
  },
  {
    name: 'Challenges',
    description: 'Ways for you to grow and move beyond your current limits',
    href: '/challenges',
    icon: TrendingUpIcon,
  },
];

const services = [
  {
    name: 'Custom Painting',
    description: 'Ask for a custom painting just for you!',
    href: '/',
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '/',
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '/',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header2() {
  return (
    <Popover className="relative bg-gray-700">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:justify-start md:space-x-10">
            <div>
              <Link href="/" passHref>
                <a className="flex cursor-pointer">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="/logo.svg"
                    alt="Makers Life"
                  />
                </a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                <Popover className="relative bg-transparent">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-50' : 'text-gray-500',
                          'p-1 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-50',
                          'focus:outline-none focus:ring-2 ring-offset-gray-100 focus:ring-blue-500',
                        )}
                      >
                        <span>Content</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-200' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-300',
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-3xl"
                        >
                          <div
                            className="overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                          >
                            <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {content.map((item) => (
                                <Link
                                  href={item.href}
                                  passHref
                                >
                                  <a
                                    key={item.name}
                                    className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-md sm:h-12 sm:w-12">
                                      <item.icon className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Link href="/resources" passHref>
                  <a className="p-1 text-base font-medium text-gray-500 hover:text-gray-50">
                    Resources
                  </a>
                </Link>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-50' : 'text-gray-500',
                          'p-1 group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500',
                        )}
                      >
                        <span>Services</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-200' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-300',
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
                        >
                          <div className="overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                              {services.map((item) => (
                                <Link
                                  href={item.href}
                                  passHref
                                >
                                  <a
                                    key={item.name}
                                    className="block p-3 -m-3 rounded-md hover:bg-gray-50"
                                  >
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="flex items-center md:ml-12">
                <Link href="/search" passHref>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-50">
                    Search
                  </a>
                </Link>
                <Link href="/signIn" passHref>
                  <a className="ml-4 text-base font-medium text-gray-500 hover:text-gray-50">
                    Sign in
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a
                    href="/signUp"
                    className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
                  >
                    Sign up
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="/logo.svg"
                        alt="Makers Life"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-6">
                      {content.map((item) => (
                        <Link
                          href={item.href}
                          passHref
                        >
                          <a
                            key={item.name}
                            className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                          >
                            <div
                              className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-blue-500 rounded-md"
                            >
                              <item.icon className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/resources" passHref>
                      <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                        Resources
                      </a>
                    </Link>
                    {services.map((item) => (
                      <Link href={item.href} passHref>
                        <a
                          key={item.name}
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/signUp" passHref>
                      <a
                        className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
                      >
                        Sign up
                      </a>
                    </Link>
                    <p className="mt-6 text-base font-medium text-center text-gray-500">
                      Existing customer?
                      {' '}
                      <Link href="/signIn" passHref>
                        <a className="text-blue-600 hover:text-blue-500">
                          Sign in
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
