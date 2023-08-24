import React, { useState } from 'react';
import AudImg from "../assets/t.jpg";
import {
    ClockIcon
} from '@heroicons/react/24/outline'

function AuditionEvent() {
    return (
        <div className='overflow-x-hidden pt-36 sm-pt-40 md-pt-48 lg-pt-56'>  {/* background */}
            <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'> {/* content container */}

                <div className='z-10 justify-center flex items-center gap-2 xl:gap-10 pb-6 border-b border-gray-300'> {/* title container*/}
                    <div className='flex flex-col w-2/5 xl:w-1/3'>
                        <div>
                            <h1 className='text-4xl font-bold text-gray-900'>
                                Audition Season
                            </h1>
                        </div>
                        <div className='mt-6 flex items-center'>
                            <ClockIcon className="inline h-6 w-6 mr-1" />
                            <span className=' inline-block text-gray-900 align-text-bottom'>
                                September 27th
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
                                <h2 className="text-1xl font-semibold text-gray-800 md:text-2xl">Join Team Cool (performance team)</h2>
                                <p>
                                    Prepare a choreographed piece of your choice, lasting between 40 to 60 seconds. This allows you to showcase your individual style and creativity.
                                    Submit the video online via the team cool application link (located in our Instagram bio <a href="https://linktr.ee/casuallycooldance" class="text-blue-600 visited:text-purple-600">LINKTREE</a>).
                                </p>

                                <p>
                                    We’re actively recruiting dancers to join this team and we will evaluate the audition results on a monthly basis aiming to open up more opportunities for dancers to perform on stage - feel free to submit your
                                    application/get ready to reapply anytime during each month!
                                </p>

                                <h2 className="text-1xl font-semibold text-gray-800 md:text-2xl">Join Competition Team (branch of Team Cool)</h2>
                                <p>
                                    Auditions for the 2023-2024 Competition team will be held twice this year with a similar format for fall and
                                    winter. The fall audition will be Wednesday <span class="font-semibold">September 27th 8:30 to 10:30 pm at ARC Studio 4</span>, and the winter audition will
                                    be at the beginning of <span class="font-semibold">January</span>.
                                </p>

                                <p>
                                    The audition design was crafted to be flexible and accommodate many situations. The in-person
                                    component, where the directors will teach a choreography ranging from 30 to 60 seconds, is the most heavily weighted part. However, the optional multi-video component
                                    allows an auditonee to submit videos even after the in-person deadline to maximise their potential and showcase their desires.
                                </p>
                                <p>
                                    For a more detailed format, please
                                    visit <span class="font-semibold">@casuallycooldance</span> on instagram for all related documents and registration forms!
                                </p>
                            </div>
                        </div>




                    </div>

                </div>
            </div>
        </div>
    )

}

export default AuditionEvent;