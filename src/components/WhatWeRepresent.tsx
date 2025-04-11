import VisionMission from './VisionMission';

const WhatWeRepresent = () => {
  return (
    <div className="bg-[#030517] h-full w-full py-20 px-5">
      <div className="container mx-auto flex flex-col items-center justify-center w-full h-full">
        <div className="text-[#ffffff] text-center mb-10 self-center">
          <div className="mb-10">
            <h2 className="font-popppins text-3xl lg:font-bold lg:text-[44.95px] mb-2 ">
              What we Represent
            </h2>
            <p className="font-popppins font-normal text-[#BBBBBB] text-lg lg:text-[24px] mb-5">
              Our relentless pursuit of excellence is the driving force <br />{' '}
              behind our success
            </p>
          </div>
          <p className="font-popppins font-normal text-[#D2D2D2] text-center text-lg lg:text-[24px] mb-5">
            Exellece isn't a goal, it's our DNA; our relentless pursuit of
            exellence is the driving force <br /> behind our success. Exellence
            is our legacy, and we are proud to carry it forward. Watch <br />{' '}
            the video to see how we are innovating to keep businesses on top of
            thier games.
          </p>
        </div>
        <VisionMission />
      </div>
    </div>
  );
};

export default WhatWeRepresent;
