import React from "react";
import categories from "../../helpers/category";
import style from "./filter.module.scss";
import FilterBody from "./FilterBody";
import FilterFooter from "./FilterFooter";
import FilterHeader from "./FilterHeader";


const Filter = () => {
  return (
    <section className={style.wrapper}>
      <FilterHeader />
      <FilterBody categories={categories} />
      <FilterFooter />
    </section>
  );
};

export default Filter;
