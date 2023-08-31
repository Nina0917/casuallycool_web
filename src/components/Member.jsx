import React from 'react';
import Amy from '../assets/Amy.jpg';
import Ashley from '../assets/Ashely.jpg';
import AudImg from "../assets/t.jpg";
import zewei from "../assets/Zewei.jpg";
import Paul from "../assets/Paul.jpg";
import zilu from "../assets/Zilu.jpg";
import Rohini from "../assets/Rohin.jpg";
import Marna from "../assets/Marna.jpg";
import Robert from "../assets/Rob.jpg";
import Yihong from "../assets/Yihong.jpg";
import Moriah from "../assets/DSC.jpg";
import Rose from "../assets/Rose.jpg";
import Crystal from "../assets/Crystal.jpg";
import Albert from "../assets/Albert.jpg";
import Rachel from "../assets/Rachel.jpg";
import Sarah from "../assets/Sarah.jpg";
function Member() {
  const members = [
    { name: 'Amy Xiao', avatar: Amy, description:"Hi! I am Amy.....",position:"co-president",team:"President"},
    
    { name: 'Zewei Wang', avatar: zewei, description:"Hey I'm Zewei! Along with my close friends, we hope to build and maintain a diverse, equal, loving, accessible, and supportive dance communinty where we all enjoy. Remember to have fun while you are here! :)",position:"co-president" },
    { name: 'Paul Yang', avatar: Paul, description:"Favorite choreo: Freaky Deaky - Yechan Choreography",position:"co-president",team:"President" },

  ];
  const members1 = [
    { name: 'Zilu Yan', avatar: zilu, description:"Heyhey, come and join us to build an interestingggggg dance community! Recent favorite song I want to recommend: Winter - Se So Neon.",position:"events coordinator",team:"Events" },
     ];
  const members2 = [

    { name: 'Rohini Wagh', avatar: Rohini, description:"I love Kpop and always wanted to learn hiphop dance. I wish to be a part of an inclusive community of people passionate for dancing and Kpop. Favorite group: BTS, BLACKPINK",position:"first year Intern",team:"First Year Representatives" },
    { name: 'Ashley', avatar: Ashley, description:"Favorite choreo: Say my name choreo by Koharu Sugawara",position:"first year Intern",team:"First Year Representatives" },

  ];
  const members3 = [

    { name: 'Moriah Yu', avatar: Moriah, description:"Favorite song/choreo: Moonwalker - SEVENTEEN; Summer Rain - Sam Kim",position:"social media coordinator",team:"Social Media" },
    { name: 'Marna Jiang', avatar: Marna, description:"As a huge Kpop fan, I wish I could find someone with the same interests to dance with, also create a kpop community and host kpop events. SAY THE NAME SEVENTEEN!  !",position:"social media coordinator",team:"Social Media" },

  ];
  const members4 = [

    { name: 'Robert Jinn', avatar: Robert, description:"To say that my time with the dance community in Kingston has been enjoyable would be an understatement. From Queen's affiliated clubs to local dance communities, I have found a love and passion for the world of dance and its expression of emotion that has far outgrown the borders of Kingston as a city. Though I may have branched out into other larger cities seeking other communities to share in our mutual passion from dance, I can and will always look to connect with communities in the place where it all began.",position:"photographer",team:"Film"},
    { name: 'Yihong Liu', avatar: Yihong, description:"Dance for fun hehe",position:"videographer & dance instructor",team:"Film & Dance"},
    { name: 'Rose Oh', avatar: Rose, description:"Favorite song/choreo: Thiscase choreography to Ph-1's Homebody! I also love NCT <3",position:"editor",team:"Film"},
    { name: 'Sarah Zhang ', avatar: Sarah, description:"Favorite dance performance: 2023 CCDC Recita",position:"photographer",team:"Film"}
  ];
  const members5 = [

    { name: 'Albert Bui', avatar: Albert, description:"The Kingston Dance community took me in and rekindled a lost passion I had for dance. All I want is to let people experience the same things I was able to. ",position:"dance department coordinator",team:"Dance"},
    { name: 'Rachel Levin', avatar: Rachel, description:"Favorite song: Paradise - BTS",position:"dance instructor",team:"Dance"},
    { name: 'Crystal He', avatar: Crystal, description:"Favorite song: Dangerous Women - Rozalin",position:"dance instructor",team:"Dance"},
    { name: 'Yihong Liu', avatar: Yihong, description:"Dance for fun hehe",position:"videographer & dance instructor",team:"Film & Dance"},
  ];


  return (
    <div className="overflow-x-hidden pt-36 sm-pt-40 md-pt-48 lg-pt-56">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="z-10 justify-center flex items-center gap-2 xl:gap-10 pb-6 border-b border-gray-300">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900  ">Our Team</h2>
          
      </div> 
      <div class="">
      <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25  " />
            <div>
            <h2 class="italic mb-4 text-xl tracking-wider font-normaltext-gray-900  ">PRESIDENT</h2>
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
            
              {members.map((member, index) => (
                
                <div
                  key={index}
                  className="flex bg-gradient-to-r from-orange-50 items-strech overflow-auto shadow-xl max-h-52 rounded-lg  "
                >
                    <div class=" bg-gradient-to-r from-orange-50  sm:flex ">

                            <img class="w-32 h-32 rounded-lg mr-4 " fill src={member.avatar} alt={member.name} style={{ objectFit: 'fill', width: '200px', height: '200px' }}/>

                        <div class="p-5">
                        <div class="flex items-center">
                        <h3 class="italic text-xl font-normal text-gray-800  mr-2 ">
                            {member.name} </h3>
   

                                    <a href="#" class="text-gray-500 ml-2  ">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clip-rule="evenodd" /></svg>
                                    </a>

                            </div>
                            <span class="italic text-gray-500  ">  {member.position} </span>
                            <br/>

                            <p class="mt-3 mb-4 font-light text-gray-500  ">{member.description}</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                  

                                <li>

                                </li>
                            </ul>
                        </div>
                    </div> 
                 
                </div>
              ))}
            </div></div>
            <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25  " />
            
            <div><h2 class="italic mb-4 text-xl tracking-wider font-normaltext-gray-900  ">SOCIAL MEDIA</h2>

            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
            
              {members3.map((member, index) => (
                
                <div
                  key={index}
                  className="flex bg-gradient-to-r from-orange-50 items-strech overflow-auto shadow-xl max-h-52 rounded-lg  "
                >
                    <div class=" bg-gradient-to-r from-orange-50  sm:flex ">

                            <img class="w-32 h-32 rounded-lg mr-4 " fill src={member.avatar} alt={member.name} style={{ objectFit: 'fill', width: '200px', height: '200px' }}/>

                        <div class="p-5">
                       <div class="flex items-center">
                        <h3 class="italic text-xl font-normal text-gray-800  mr-2 ">
                            {member.name} </h3>
   

                                    <a href="#" class="text-gray-500 ml-2  ">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clip-rule="evenodd" /></svg>
                                    </a>

                            </div>
                            <span class="italic text-gray-500  ">  {member.position} </span>
                            <br/>
                            <p class="mt-3 mb-4 font-light text-gray-500  ">{member.description}</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                  



                            </ul>
                        </div>
                    </div> 
                 
                </div>
              ))}
            </div></div>
            <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25  " />

            <div><h2 class="italic mb-4 text-xl tracking-wider font-normaltext-gray-900  ">EVENTS</h2>

            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
            
              {members1.map((member, index) => (
                
                <div
                  key={index}
                  className="flex bg-gradient-to-r from-orange-50 items-strech overflow-auto shadow-xl max-h-52 rounded-lg  "
                >
                    <div class=" bg-gradient-to-r from-orange-50  sm:flex ">

                            <img class="w-32 h-32 rounded-lg mr-4 " fill src={member.avatar} alt={member.name} style={{ objectFit: 'fill', width: '200px', height: '200px' }}/>

                        <div class="p-5">
                       <div class="flex items-center">
                        <h3 class="italic text-xl font-normal text-gray-800  mr-2 ">
                            {member.name} </h3>
   

                                    <a href="#" class="text-gray-500 ml-2  ">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clip-rule="evenodd" /></svg>
                                    </a>

                            </div>
                            <span class="italic text-gray-500  ">  {member.position} </span>
                            <br/>
                            <p class="mt-3 mb-4 font-light text-gray-500  ">{member.description}</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                  

                                <li>

                                </li>
                            </ul>
                        </div>
                    </div> 
                 
                </div>
              ))}
            </div></div>
            <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25  " />

            <div><h2 class="italic mb-4 text-xl tracking-wider font-normaltext-gray-900  ">FILM</h2>

            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
            
              {members4.map((member, index) => (
                
                <div
                  key={index}
                  className="flex bg-gradient-to-r from-orange-50 items-strech overflow-auto shadow-xl max-h-52 rounded-lg  "
                >
                    <div class=" bg-gradient-to-r from-orange-50  sm:flex ">

                            <img class="w-32 h-32 rounded-lg mr-4 " fill src={member.avatar} alt={member.name} style={{ objectFit: 'fill', width: '200px', height: '200px' }}/>

                        <div class="p-5">
                       <div class="flex items-center">
                        <h3 class="italic text-xl font-normal text-gray-800  mr-2 ">
                            {member.name} </h3>
   

                                    <a href="#" class="text-gray-500 ml-2  ">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clip-rule="evenodd" /></svg>
                                    </a>

                            </div>
                            <span class="italic text-gray-500  ">  {member.position} </span>
                            <br/>
                            <p class="mt-3 mb-4 font-light text-gray-500  ">{member.description}</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                  

                                <li>

                                </li>
                            </ul>
                        </div>
                    </div> 
                 
                </div>
              ))}
            </div></div>
            <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25  " />

            <div><h2 class="italic mb-4 text-xl tracking-wider font-normaltext-gray-900  ">DANCE</h2>

            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
            
              {members5.map((member, index) => (
                
                <div
                  key={index}
                  className="flex bg-gradient-to-r from-orange-50 items-strech overflow-auto shadow-xl max-h-52 rounded-lg  "
                >
                    <div class=" bg-gradient-to-r from-orange-50  sm:flex ">

                            <img class="w-32 h-32 rounded-lg mr-4 " fill src={member.avatar} alt={member.name} style={{ objectFit: 'fill', width: '200px', height: '200px' }}/>

                        <div class="p-5">
                       <div class="flex items-center">
                        <h3 class="italic text-xl font-normal text-gray-800  mr-2 ">
                            {member.name} </h3>
   

                                    <a href="#" class="text-gray-500 ml-2  ">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clip-rule="evenodd" /></svg>
                                    </a>

                            </div>
                            <span class="italic text-gray-500  ">  {member.position} </span>
                            <br/>
                            <p class="mt-3 mb-4 font-light text-gray-500  ">{member.description}</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                  

                                <li>

                                </li>
                            </ul>
                        </div>
                    </div> 
                 
                </div>
              ))}
            </div></div>
            <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25  " />

            <div><h2 class="italic mb-4 text-xl tracking-wider font-normaltext-gray-900  ">INTERN</h2>

            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
            
              {members2.map((member, index) => (
                
                <div
                  key={index}
                  className="flex bg-gradient-to-r from-orange-50 items-strech overflow-auto shadow-xl max-h-52 rounded-lg  "
                >
                    <div class=" bg-gradient-to-r from-orange-50  sm:flex ">

                            <img class="w-32 h-32 rounded-lg mr-4 " fill src={member.avatar} alt={member.name} style={{ objectFit: 'fill', width: '200px', height: '200px' }}/>

                        <div class="p-5">
                       <div class="flex items-center">
                        <h3 class="italic text-xl font-normal text-gray-800  mr-2 ">
                            {member.name} </h3>
   

                                    <a href="#" class="text-gray-500 ml-2  ">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clip-rule="evenodd" /></svg>
                                    </a>

                            </div>
                            <span class="italic text-gray-500  ">  {member.position} </span>
                            <br/>
                            <p class="mt-3 mb-4 font-light text-gray-500  ">{member.description}</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                  

                                <li>

                                </li>
                            </ul>
                        </div>
                    </div> 
                 
                </div>
              ))}
            </div></div>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;