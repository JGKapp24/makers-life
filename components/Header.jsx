import { Menu, Transition } from '@headlessui/react';
import MenuIcon from './icons/MenuIcon';

export default function Header() {
  return (
    <header
      className="flex items-center h-12 bg-transparent text-gray-50"
    >
      <div className="hidden md:grid grid-cols-6 w-full h-full font-bold">
        <button
          type="button"
          className={`
          bg-gray-50 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-200 text-black
        `}
        >
          Blog
        </button>
        <button
          type="button"
          className={`
          bg-gray-50 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-200 text-black
        `}
        >
          Podcast
        </button>
        <button
          type="button"
          className={`
          bg-gray-50 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-200 text-black
        `}
        >
          Challenges
        </button>
        <button
          type="button"
          className={`
          bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300
        `}
        >
          Services
        </button>
        <button
          type="button"
          className={`
          bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300
        `}
        >
          Resources
        </button>
        <button
          type="button"
          className={`
          bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300
        `}
        >
          Search
        </button>
      </div>
      <Menu>
        {({ open }) => (
          <div className="z-10 relative inline-block h-full w-full md:w-auto text-left bg-black">
            <Menu.Button
              className={`
                inline-flex justify-center items-center h-full rounded-md border-0 px-3 text-sm font-medium text-gray-50
                bg-black hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-2
                focus:ring-offset-blue-800 focus:ring-gray-800 ring-inset
              `}
            >
              <span className="md:hidden px-2">
                Menu
              </span>
              <MenuIcon />
            </Menu.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                static
                className={`
                  absolute origin-top-left left-0 md:origin-top-right md:right-0 md:left-auto mt-2 w-48 rounded-md shadow-lg
                  bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 text-black
                  focus:outline-none focus:ring-1 focus:ring-blue-400
                `}
              >
                <div className="flex flex-col py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`
                          rounded-md text-lg mx-2 p-1
                          ${active ? 'bg-gray-100 ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-100' : ''}
                        `}
                      >
                        Blog
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`
                          rounded-md text-lg mx-2 p-1
                          ${active ? 'bg-gray-100 ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-100' : ''}
                        `}
                      >
                        Podcast
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`
                          rounded-md text-lg mx-2 p-1
                          ${active ? 'bg-gray-100 ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-100' : ''}
                        `}
                      >
                        Challenges
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="flex flex-col py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`
                          rounded-md text-lg mx-2 p-1
                          ${active ? 'bg-gray-100 ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-100' : ''}
                        `}
                      >
                        Services
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`
                          rounded-md text-lg mx-2 p-1
                          ${active ? 'bg-gray-100 ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-100' : ''}
                        `}
                      >
                        Resources
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="flex flex-col py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`
                          rounded-md text-lg mx-2 p-1
                          ${active ? 'bg-gray-100 ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-100' : ''}
                        `}
                      >
                        Search
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    </header>
  );
}
