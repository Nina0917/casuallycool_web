import React, { useState } from 'react';
import AudImg from "../assets/t.jpg";
import RPDBackground from "../assets/ImageGallery/image25.jpg";
import {
    ClockIcon
} from '@heroicons/react/24/outline';

function RPD() {
    return (
        <div className='overflow-x-hidden pt-36 sm-pt-40 md-pt-48 lg-pt-56'>  {/* background */}
            <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'> {/* content container */}

                <div className='z-10 justify-center flex items-center gap-2 xl:gap-10 pb-6 border-b border-gray-300'> {/* title container*/}
                    <div className='flex flex-col w-2/5 xl:w-1/3'>
                        <div>
                            <h1 className='text-4xl font-bold text-gray-900'>
                                Random Play Dance
                            </h1>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <ClockIcon className="inline h-6 w-6 mr-1" />
                            <span className=' inline-block text-gray-900 align-text-bottom'>
                                Anytime!
                            </span>
                        </div>
                    </div>
                    <div> <img src={AudImg} alt="logo" /></div>

                </div>

                <div className='-mx-4 sm:-mx-12 lg:mx-0'> {/* paragraphs container*/}

                    <div className='mx-auto max-w-3xl space-y-12 py-12 px-4 text-gray-600 sm:px-12 xl:px-0'>
                        <img src={RPDBackground} alt="logo"></img>
                        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">K-Pop Random Play Dance is backkk!!</h2>
                        <div className="space-y-4">
                            <p>Our Random Dance Play activity is an exhilarating experience that lets you unleash your inner dancer while jamming to a dynamic mix of KPOP tracks.
                                From the latest chart-toppers to timeless classics, our playlist covers a wide spectrum of KPOP genres, ensuring there's something for everyone to enjoy.</p>

                        </div>


                        <div class="space-y-6 border-b pb-6 border-gray-300">

                            <div className="space-y-4">
                                <p>Stay up-to-date with the latest announcements, schedules, and sneak peeks of our Random Dance Play activity by following us on  <a href="https://www.instagram.com/casuallycooldance/?hl=en" class="text-blue-600 visited:text-purple-600">INSTAGRAM</a> </p>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )

}

export default RPD;