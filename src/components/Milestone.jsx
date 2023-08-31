import React from "react";
import Section from "./Section";

const Milestone = (props) => {
  function MilestoneItem({ id, title, date, description }) {
    const left = id % 2 === 0;
    return (
      <div>
        {/* <!-- Timeline Item --> */}
        <div
          class={`relative flex items-center justify-between md:justify-normal ${
            left ? "md:flex-row-reverse" : ""
          } group ${props.active ? props.active : ""}`}
        >
          {/* <!-- Icon --> */}
          <div
            class={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#56c3bc] text-emerald-50 shadow shrink-0 md:order-1 ${
              left ? "md:-translate-x-1/2" : "md:translate-x-1/2"
            }`}
          >
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* <!-- Card --> */}
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">{title}</div>
              <time class="font-caveat font-medium text-gray-900">{date}</time>
            </div>
            <div class="text-slate-500">{description}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Section divider="true" title="Milestone">
      <div className="space-y-8 w-full relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <MilestoneItem
          id="2"
          title="Birth of CCDC"
          date="April 2022"
          description="Our journey began with brainstorming sessions among our co-founders, culminating in the establishment of the club on April 11th. This marked the inception of the Creative Cultural Dance Club (CCDC), a space for our shared passion."
        ></MilestoneItem>
        {/* <MilestoneItem
          id="2"
          title="Kpop Dance Party"
          date="Sep 2022"
          description="We embarked on our first event, the Random Play Dance - Kpop, held in front of Ontario Hall. To our delight, the turnout exceeded expectations. This event served as our official introduction to the public, and the overwhelming support bolstered our confidence to further develop the club."
        ></MilestoneItem> */}
        <MilestoneItem
          id="3"
          title="Expanding & Collaborations"
          date="Oct 2022"
          description="We took our enthusiasm off-campus, participating in the Kpop Club Night and the Kingston School of Dance freestyle battle. Collaborations with other campus clubs began, leading to performances in various locations and joint events that aimed to raise funds for social causes."
        ></MilestoneItem>
        <MilestoneItem
          id="4"
          title="Launching Recurring Classes"
          date="Nov 2022"
          description="In response to popular demand, we initiated regular classes - one choreography class and one Kpop class per week. These weekly gatherings not only improved our skills but also became a source of motivation and excitement for both our team and the participants."
        ></MilestoneItem>
        <MilestoneItem
          id="5"
          title="Recognition & Financial Boost"
          date="Nov 2022"
          description="Our efforts were acknowledged when we won the Awesome Kingston Awards and secured a bridging grant. This financial support played a crucial role in covering initial expenses related to tutorials, studio rentals, events, and competitions, fortifying our foundation."
        ></MilestoneItem>
        <MilestoneItem
          id="6"
          title="Attend Reach Competition"
          date="Mar 2023"
          description="Representing Queen's University, our CCDC 2023 competition team shone at the Reach Competition. Our performance, centered around the theme of self-discovery and growth, resonated with the audience and fellow dancers. We aimed to inspire a passion for learning, embracing progress, and seizing opportunities, rekindling the street dance spirit at Queen's."
        ></MilestoneItem>
        <MilestoneItem
          id="7"
          title="CCDC Recital"
          date="Apr 2023"
          description="A heartfelt culmination of our efforts, the CCDC Recital in April 2023 was a sight to behold. Tears of joy flowed as both dancers and audience members experienced the joy of dance. Our dream of fostering a space for people to revel in dance as a hobby, passion, and expressive art form came to fruition, reaffirming our mission's success."
        ></MilestoneItem>
      </div>
    </Section>
  );
};

export default Milestone;
