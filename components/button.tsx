import type { NextPage } from "next";

export type ButtonType = {
  className?: string;
};

const Button: NextPage<ButtonType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[15.5px] px-[57.5px] bg-black h-[76px] w-[351px] rounded-8xs flex flex-row items-center justify-center box-border ${className}`}
    >
      <div className="h-[45px] w-[237px] relative text-11xl font-poppins text-white text-center inline-block shrink-0">
        Create Account
      </div>
    </button>
  );
};

export default Button;
