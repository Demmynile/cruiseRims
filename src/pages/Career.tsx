import React from "react";
import Hero from "../components/Hero";

const Career = () => {
  return (
    <div>
      {/* Hero && Navigation */}
      <Hero
        title="JOIN THE CRUISERIMS TEAM"
        subtitle="DRIVE YOUR CAREER TO NEW HEIGHTS"
        imageLabel="bg-bgCareer"
      />

      <div className="bg-black max-w-7xl mx-auto rounded-md h-[214px] flex flex-col items-center justify-center gap-y-4 mt-4">
        <div>
          <span className="font-montserrat text-xl text-secondary font-extrabold">
            WHY WORK WITH US?
          </span>
        </div>
        <div className="w-[1133px] h-[63px] text-center">
          <span className="text-sm text-secondary font-montserrat">
            At Cruiserims, we believe that our success lies in the dedication
            and talent of our team members. As a fast-growing rim manufacturing
            company based in the USA, we offer an exciting and dynamic work
            environment where innovation and creativity thrive. Join us, and
            together, we'll shape the future of the automotive industry.
          </span>
        </div>
      </div>

      <div className="bg-black max-w-7xl mx-auto rounded-md h-[438px] flex flex-col items-center justify-center gap-y-[6rem] mt-4 mb-5">
        <div className="mt-[-7rem]">
          <span className="font-montserrat text-xl text-secondary font-extrabold">
            OUR VALUES
          </span>
        </div>
        <div className="w-[1133px] h-[63px] text-center flex flex-col justify-start items-start gap-y-3">
          <span className="text-xs text-secondary font-poppins">
            At the core of our company culture are values that drive us to excel
            in everything we do:
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Passion:{" "}
            </span>
            reflects in the quality and craftsmanship of our products.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs font-extrabold font-poppins">
              Innovation:{" "}
            </span>
            Embracing new ideas and staying ahead of the curve is what fuels our
            innovative spirit.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Teamwork:{" "}
            </span>
            Collaboration is key to our success. We work together as a
            close-knit team to achieve our goals.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Sustainability:{" "}
            </span>
            We are committed to eco-friendly practices, ensuring our impact on
            the environment remains positive.
          </span>

          <span className="text-secondary text-xs   font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Quality:{" "}
            </span>
            Excellence is non-negotiable. Our commitment to quality sets us
            apart in the industry.
          </span>
        </div>
      </div>

      <div className="bg-black max-w-7xl mx-auto rounded-md h-[438px] flex flex-col items-center justify-center gap-y-[6rem] mt-4 mb-5">
        <div className="mt=[-7rem]">
          <span className="font-montserrat text-xl text-secondary font-extrabold">
            WHAT WE OFFER
          </span>
        </div>
        <div className="w-[1133px] h-[63px] text-center flex flex-col justify-start items-start gap-y-3">
          <span className="text-xs text-secondary font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Professional Growth:
            </span>{" "}
            We invest in our employees' development, offering opportunities for
            skill enhancement and career advancement.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Passion:{" "}
            </span>
            reflects in the quality and craftsmanship of our products.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs font-extrabold font-poppins">
              Innovation:{" "}
            </span>
            Embracing new ideas and staying ahead of the curve is what fuels our
            innovative spirit.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Teamwork:{" "}
            </span>
            Collaboration is key to our success. We work together as a
            close-knit team to achieve our goals.
          </span>

          <span className="text-secondary text-xs  font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Sustainability:{" "}
            </span>
            We are committed to eco-friendly practices, ensuring our impact on
            the environment remains positive.
          </span>

          <span className="text-secondary text-xs   font-poppins">
            <span className="text-secondary text-xs  font-extrabold font-poppins">
              Quality:{" "}
            </span>
            Excellence is non-negotiable. Our commitment to quality sets us
            apart in the industry.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Career;
