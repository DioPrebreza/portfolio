import React from "react";

const Button = ({ children, color, text }) => {
  return (
    <>
      <button
        type="button"
        class={`inline-block rounded ${color} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal ${text} border border-transparent hover:border-border-light-bg`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
