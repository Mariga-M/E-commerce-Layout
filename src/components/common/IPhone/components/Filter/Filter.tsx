import React from "react";
import categories from "../../helpers/category";
import priceRanges from "../../helpers/priceRange";
import style from "./filter.module.scss";
import FilterBody from "./FilterBody";
import FilterFooter from "./FilterFooter";
import FilterHeader from "./FilterHeader";

const Filter = () => {
  return (
    <section className={style.wrapper}>
      <FilterHeader />
      
        <FilterBody 
          categories={categories} 
          priceRanges={priceRanges} />
      
      <FilterFooter />
    </section>
  );
};

export default Filter;
