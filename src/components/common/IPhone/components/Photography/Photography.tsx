import React from "react";
import Add from "../Add/Add";
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
  // button:string;
}

const Photography = ({
  title,
  premium,
  photos,
}: // button
PhotographyProps) => {
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
          <img src="/filter.svg" alt="filter" />
        </section>
      </header>
      <section className={style.photo}>
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
      </section>
    </section>
  );
};

Photography.defaultProps = {
  title: "Photography",
  premium: false,
};

export default Photography;
