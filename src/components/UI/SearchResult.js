import React from "react";

const SearchResult = ({ linkTitle, linkDescription }) => {
  return (
    <div class="w-3/5 mb-6">
      <p class="text-xl text-link-text hover:underline underline-offset-1 cursor-pointer">
        {linkTitle}
      </p>
      <p>{linkDescription}</p>
    </div>
  );
};

export default SearchResult;
