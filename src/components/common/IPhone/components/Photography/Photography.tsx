import React from "react";
import style from "./Photography.module.scss";

interface Photo {
  image: string;
  //   add: string;
  category: string;
  label: string;
  price: string;
}

interface PhotographyProps {
  title: string;
  premium: boolean;
  photos: Photo[];
}

const Photography = ({ title, premium, photos }: PhotographyProps) => {
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
                <img src={photo.image} alt="Photograph" />
                {/* <span>{photo.add}</span> */}
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
