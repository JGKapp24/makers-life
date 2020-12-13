import { Menu, Transition } from '@headlessui/react';
import MenuIcon from './icons/MenuIcon';

export default function Header () {
  return (
    <>
    {/* Small Screens */}
      <div
        className="flex flex-row-reverse items-center py-3 px-6 bg-black text-gray-50"
      >
        <Menu>
          {({ open }) => (
            <div className="relative inline-block text-left">
              <Menu.Button
                className={`
                  inline-flex justify-center w-xm items-center rounded-md border-0 px-3 text-sm font-medium text-gray-50
                  bg-black hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-2
                  focus:ring-offset-gray-800 focus:ring-blue-800
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
                <Menu.Items static
                  className={`
                    origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black
                    ring-opacity-5 divide-y divide-gray-200 text-black focus:outline-none focus:ring-1 focus:ring-blue-400
                  `}
                >
                  <div className="flex flex-col py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button type="button"
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
                        <button type="button"
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
                        <button type="button"
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
                        <button type="button"
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
                        <button type="button"
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
                        <button type="button"
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
      </div>
    </>
  );
};
