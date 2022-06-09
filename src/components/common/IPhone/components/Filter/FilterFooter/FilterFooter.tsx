import React from "react";
import style from "./FilterFooter.module.scss";

interface FilterFooterProps {
  clear: string;
  save: string;
}

const FilterFooter = ({ clear, save }: FilterFooterProps) => {
  return (
    <footer className={style.footer}>
      <button className={style.clear} onClick={() => alert("Clear")}>
        {clear}
      </button>

      <button className={style.save} onClick={() => alert("Save")}>
        {save}
      </button>
    </footer>
  );
};

FilterFooter.defaultProps = {
  clear: "CLEAR",
  save: "SAVE",
};
export default FilterFooter;
