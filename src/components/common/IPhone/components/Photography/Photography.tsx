import React, { useState } from "react";
import Add from "../Add/Add";
import Filter from "../Filter";
import FilterBody from "../Filter/FilterBody";
import style from "./Photography.module.scss";

interface Photo {
  image: string;
  category: string;
  label: string;
  price: string;
  bestSeller:boolean;
}

interface PhotographyProps {
  title: string;
  premium: boolean;
  photos: Photo[];
}


const Photography = ({
  title,
  premium,
  photos,
}: 
PhotographyProps) => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
   setShow(current => !current)
  }

  return (
    <section className={style.photoFeed}>
      <header className={style.header}>
        <section className={style.headerLeft}>
          <span className={style.title}>{title}</span>
          <img src="/separator.svg" alt="separator" />
          {premium ? (
            <span className={style.premium}> Premium Photos </span>
          ) : null}
        </section>
        <section className={style.headerRight}>
          <button onClick={handleClick}>
            <img src="/filter.svg" alt="filter" />
          </button>
          {show &&
            <Filter />
          }
          <section className={style.sortBy}>
            <img src='/arrow.svg' alt="" />
            <span> Sort By </span>
            <span> Price </span>
            <img src='/arrowup.svg' alt='' />
          </section>
        </section>
      </header>
      <section className={style.photo}>
        <div className={style.filterBody}>
          <FilterBody categories={[]} priceRanges={[]} />
        </div>
        <div className={style.photoDetailsContainer}>
        {photos && photos.length >= 1
          ? photos.map((photo) => (
              <div key={photo.label} className={style.photoDetails}>
                <div className={style.add}>
                  {photo.bestSeller ? (
                    <span className={style.best}> Best Seller </span>
                  ) : null}

                  <img src={photo.image} alt="Photograph" />

                  <Add className={style.addCart} />
                </div>
                <span className={style.category}>{photo.category}</span>
                <span className={style.label}>{photo.label}</span>
                <span className={style.price}>{photo.price}</span>
              </div>
            ))
          : null}
          </div>
      </section>
    </section>
  );
};

Photography.defaultProps = {
  title: "Photography",
  premium: false,
};

export default Photography;
