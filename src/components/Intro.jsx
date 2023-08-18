import Section from "./Section";
import empower from "../assets/icon_empower.png";
import connect from "../assets/icon_connect.png";
import friends from "../assets/icon_friends.png";

const Intro = () => {
  function Column({ position, icon, text }) {
    return (
      <div
        className={`${position} p-4 bg-gray-100 rounded-lg shadow-md text-center bg-opacity-40`}
      >
        <div className={`text-black flex justify-center items-center h-16`}>
          <img
            src={icon}
            width="40"
            className={"object-cover"}
            alt="Dance Doodle"
          />
        </div>
        <p className="text-base">{text}</p>
      </div>
    );
  }

  return (
    <>
      {/* ------ Introduction ------- */}
      <div id="intro">
        <Section divider={true} title="What Does CasuallyCool Do?">
          <div className="grid grid-cols-1 md:mt-36 md:mb-20 md:grid-cols-3 gap-8">
            <Column
              position="md:-mt-28 md:mb-28"
              icon={empower}
              text="To Build a supportive empowering fun inclusive dance community"
            />
            <Column
              position="md:mt-8 md:-mb-8"
              icon={connect}
              text="To connect with dacers of all levels & similar minds"
            />
            <Column
              position="md:-mt-28 md:mb-28"
              icon={friends}
              text="To facilitate friends’ vibes while enjoying dancing"
            />
          </div>
        </Section>
      </div>
    </>
  );
};
export default Intro;
