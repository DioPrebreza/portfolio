import React from "react";

import { Link, useLocation } from "react-router-dom";

import Button from "./UI/Button";

import classes from "./NavSearch.module.css";

const NavSearch = () => {
  const location = useLocation();

  if (location.pathname === "/results") {
    return (
      <div className="w-full h-full flex flex-row justify-between bg-gray-50">
        <div class="w-3/4">
          <div className={`${classes.searchContainer} "flex"`}>
            <div className="flex flex-row w-full">
              <div className="image w-[300px] mt-6 mb-8 ml-8">
                <img
                  src={require("../assets/images/google-logo.png")}
                  alt="google-logo"
                  className="w-full"
                />
              </div>
              <div className="w-[700px] h-12 my-auto ml-10 search-bar border border-border-light-bg rounded-full flex content-center justify-between flex-wrap">
                <div className="flex">
                  <div className="ml-4">
                    <p class="text-lg pb-[2px]">
                      dionis prebreza about and projects
                    </p>
                  </div>
                </div>
                <div class="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mt-[3.5px] mr-4 cursor-not-allowed"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-4 mt-[3.5px] cursor-not-allowed"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="w-5 h-5 mr-4 mt-[3.5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row flex-wrap content-end justify-end mt-auto mb-auto">
          <div style={{ marginTop: "5px" }} class="w-28 text-lg">
            <Link to="/">Resume here</Link>
          </div>

          <div
            style={{ width: "2px", height: "40px" }}
            class="bg-button-text mr-2"
          ></div>

          <div className="mr-4">
            <Button color={"bg-button-blue-bg"} text={"text-button-text-light"}>
              <div style={{ marginBottom: "2px" }}>
                <Link to="/"> Contact </Link>
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-row flex-wrap content-end justify-end">
      <div style={{ marginTop: "5px" }} class="w-28 text-lg">
        <Link to="/">Resume here</Link>
      </div>

      <div
        style={{ width: "2px", height: "40px" }}
        class="bg-button-text mr-2"
      ></div>

      <div className="mr-4">
        <Button color={"bg-button-blue-bg"} text={"text-button-text-light"}>
          <div style={{ marginBottom: "2px" }}>
            <Link to="/"> Contact </Link>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default NavSearch;
