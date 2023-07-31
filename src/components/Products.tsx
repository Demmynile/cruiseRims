import { useState } from "react";
import CustomModal from "./CustomModal/CustomModal";
import ProductDetails from "./ProductDetails";

type ProductProps = {
  title: string;
  description: string;
  imageA: string;
  imageB: string;
  imageC: string;
};

const ProductsComp = ({
  title,
  description,
  imageA,
  imageB,
  imageC,
}: ProductProps) => {
  const [openProductModal, setOpenProductModal] = useState(false);

  const setProductModal = () => {
    setOpenProductModal(true);
  };

  const setProductModalClose = () => {
    setOpenProductModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-y-2 items-center justify-center gap-x-2 w-full md:w-full lg:flex-row xl:flex-row">
        <div className="sm:justify-center sm:items-center md:justify-center md:items-center sm:gap-y-[1rem] md:gap-y-[4rem] sm:w-full md:w-full bg-primary lg:w-[500px] lg:h-[595px] xl:w-[500px] xl:h-[595px] flex flex-col justify-start items-start gap-y-[6rem] p-4  ">
          <div className="mt-[6rem]">
            <span className="font-poppins text-secondary font-bold text-md text-left sm:text-center md:text-center ">
              {title}
            </span>
          </div>
          <div className="mt-[6rem] md:w-[266px] md:h-[170px] sm:w-[266px] sm:h-[170px]">
            <span className="font-poppins text-secondary text-xs text-left sm:text-center md:text-center">
              {description}
            </span>
          </div>
          <div>
            <button
              type="submit"
              onClick={setProductModal}
              className="px-[9rem] py-[0.4rem] sm:px-[3rem] md:px-[3rem]   rounded-md bg-none border-2 text-secondary border-tertiary"
            >
              <span className="font-poppins font-extrabold text-xs ">
                DETAILS
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className=" sm:w-[300px] sm:h-[290px]  md:w-[300px] md:h-[290px] lg:w-[500px] lg:h-[595px] xl:w-[500px] xl:h-[595px] "
            src={imageA}
            alt=""
          />
        </div>
        <div>
          <img
            className="sm:w-[300px] sm:h-[290px]  md:w-[300px] md:h-[290px] lg:w-[500px] lg:h-[595px] xl:w-[500px] xl:h-[595px]"
            src={imageB}
            alt=""
          />
        </div>
        <div>
          <img
            className="sm:w-[300px] sm:h-[290px] md:w-[300px] md:h-[290px]  lg:w-[500px] lg:h-[595px] xl:w-[500px] xl:h-[595px]"
            src={imageC}
            alt=""
          />
        </div>
      </div>
      {/* Modal Intialization */}
      <CustomModal
        modalState={openProductModal}
        closeModal={setProductModalClose}
        title={title}
      >
        <ProductDetails title={title} subtitle={description} image={imageA} />
      </CustomModal>
    </>
  );
};

export default ProductsComp;