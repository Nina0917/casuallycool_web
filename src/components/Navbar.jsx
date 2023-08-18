import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Logo from '../assets/avatar_no_background.png'
import {
    Bars3Icon,
    XMarkIcon,
    UserPlusIcon,
    CubeTransparentIcon,
    FaceSmileIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Member from './Member'
import Video from './Video'

// const products = [
//     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//     { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//     { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//     { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlu sIcon },
//     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]

const events = [
    { name: 'Audition Season', description: 'Join our executive team through an audition', href: '#', icon: UserPlusIcon },
    { name: 'Class Trial', description: 'Free Trial Class week for new dancers', href: '#', icon: CubeTransparentIcon },
    { name: 'Dance Recital', description: 'Come to see our annual dance recital', href: '#', icon: FaceSmileIcon },
    { name: 'RPD', description: 'Random Dance Challenge for your favourite KPOP sons', href: '#', icon: GlobeAltIcon },

]
   
// const callsToAction = [
//     { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//     { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = ({ onEventClick }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header>
            {/* <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global"> */}
            <nav id="navbar" className="fixed z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blue" aria-label="Global">
                <div id="navbar-center" className="mx-auto px-4 sm:px-12 xl:max-w-6xl">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
                        <div className="flex lg:flex-1">
                            <a className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                                <img src={Logo} alt="logo" style={{ width: "90px" }} />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className='hidden lg:flex flex-1'></div>

                        <Popover.Group className="hidden lg:flex lg:gap-x-12">
                            <Popover className="relative">
                                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                    Events
                                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
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
                                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <a href={item.href} className="block font-semibold text-gray-900">
                                                            {item.name}
                                                            <span className="absolute inset-0" onClick={() => onEventClick(item.name)} />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div> */}
                                    </Popover.Panel>
                                </Transition>
                            </Popover>

                            <a 
                            href="Member" 
                            
                            onClick={(e) => {
                                e.preventDefault();
                                onEventClick('Member');
                            }}
                        
                            className="text-sm font-semibold leading-6 text-gray-900" 
                            >
                                Member
                            </a>
                            <a 
                                href="Videos" 
                            
                                onClick={(e) => {
                                    e.preventDefault();
                                    onEventClick('Video');
                                }}
                            
                                className="text-sm font-semibold leading-6 text-gray-900" 
                                >
                                Videos
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Contact
                            </a>
                        </Popover.Group>
                        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div> */}

                    </div>

                </div>
            </nav>





            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Events
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
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
                                <a
                                    href="Member"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onEventClick('Member');
                                        console.log("go to member")
                                    }}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Team
                                </a>

                                <a
                                    href="Video"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onEventClick('Video');
                                        console.log("go to video")
                                    }}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Videos
                                </a>

                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </a>
                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>


        </header>
    )
}

export default Navbar;