import Section from "./Section";

const JoinMethod = () => {
  function Card({ title, description }) {
    return (
      <>
        <div className="">
          <div className="flex justify-center items-center pb-6">
            <img
              src="https://i.ibb.co/D1TGg2Y/2231692307391-pic.png"
              width="200"
              className={"object-cover"}
              alt="Dance Doodle"
            />
          </div>

          {/* <!-- Pricing Card --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-semibold">{title}</h3>
            <div className="flex items-center mb-8 space-y-4 text-left space-x-3">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* ------ Join Methods ------- */}
      <Section className="pb-20 px-16" title="How to Join Us">
        <div class="px-4 max-w-screen-xl lg:px-6">
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <Card
              title="Dance Class Trials"
              description="Dance class trials will be held at the beginning of the fall/winter term. If you are unsure about your dancing abilities, we encourage you to join the class trial sessions before the official courses are launched!
"
            ></Card>
            <Card
              title="Scheduled Classes"
              description="We offer two classes per week: K-pop and choreography. The drop-in fee for each class is $5. By paying the class fee, you are directly supporting our ability to rent the dance studios at ARC.
              "
            ></Card>
            <Card
              title="Audition Season"
              description="Our audition season is designed to seek out highly motivated dancers who are eager to join our esteemed Team Cool (executive team). You will have the opportunity to participate in exhilarating dance performances, exciting video shootings, and even become part of our competitive team, representing CasuallyCool in a wide range of dance competitions."
            ></Card>
          </div>
        </div>
      </Section>
    </>
  );
};
export default JoinMethod;
