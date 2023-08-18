import React, { useState } from 'react';
import AudImg from "../assets/t.jpg";
import {
    ClockIcon
} from '@heroicons/react/24/outline'

function DanceRecital() {
    return (
        <div className='overflow-x-hidden pt-36 sm-pt-40 md-pt-48 lg-pt-56'>  {/* background */}
            <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'> {/* content container */}

                <div className='z-10 justify-center flex items-center gap-2 xl:gap-10 pb-6 border-b border-gray-300'> {/* title container*/}
                    <div className='flex flex-col w-2/5 xl:w-1/3'>
                        <div>
                            <h1 className='text-4xl font-bold text-gray-900'>
                                Annual Dance Recital
                            </h1>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <ClockIcon className="inline h-6 w-6 mr-1" />
                            <span className=' inline-block text-gray-900 align-text-bottom'>
                                April 7th
                            </span>
                        </div>
                    </div>
                    <div> <img src={AudImg} alt="logo" /></div>

                </div>

                <div className='-mx-4 sm:-mx-12 lg:mx-0'> {/* paragraphs container*/}



                    <div className='mx-auto max-w-3xl space-y-12 py-12 px-4 text-gray-600 sm:px-12 xl:px-0'>
                        <div className="space-y-4">
                            <p>If you are interested in performing at the recital, please submit the following details to <span class="font-semibold">casuallycooldance@gmail.com</span></p>
                            <p>Note that: Sound Check is at 4pm, show starts at 5pm</p>
                        </div>


                        <div class="space-y-6 border-b pb-6 border-gray-300">

                            <div className="space-y-4">
                                <p>1.Song name or performance name, dance genre if applicable</p>
                                <p>2. Performers names and number of performers </p>
                                <p>3. Short blurb or intro of your performance/anything u would like the MC to say to the audience</p>
                                <p>4. music file (most important)</p>
                                <p>5. Any preference on your show order if you have schedule conflicts that you have to leave early</p>
                                <p>6. Estimated length of your performance please</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">See you soon!</h2>


                    </div>

                </div>
            </div>
        </div>
    )

}

export default DanceRecital;