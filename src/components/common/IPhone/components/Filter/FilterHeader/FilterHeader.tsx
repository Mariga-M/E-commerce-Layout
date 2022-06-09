import React from "react";
import style from "./FilterHeader.module.scss";

const FilterHeader = () => {
  return (
    <header className={style.header}>
      <section className={style.headerLeft}>
        <span> Filter</span>
      </section>
      <section className={style.headerRight}>
        <button onClick={() => alert("Cancel")}>
          <img src="/cancel.svg" alt="cancel" />
        </button>
      </section>
    </header>
  );
};

export default FilterHeader;
