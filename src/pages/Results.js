import React, { useState } from "react";

import NavSearch from "../components/NavSearch";
import InfoCard from "../components/UI/InfoCard";
import Lightbox from "../components/Lightbox";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SearchResult from "../components/UI/SearchResult";
import QuestionTabs from "../components/UI/QuestionTabs";

const questions = [
  {
    id: 1,
    question: "question question question",
    answer: "answer answer answer",
  },
  {
    id: 2,
    question: "question question question",
    answer: "answer answer answer",
  },
  {
    id: 3,
    question: "question question question",
    answer: "answer answer answer",
  },
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

  const handleQuestionClick = (e) => {};

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
        <div id="divider" class="w-4/6 h-[1px] my-6 bg-gray-200 "></div>
        <div class="w-full flex justify-between">
          <div class="w-1/2">
            <SearchResult
              linkTitle={"long title ooga booga monki"}
              linkDescription={
                "description about how i am in pain and need a new job holy fuck please work portfolio"
              }
            />
            <SearchResult
              linkTitle={"long title ooga booga monki"}
              linkDescription={
                "description about how i am in pain and need a new job holy fuck please work portfolio"
              }
            />
            <div class="my-8">
              <p class="text-2xl font-semibold">People mostly ask</p>
              {questions.map((curQuestion) => {
                return (
                  <QuestionTabs
                    key={curQuestion.id}
                    question={curQuestion.question}
                    answer={curQuestion.answer}
                    onClick={handleQuestionClick}
                  />
                );
              })}
            </div>
            <SearchResult
              linkTitle={"long title ooga booga monki"}
              linkDescription={
                "description about how i am in pain and need a new job holy fuck please work portfolio"
              }
            />
            <SearchResult
              linkTitle={"long title ooga booga monki"}
              linkDescription={
                "description about how i am in pain and need a new job holy fuck please work portfolio"
              }
            />
            <SearchResult
              linkTitle={"long title ooga booga monki"}
              linkDescription={
                "description about how i am in pain and need a new job holy fuck please work portfolio"
              }
            />
            <SearchResult
              linkTitle={"long title ooga booga monki"}
              linkDescription={
                "description about how i am in pain and need a new job holy fuck please work portfolio"
              }
            />
          </div>
          <div id="divider" class="w-[1px] h-96 bg-gray-200"></div>
          <div class="w-1/2 mb-10">
            <div class="ml-4 w-1/2">
              <p class="text-xl font-semibold">About</p>
              <p class="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div id="divider" class="w-full h-[1px] my-6 bg-gray-200"></div>
              <p class="font-semibold">Occupation:</p>
              <p class="mb-2">Web/Mobile Developer</p>
              <p class="font-semibold">Education:</p>
              <p class="mb-2">
                Currently pursuing Bachelor's Degree at UBT University
              </p>
              <p class="font-semibold">Hobbies:</p>
              <p class="mb-2">
                Gaming, Learning guitar, Listening to music, Reading Books,
                Watching Youtube and Twitch, and maybe sometimes doing anything
                else when I'm bored :)
              </p>
              <p class="font-semibold">Interests:</p>
              <p class="mb-2">
                Keeping up with all the new technology in Website and Mobile app
                development, Keeping up with all outer space news, also often
                learning more about a subject that interests me at the time
              </p>
              <div id="divider" class="w-full h-[1px] my-6 bg-gray-200"></div>
              <p class="mb-4">Social Media Links:</p>
              <div class="flex flex-row justify-between">
                <a href="https://www.linkedin.com/in/dionis-prebreza">
                  <img
                    src={require("../assets/images/linkedin.png")}
                    class="w-14 rounded-full"
                    alt="linkedin"
                  />
                </a>
                <a href="https://github.com/DioPrebreza">
                  <img
                    src={require("../assets/images/github.png")}
                    class="w-14 rounded-full"
                    alt="github"
                  />
                </a>
                <a href="https://www.instagram.com/dionis.prebreza/">
                  <img
                    src={require("../assets/images/instagram.png")}
                    class="w-14 rounded-full"
                    alt="instagram"
                  />
                </a>
                <a href="https://www.facebook.com/denikleo.prebreza/">
                  <img
                    src={require("../assets/images/facebook.png")}
                    class="w-14 rounded-full"
                    alt="facebook"
                  />
                </a>
              </div>
              <div id="divider" class="w-full h-[1px] my-6 bg-gray-200"></div>
              <p>For my professional skills you are interested in:</p>
              <Link to="/">THE PAGE WHERE SKILLS AT</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Results;
