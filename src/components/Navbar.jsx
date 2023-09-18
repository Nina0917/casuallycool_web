import React from 'react';
import { Fragment, useState } from "react";
import { Link } from 'react-router-dom';

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Logo from "../assets/avatar_no_background.png";
import {
  Bars3Icon,
  XMarkIcon,
  UserPlusIcon,
  CubeTransparentIcon,
  FaceSmileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";



const events = [
  {
    name: "Audition Season",
    description: "Join our executive team through an audition",
    href: "/events/audition",
    icon: UserPlusIcon,
  },
  {
    name: "Trial Classes",
    description: "Free Trial Class week for new dancers",
    href: "/events/classTrial",
    icon: CubeTransparentIcon,
  },
  {
    name: "Dance Recital",
    description: "Come to see our annual dance recital",
    href: "/events/danceRecital",
    icon: FaceSmileIcon,
  },
  {
    name: "RPD",
    description: "Random Dance Challenge for your favourite KPOP sons",
    href: "/events/RPD",
    icon: GlobeAltIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ onEventClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  return (
    <header>
      <nav id="navbar" className="fixed z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blue" aria-label="Global">
        <div id="navbar-center" className="mx-auto px-4 sm:px-12 xl:max-w-6xl">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="flex lg:flex-1">
              <a className="-m-1.5 p-1.5 href=home">
                <span className="sr-only">Your Company</span>
                {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                <Link to="/" class="cursor-pointer">
                  <img src={Logo} alt="logo" href="#" style={{ width: "90px" }} />
                </Link>

              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 z-5"
                onClick={handleClick}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <Bars3Icon className="h-6 w-6" aria-hidden="true" /> : <XMarkIcon className="h-6 w-6" aria-hidden="true" />}

              </button>
            </div>

            <div className="hidden lg:flex flex-1"></div>

            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  Events
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {events.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span
                                className="absolute inset-0"
                                onClick={() => onEventClick(item.name)}
                              />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <Link
                to="/members"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Member
              </Link>
              <Link
                to="/videos"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Videos
              </Link>

            </Popover.Group>
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div> */}
          </div>
        </div>
      </nav>

      {/* Mobile Menu*/}

      <div className={!mobileMenuOpen ? 'lg:hidden' : 'hidden'}>
        <div className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

          <div className="space-y-2 pb-6 pt-10">
            <div className='pt-10'></div>
            <Disclosure as="div" className="-mx-3">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Events
                    <ChevronDownIcon
                      className={classNames(
                        open ? "rotate-180" : "",
                        "h-5 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {[...events].map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Link
              to="/members"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Team
            </Link>

            <Link
              to="/videos"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Videos
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
