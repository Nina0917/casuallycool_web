import React, { useState } from 'react';
import background from "../assets/background.jpg";

import {
    ClockIcon
} from '@heroicons/react/24/outline'

const videos = [
    {
      id: 1,
      title: "Video 1",
      description: "Description for Video 1",
      location: "Location 1",
      time: "2:30",
      videoUrl: "https://www.youtube.com/watch?v=Rm_c5S5dYYE", // Replace with actual YouTube video URLs
    },
    {
      id: 2,
      title: "Video 2",
      description: "Description for Video 2",
      location: "Location 2",
      time: "3:45",
      videoUrl: "https://www.youtube.com/watch?v=Rm_c5S5dYYE", // Replace with actual YouTube video URLs
    },
    {
      id: 3,
      title: "Video 3",
      description: "Description for Video 3",
      location: "Location 3",
      time: "1:15",
      videoUrl: "https://www.youtube.com/watch?v=Rm_c5S5dYYE", // Replace with actual YouTube video URLs
    },
    // Add more videos as needed
  ];
  
  const getVideoIdFromUrl = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : "";
  };
  


function Video() {
    return (
        <div className='bg-cover bg-center bg-fixed overflow-x-hidden pt-36 sm-pt-40 md-pt-48 lg-pt-56'  style={{ backgroundImage: `url(${background})` }}>  {/* background */}
            <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'> {/* content container */}

                <div className='z-10 justify-center flex items-center gap-2 xl:gap-10 pb-6 border-b border-gray-300'> {/* title container*/}
                    <div className='flex flex-col w-2/5 xl:w-1/3'>
                        <div>
                            <h1 className='text-4xl font-bold text-gray-900'>
                                Audition Season
                            </h1>
                        </div>


                    </div>


                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 p-8  flex justify-center items-center">
                {videos.map((video) => (
        <div key={video.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center items-center">
          <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg ">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title={video.title}
                src={`https://www.youtube.com/embed/${getVideoIdFromUrl(video.videoUrl)}`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{video.title}</div>
              <p className="text-gray-700 text-base mb-2">{video.description}</p>
              <p className="text-gray-600 text-base mb-2">{video.location}</p>
              <p className="text-gray-600 text-base">{video.time}</p>
            </div>
          </div>
        </div>
      ))}
    

                
            </div>
        </div>
    )

}

export default Video;