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
            class={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 text-emerald-50 shadow shrink-0 md:order-1 ${
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
              <time class="font-caveat font-medium text-indigo-500">
                {date}
              </time>
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
          id="1"
          title="1"
          date="April 2022"
          description="We got the general idea of CCDC after some meetings among the co-founders. April 11th is the club’s birthday!"
        ></MilestoneItem>
        <MilestoneItem
          id="2"
          title="2"
          date="Sep 2022"
          description="Started to plan out our very first event (Random Play Dance - Kpop) happening in front of Ontario Hall where we had a surprising turnout, got to meet a lot of you, and officially introduced us to the public!! The support from everyone in that event gave us confidence to build this club (thank uuuuu all 3>) 
          "
        ></MilestoneItem>
        <MilestoneItem
          id="3"
          title="3"
          date="Oct 2022"
          description="Attended our first performance off-campus for the Kpop Club Night, participated in the very first Kingston freestyle battle at Kingston School of Dance, and also started our collaborations with other clubs on campus performing at different locations on campus and co-hosting events to raise funds for social causes.
          "
        ></MilestoneItem>
        <MilestoneItem
          id="4"
          title="4"
          date="Nov 2022"
          description="Officially started to offer recurring classes - 1 choreo class and 1 Kpop class per week! 
          Those Wednesday evenings have always been a motivation boost of the week for all of our executives because of seeing you guys there!          
          "
        ></MilestoneItem>
        <MilestoneItem
          id="5"
          title="5"
          date="Nov 2022"
          description="Won the Awesome Kingston Awards of the month and received a bridging grant. 
          It helped with our initial startup costs in hosting dance tutorials/classes, renting dance studios, running events, and participating in dance battles and competitions.                    
          "
        ></MilestoneItem>
        <MilestoneItem
          id="6"
          title="6"
          date="Mar 2023"
          description="The CCDC 2023 competition roaster attended the Reach Competition on behalf of Queen’s, which is an annual street dance competition among Canadian Universities. We presented a choreography performance of our instructor’s own work with our theme focused on finding our own identities along the journey of creating our club! By initiating this, we wanted to encourage everyone through our actions to follow their passion, keep learning, focus on the progress to really experience it, and be open to opportunities. Together as CCDC, we wish to bring the street dance styled competition element back to Queens after a period of disconnection for a few years. By presenting ourselves at Reach, we reconnected with the dance communities at other institutions and received cheers and support from both dancers of the day and the audience - a forever grateful trial and more to come this year! 

          "
        ></MilestoneItem>
        <MilestoneItem
          id="7"
          title="CCDC RECITAL!"
          date="Apr 2023"
          description="As executives, we were shedding tears watching everyone enjoy dancing and presented such a beautiful performance while the audience was so supportive cheering each dancer on. It made us feel like our dream came true - to build a place where people can just have fun and enjoy dance as a new hobby, a passion, or an expressive art form."
        ></MilestoneItem>
      </div>
    </Section>
  );
};

export default Milestone;
