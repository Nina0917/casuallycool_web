import React, { useState } from 'react';
import background from "../assets/background.jpg";

import {
    ClockIcon
} from '@heroicons/react/24/outline'

const videos1=[
  {
    title:"[KPOP CLASS] 'MOONLIGHT SUNRISE' - TWICE taught by Crystal H",
    Date: "Mar, 2023",
    Instructor: "Crystal He",
    videoUrl: "https://www.youtube.com/watch?v=5KkmZaAKqsA"
  },
  {
    title:"[CHOREO CLASS] 'Energy' - Beyoncé taught by Rachel Levin",
    Date: "Mar, 2023",
    Instructor: "Rachel Levin",
    videoUrl: "https://www.youtube.com/watch?v=wt5w0JHumkA"
  },
  {
    title:"[KPOP CLASS] 'Salty and Sweet' - aespa taught by Crystal He",
    Date: "Mar, 2023",
    Instructor: "Crystal He",
    videoUrl: "https://www.youtube.com/watch?v=8JKkK2NJBME"
  },

  {
    title:"[CHOREO CLASS] 'Kream' - Iggy taught by Zewei Wang & Amy Xiao",
    Date: "April, 2023",
    Instructor: "Zewei Wang & Amy Xiao",
    videoUrl: "https://www.youtube.com/watch?v=vEUGiRmbTbM"
  },

  {
    title:"【CHOREO CLASS] 'POSE' - Rihanna taught by Paul Yang (full class vid)",
    Date: "Mar, 2023",
    Instructor: " Paul Yang",
    videoUrl: "https://www.youtube.com/watch?v=qEfElkKUgYo"
  },

]

