import Section from "./Section";
import values from "../assets/values.jpg";

const Values = () => {
  return (
    <>
      {/* ------ Values ------- */}
      <Section divider="true" className="">
        <div className="flex items-center justify-center w-full lg:pr-8 lg:w-1/2">
          <div className="">
            <img
              src={values}
              width="500"
              className={"object-cover"}
              alt="Dance Doodle"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-ful lg:w-1/2">
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <h1 className="w-[400px] text-[28px] pt-10 font-bold">
                Shared Values & Commitment
              </h1>
            </div>
            <div className="py-5 text-base md:pl-20 lg:pl-20 text-gray-500">
              <ul className="list-disc">
                <li className="pb-4">
                  Equity, Diversity & Inclusion (EDI) Awareness
                </li>
                <li>
                  Zero-Tolerance Policy towards Any forms of discrimination,
                  sexual harassment, or racism
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2"></div>
      </Section>
    </>
  );
};
export default Values;
