import React from "react";
import "./DisplayButton.scss";
import { IoIosCode } from "react-icons/io";

export default function DisplayButton({ children }: any) {
  return (
    <>
      <div className="container-btn m-4">
        {children}

        <div className="flex justify-end w-full">
          <div className="copy flex justify-center items-center">
            <IoIosCode size={24} />
          </div>
        </div>
      </div>
    </>
  );
}
