import React from "react";

type qualitiesProps = {
  title: string;
  subtitle: string;
  image: string;
};

const Qualities = ({ title, subtitle, image }: qualitiesProps) => {
  return (
    <div className="bg-primary max-w-9xl h-[650px] mt-9 mb-4 mx-auto flex flex-col items-center space-x-3 md:flex-col md:h-[650px]  lg:flex-row lg:h-auto xl:flex-row xl:h-auto">
      <div className="p-4 sm:self-start">
        <img
          className="w-[290px] h-[230px] lg:w-[412px] lg:h-[298px] xl:w-[412px] xl:h-[298px]"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-[4rem] md:space-y-6 lg:space-y-3 xl:space-y-3">
        <div className="self-center ml-4 w-[250px] h-[36px] lg:self-start  lg:w-[479px] lg:h-[36px] xl:w-[520px] xl:h-[36px] xl:self-start">
          <span className="text-secondary font-bold text-2xl lg:border-solid lg:border-b-2 lg:py-2 lg:border-[#F9A602] xl:border-solid xl:border-b-2 xl:py-2 xl:border-[#F9A602]">
            {title}
          </span>
        </div>
        <br />
        <div className="w-[300px] h-[156px] ml-[2rem] md:mt-[5rem] lg:ml-0 lg:w-[672px] lg:h-[156px] xl:w-[672px] xl:h-[156px] xl:ml-0  p-4">
          <span className="text-secondary font-normal text-sm text-left">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
