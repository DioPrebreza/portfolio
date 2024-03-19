import React from "react";
import NavSearch from "../components/NavSearch";

const Results = () => {
  return (
    <div>
      <NavSearch />
      <div class="container ml-auto mr-auto flex justify-center">
        <div class="bg-black">left</div>
        <div class="bg-grey">right</div>
      </div>
    </div>
  );
};

export default Results;
