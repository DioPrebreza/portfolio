import React, { useState } from "react";

const QuestionTabs = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div class="w-5/6" onClick={() => setIsActive(!isActive)}>
      <div id="divider" class="w-full h-[1px] my-2 bg-gray-200" />
      <div className="flex flex-row justify-between">
        <p class="font-medium">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class={
            isActive
              ? "w-6 h-6  origin-center transition ease-in rotate-180"
              : "transition ease-in w-6 h-6"
          }
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div
        className={`transition-all duration-300 ${
          isActive ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionTabs;
