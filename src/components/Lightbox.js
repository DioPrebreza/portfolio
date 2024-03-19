import React from "react";

const images = [
  {
    id: 1,
    src: require("../assets/images/image1.jpg"),
  },
  {
    id: 2,
    src: require("../assets/images/image2.jpg"),
  },
  {
    id: 3,
    src: require("../assets/images/image3.png"),
  },
];

const Lightbox = ({ open, currentImageIndex, changeState, changeIndex }) => {
  //   const images = [
  //     "../assets/images/image1.jpg",
  //     "../assets/images/image2.jpg",
  //     "../assets/images/image3.png",
  //   ];

  const handleBackgroundStateChange = (e) => {
    if (e.currentTarget !== e.target) return;
    changeState(false);
  };

  const handleExitStateChange = (e) => {
    changeState(false);
  };

  const handleIndexUp = () => {
    if (currentImageIndex < 2) {
      changeIndex(currentImageIndex + 1);
    }
  };

  const handleIndexDown = () => {
    if (currentImageIndex > 0) {
      changeIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      {open && (
        <div
          class="absolute w-full h-full bg-gray-200/70 align-middle grid place-items-center"
          onClick={handleBackgroundStateChange}
        >
          <div
            className="absolute -right-0 -top-0 h-10 w-10 bg-gray-500"
            onClick={handleExitStateChange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div
            className="absolute -right-0 h-10 w-10 bg-gray-500"
            onClick={handleIndexUp}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div
            className="absolute -left-0 h-10 w-10 bg-gray-500"
            onClick={handleIndexDown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div class="w-1/2 bg-white py-10">
            {currentImageIndex !== null && (
              <div>
                <img
                  src={images[currentImageIndex].src}
                  alt="slide 1"
                  class="mx-auto"
                />
              </div>
            )}
            {/* <img
              src={require("../assets/images/google-logo.png")}
              alt="slide 1"
            /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Lightbox;
