import React from "react";
import dance_doodle from "../assets/home_doodle.png";
import Section from "./Section";
import Intro from "./Intro";
import Values from "./Values";
import Gallery from "./Gallery";
import Milestone from "./Milestone";
import JoinMethod from "./JoinMethod";
import SocialContacts from "./SocialContact";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div>
      {/* ------ Landing Page ------- */}
      <Section className="pt-56">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 md:text-4xl md:leading-tight">
              Join a Welcoming Dance Space for Every Passionate Soul
            </h1>
            <p className="py-5 text-base leading-normal text-gray-500 md:text-xl ">
              CasuallyCool: The All-Inclusive Dance Community at Queen's
              University
            </p>

            <div className="flex md:flex-col md:items-start md:space-y-5 space-x-4 space-y-0 items-center justify-center flex-row">
              <Link
                to="intro"
                smooth={true}
                duration={500}
                className="px-6 py-3 text-base md:text-lg font-medium text-center text-white bg-[#56c3bc] rounded-md cursor-pointer"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={dance_doodle}
              width="470"
              className={"object-cover"}
              alt="Dance Doodle"
            />
          </div>
        </div>
      </Section>
      <SocialContacts />
      <Intro />
      <Values />
      <Milestone />
      <Gallery />
      <JoinMethod />
    </div>
  );
};

export default Home;
