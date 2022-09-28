import React from "react";

interface IProps {
  show: boolean;
  children?: React.ReactNode;
}

const SideBar = ({ show, children }: IProps) => {
  return (
    <div
      className={`border shadow w-96 h-screen fixed top-0  bg-slate-200 p-3 duration-500 transition-all  ${
        show ? "right-0" : "-right-full"
      } `}
    >
      {children}
    </div>
  );
};

export default SideBar;
