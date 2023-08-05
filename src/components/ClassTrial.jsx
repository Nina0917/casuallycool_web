import React, { useState } from 'react';
import AudImg from "../assets/t.jpg";
import {
    ClockIcon
} from '@heroicons/react/24/outline'

function ClassTrial() {
    return (
        <div className='overflow-x-hidden pt-36 sm-pt-40 md-pt-48 lg-pt-56'>  {/* background */}
            <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'> {/* content container */}

                <div className='z-10 justify-center flex items-center gap-2 xl:gap-10 pb-6 border-b border-gray-300'> {/* title container*/}
                    <div className='flex flex-col w-2/5 xl:w-1/3'>
                        <div>
                            <h1 className='text-4xl font-bold text-gray-900'>
                                ClassTrial
                            </h1>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <ClockIcon className="inline h-6 w-6 mr-1" />
                            <span className=' inline-block text-gray-900 align-text-bottom'>
                                September 17th
                            </span>
                        </div>


                    </div>
                    <div> <img src={AudImg} alt="logo" /></div>

                </div>

                <div className='-mx-4 sm:-mx-12 lg:mx-0'> {/* paragraphs container*/}

                    <div className='mx-auto max-w-3xl space-y-12 py-12 px-4 text-gray-600 sm:px-12 xl:px-0'>
                        <div className="space-y-4">
                            <p>Whether you aspire to be a part of Team Cool, wish to participate in dance performances or video shootings, or even dream of joining our competitive team to represent CasuallyCool in various dance competitions, we welcome you to join us for the auditions.</p>
                            <p>To accommodate everyone's preferences and ensure a diverse range of talent, we have opened up two options for auditioning. You can choose the format that suits you best:</p>
                        </div>

                        <div class="space-y-6 border-b pb-6 border-gray-300">

                            <div className="space-y-4">
                                <p>1. Present a Choreography Performance: Prepare a choreographed piece of your choice, lasting between 40 to 60 seconds. This allows you to showcase your individual style and creativity.</p>
                                <p>2.  Chore Learning on the Spot: Our talented choreographer will teach a choreography on the day of the audition. Participants will learn the same choreography during the teaching period and then perform it for evaluation. </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Stay tuned to our Instagram for announcements and updates, and join our Discord server to engage with our community and receive real-time updates on audition information and timings.</h2>


                    </div>

                </div>
            </div>
        </div>
    )

}

export default ClassTrial;