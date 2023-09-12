import React, { useState } from 'react';
import AudImg from "../assets/t.jpg";
import ClassTrialBackground from "../assets/ImageGallery/image28.jpg";
import {
    ClockIcon
} from '@heroicons/react/24/outline';


function ClassTrial() {
    return (
        <div className='overflow-x-hidden pt-36 sm-pt-40 md-pt-48 lg-pt-56'>  {/* background */}
            <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'> {/* content container */}

                <div className='z-10 justify-center flex items-center gap-2 xl:gap-10 pb-6 border-b border-gray-300'> {/* title container*/}
                    <div className='flex flex-col w-2/5 xl:w-1/3'>
                        <div>
                            <h1 className='text-4xl font-bold text-gray-900'>
                                Trial Classes
                            </h1>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <ClockIcon className="inline h-6 w-6 mr-1" />
                            <span className=' inline-block text-gray-900 align-text-bottom'>
                                October & November
                            </span>
                        </div>
                    </div>
                    <div> <img src={AudImg} alt="logo" /></div>

                </div>

                <div className='-mx-4 sm:-mx-12 lg:mx-0'> {/* paragraphs container*/}



                    <div className='mx-auto max-w-3xl space-y-12 py-12 px-4 text-gray-600 sm:px-12 xl:px-0'>
                        <img src={ClassTrialBackground} alt="logo" />

                        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">THREE POINTS TO REMEMBER!</h2>

                        <div class="space-y-6 pb-6 border-gray-300">

                            <div className="space-y-4">
                                <p>1. You MUST pre-register for <span class="font-semibold">EACH</span> class you want to attend! Each class has its <span class="font-semibold">OWN</span> google form which is in the <a href="https://linktr.ee/casuallycooldance" class="text-blue-600 visited:text-purple-600">LINKTREE</a> in the bio.
                                    (Ex. To attend two classes, you must register for each class on their OWN google form.</p>
                                <p>2. Here, you will get a gist of the dance styles we will be doing throughout the year and get to know our instructors and perhaps some new friends!</p>
                                <p>2. CLEARER INSTRUCTIONS ARE ON THE GOOGLE FORM WHICH IS LOCATED ON THE <a href="https://linktr.ee/casuallycooldance" class="text-blue-600 visited:text-purple-600">LINKTREE</a> IN OUR
                                    <a href="https://www.instagram.com/casuallycooldance/?hl=en" class="text-blue-600 visited:text-purple-600"> INSTAGRAM</a> SO PLEASE FOLLOW THE PROCEDURES CAREFULLY!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default ClassTrial;