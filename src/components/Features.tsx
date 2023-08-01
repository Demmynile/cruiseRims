type featureProps = {
  title: string;
  subtitle: string;
};

const Features = ({ title, subtitle }: featureProps) => {
  return (
    <div className="w-[404px] h-[450px]  bg-black rounded-lg flex flex-col space-y-9 items-center justify-center p-8 mt-9">
      <div className="text-center mt-4 ml-[-1.2rem] xl:ml-[-2rem] lg:ml-0">
        <span className="text-secondary text-xl border-solid border-b-2 py-2 border-[#F9A602]">
          {title}
        </span>
      </div>
      <div className="text-center sm:w-[270px] sm:h-auto sm:ml-[-1.2rem]">
        <span className="text-sm font-poppins text-secondary">{subtitle}</span>
      </div>
    </div>
  );
};

export default Features;
