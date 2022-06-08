import React from "react";
import style from "./Add.module.scss";

interface AddProps {
  label?: string;
  className?: string;
}

const Add = ({ label, className }: AddProps) => {
  return (
    <>
      <button className={`${style.add} ${className}`}>{label}</button>
    </>
  );
};

Add.defaultProps = {
  label: "ADD TO CART",
  className: "",
};

export default Add;
