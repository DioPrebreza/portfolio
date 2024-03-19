import React, { useState } from "react";

import NavSearch from "../components/NavSearch";
import InfoCard from "../components/UI/InfoCard";
import Lightbox from "../components/Lightbox";

const images = [
  { src: require("../assets/images/google-logo.png") },
  { src: require("../assets/images/placeholder-person.jpg") },
];

const Results = () => {
  const [openPics, setOpenPics] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const handleOpenLightbox = (openState) => {
    setOpenPics(openState);
  };

  const handleIndexChange = (imgIndex) => {
    setCurrentIndex(imgIndex);
  };

  const ageDescription = (
    <>
      <p class="text-2xl">{new Date().getFullYear() - 2002} years</p>
      <p>August 9, 2002</p>
    </>
  );

  return (
    <>
      <Lightbox
        open={openPics}
        currentImageIndex={currentImageIndex}
        changeState={handleOpenLightbox}
        changeIndex={handleIndexChange}
      />
      <NavSearch />
      <div class="container mx-auto mt-4">
        <p class="mb-4 text-sm text-gray-400">
          About as many results as a portfolio needs ( 0.
          {Math.floor(Math.random() * 10)}0 seconds )
        </p>
        <div class="flex flex-row">
          <div id="pictures" class="flex flex-row  rounded-2xl overflow-hidden">
            <div className="h-[300px]">
              <img
                src={require("../assets/images/placeholder-person.jpg")}
                alt="person"
                class="h-full"
                onClick={() => {
                  setCurrentIndex(0);
                  setOpenPics(true);
                }}
              />
            </div>
            <div className="h-[300px]">
              <img
                src={require("../assets/images/placeholder-person.jpg")}
                alt="person"
                class="h-1/2"
                onClick={() => {
                  setCurrentIndex(1);
                  setOpenPics(true);
                }}
              />
              <img
                src={require("../assets/images/placeholder-person.jpg")}
                alt="person"
                class="h-1/2"
                onClick={() => {
                  setCurrentIndex(2);
                  setOpenPics(true);
                }}
              />
            </div>
          </div>
          <div id="topInformation" class="ml-10">
            <div class="flex flex-row">
              <InfoCard title="Age" description={ageDescription} />
              <InfoCard title="Nationality" description="Albanian" />
              <InfoCard title="Hometown" description="Prishtina, Kosova" />
            </div>
            <div class="mt-4">
              <InfoCard
                title="Specialty"
                description="Javascript and related frameworks/libraries (ReactJS, React Native, NextJS)"
              />
            </div>
          </div>
        </div>
        <div id="divider" class="w-4/6 h-[1px] my-6 bg-gray-200"></div>
        <div class="w-full flex justify-between">
          <div class="w-1/2">results</div>
          <div id="divider" class="w-[1px] h-12 bg-gray-200"></div>
          <div class="w-1/2">
            <div class="ml-4">
              <p class="text-xl font-semibold">About</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
