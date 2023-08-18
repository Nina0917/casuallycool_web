import React from "react";

const Section = (props) => {
  return (
    <div className="">
      {props.divider && <hr class="h-px mx-32 my-20 bg-gray-200 border-0"></hr>}
      {props.title && (
        <div class="flex items-center justify-center">
          <h2 className="pb-20 max-w-2xl my-3 text-[28px] font-extrabold text-gray-800">
            {props.title}
          </h2>
        </div>
      )}

      <div
        className={`container px-32 mx-auto flex flex-wrap ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Section;