const videos = [
    {
      id: 1,
      title: "NewJeans (뉴진스) 'OMG' Dance Cover by CASUALLY COOL DANCE CREW from Canada",
      description: "Club Music Video Dance Cover Production",
      location: "Queen's University (Kingston, ON) ",
      date: "Apr 18, 2023 ",
      dancer: "Crystal He - Hanni, Amy Xiao - Hyerin,Ashley Um - Hyein,Paul Yang - Danielle, Rose Oh - Minji, Filmed by: Yihong Liu, Edited by: Rose Oh, Post-production Supervisor: Paul Yang",
      videoUrl: "https://www.youtube.com/watch?v=Rm_c5S5dYYE", // Replace with actual YouTube video URLs
    },
    {
      id: 2,
      title: "TWICE (트와이스) 'Talk that Talk'| Dance Cover by CASUALLY COOL DANCE CREW from Canada",
      description: "Club Dance Cover Music Video Production",
      location: "Queen’s University (Kingston, ON)",
      date: "Apr 2, 2023",
      dancer: "Paul Yang - Nayeon, Crystal Liu - Jihyo, Crystal He - Sana, Sarah Calback - Mina, Rachel Levin - Chaeyoung, Yiyin Liu - Momo, Kelly Zhu - Jeongyeon, Xin He - Dahyun, Thera Sze - Tzuyu, Filmed by: Rob Jinn, Edited by: Rose Oh, Post-production Supervisor: Paul Yang",
      videoUrl: "https://www.youtube.com/watch?v=q_ls6QFjI7k", // Replace with actual YouTube video URLs
    },
    {
      id: 3,
      title: "Casually Cool Dance Crew [Front Row] | REACH 2023",
      description: "Club Dance Cover Music Video Production",
      location: "Meridian Arts Centre: Lyric Theatre (North York, ON)",
      date: "Mar 18th, 2023",
      videoUrl: "https://www.youtube.com/watch?v=z1yt9heh8zA",
      dancer:"Khanh-Hao (Albert) Bui, Zhuyu (Crystal) He, Katrina Lam, Wing Chi (Charisse) Lee, Rachel Levin, Yihong Liu, Chloe Ng, Brian Nguyen, Rose (Yeonjae) Oh, Chrishella Senadeera, Taeyeon (Ashley) Um, Zewei Wang" 
    },
    {
      id: 4,
      title: " BLACKPINK (블랙핑크) 'ShutDown' | Dance Cover by CASUALLY COOL DANCE CREW from Canada",
      description: "Reach Competition",
      location: " Queen’s University (Kingston, ON)",
      date: "Mar 6, 2023",
      videoUrl: "https://www.youtube.com/watch?v=0R1X41eIAyE",
      dancer:"Jennie - Amy Xiao,Jisoo - Marna Jiang, Lisa- Kristy Wang, Rosé - Crystal Liu, Filmed by: Yihong Liu, Edited by: Moriah Yu"
    },



    {
      id: 5,
      title: "Lil Jon 'ALIVE' ft. Offset & 2Chainz Choreography Cover Video",
      description: "Club Dance Cover Music Video Production",
      location: " Queen’s University (Kingston, ON)",
      date: "Dec 2, 2022",
      videoUrl: "https://www.youtube.com/watch?v=D_Ijr8iD6VI",
      dancer:"Elaine Liu, Paul Yang, Zewei Wang, Filmed by Robert Jinn & Yihong Liu, Edited by Paul Yang & Yihong Liu"
    },
    {
      id: 6,
      title: "NewJeans (뉴진스) 'Attention' | Dance Cover by CASUALLY COOL DANCE CREW from Canada",
      description: "Club Dance Cover Music Video Production",
      location: " Queen’s University (Kingston, ON)",
      date: "Nov 4, 2022",
      videoUrl: "https://www.youtube.com/watch?v=N53idm0PKws",
      dancer:"Zewei Wang- Hyein, Crystal Liu - Minji, Nina Ma - Danielle, Amy Xiao - Hanni, Paul Yang - Haerin, Filmed by: Yihong Liu, Edited by: Paul Yang"
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

                <div className='z-10 justify-center flex items-center '> {/* title container*/}
                    <div className='flex flex-col w-2/5 xl:w-1/3'>
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900  ">videos</h2>

      </div> 


                    </div>


                </div>
                </div>

                

<div className="flex justify-center items-stretch">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-32 p-16 ">
    {videos.map((video) => (
      <div key={video.id} className="w-full h-full">
        <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg flex flex-1 items-stretch flex-col h-ful">
        <div
            style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio (9 / 16 * 100)
            className="relative h-0"
          >
            <iframe
              title={video.title}
              src={`https://www.youtube.com/embed/${getVideoIdFromUrl(video.videoUrl)}`}
              className="absolute w-full h-full"
              allowFullScreen
            />
          </div>
           <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{video.title}</div>
            <div class="flex ">
            <div class="flex items-start mr-2">
            <svg class="h-4 w-4 text-black-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg></div><p className="text-gray-700 text-base mb-2">{video.description}</p>
            </div>
            <div class="flex ">
            <div class="flex items-start mr-2">
            <svg class="h-4 w-4 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg>
            </div>
            <p className="text-gray-600 text-base mb-2">{video.date}</p>
            </div>

            <div class="flex ">
            <div class="flex items-start mr-2">
            <svg class="h-4 w-4 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
</svg></div>
            <p className="text-gray-600 text-base mb-2">{video.location}</p>
            </div>
            <div class="flex ">
            <div class="flex items-start mr-2">
              <svg class="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
  <p class="text-gray-700 text-base mb-2">{video.dancer}</p>
</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25  " />
<div className='z-10 justify-center flex items-center gap-2 xl:gap-10 pb-6 '>
<div className='flex flex-col w-2/5 xl:w-1/3'>
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 items-center">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900  ">classes clips</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl  "></p>
      </div> 

                    </div></div>

<div className="flex justify-center items-center">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-32 p-16">
    {videos1.map((video) => (
      <div key={video.id} className="w-full">
        <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
        <div
            style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio (9 / 16 * 100)
            className="relative h-0"
          >
            <iframe
              title={video.title}
              src={`https://www.youtube.com/embed/${getVideoIdFromUrl(video.videoUrl)}`}
              className="absolute w-full h-full"
              allowFullScreen
            />
          </div>
           <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{video.title}</div>

            <div class="flex ">
            <div class="flex items-start mr-2">
            <svg class="h-4 w-4 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg>
            </div>
            <p className="text-gray-600 text-base mb-2">{video.Date}</p>
            </div>


            <div class="flex ">
            <div class="flex items-start mr-2">
              <svg class="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
  <p class="text-gray-700 text-base mb-2">{video.Instructor}</p>
</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
    )

}

export default Video;