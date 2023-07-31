import React from "react";

type ProductDetailsProps = {
  title: string;
  subtitle: string;
  image: string;
};

const ProductDetails = ({ title, subtitle, image }: ProductDetailsProps) => {
  return (
    <div className="">
      <span className="text-primary text-[3rem] border-solid border-b-2 py-2 border-[#F9A602]">
        {title}
      </span>
      <div className="w-full flex flex-col items-center justify-center gap-y-2 md:flex-col md:gap-y-3  lg:flex-row lg:gap-x-4 xl:flex-row xl:gap-x-5 mt-9">
        <div className=" w-[200px] h-[280px] xl:w-[606px] xl:h-[505px] lg:w-[606px] lg:h-[505px]">
          <img src={image} alt="" />
        </div>
        <div className="  mt-[4rem] xl:self-start lg:self-start">
          <span className="text-md font-poppins text-center p-3">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
