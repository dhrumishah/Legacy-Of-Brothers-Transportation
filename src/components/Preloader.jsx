import { ImSpinner3 } from "react-icons/im";

const Preloader = () => {
  return (
    <div className="h-screen w-full bg-black fixed z-[100] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center ">
      <ImSpinner3 className="text-5xl animate-spin text-white" />
    </div>
  );
};

export default Preloader;
