import Section from "./Section";

const JoinMethod = () => {
  function Card({ title, img, description }) {
    return (
      <>
        <div className="">
          <div className="flex justify-center items-center pb-6">
            <img
              src={img}
              width="330"
              className={"object-cover"}
              alt="Dance Doodle"
            />
          </div>

          {/* <!-- Pricing Card --> */}
          <div class="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <div className="flex text-center">
              <h3 class="mb-4 text-2xl font-semibold">{title}</h3>
            </div>
            {description}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* ------ Join Methods ------- */}
      <Section className="pb-20 px-12" title="How to Join Us">
        <div class="px-4 max-w-screen-xl lg:px-6">
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <Card
              title="Dance Class Trials"
              img="https://i.ibb.co/mCY9tY8/image9.jpg"
              description={
                <ul class="list-disc">
                  <li>Held at the beginning of the fall/winter term.</li>
                  <li>
                    Encourages participation in trial sessions for uncertain
                    dancers.
                  </li>
                  <li>
                    Provides a chance to assess dancing abilities before
                    official courses.
                  </li>
                  <li>
                    Helps individuals make informed decisions about joining the
                    classes.
                  </li>
                </ul>
              }
            ></Card>
            <Card
              title="Scheduled Classes"
              img="https://i.ibb.co/w6h6ZKD/image21.jpg"
              description={
                <ul class="list-disc">
                  <li>Offers two weekly classes: K-pop and choreography.</li>
                  <li>Each class has a drop-in fee of $5.</li>
                  <li>Payment supports rental of dance studios at ARC.</li>
                  <li>
                    Flexibility for attendees to choose classes based on
                    preferences.
                  </li>
                </ul>
              }
            ></Card>
            <Card
              title="Audition Season"
              img="https://i.ibb.co/vjNs6DG/image31.jpg"
              description={
                <ul class="list-disc">
                  <li>Designed to discover dedicated dancers for Team Cool.</li>
                  <li>
                    Involves exciting dance performances and video shoots.
                  </li>
                  <li>
                    Opportunity to join the competitive team for various dance
                    competitions.
                  </li>
                  <li>
                    Represents CasuallyCool in a wide range of dance events.
                  </li>
                  <li>
                    Ideal for highly motivated dancers seeking greater
                    challenges.
                  </li>
                </ul>
              }
            ></Card>
          </div>
        </div>
      </Section>
    </>
  );
};
export default JoinMethod;
