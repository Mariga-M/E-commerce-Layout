import React from "react";
import style from "./Feed.module.scss";
import Add from "../Add";

interface FeedProps {
  feedTitle: string;
  feedImage: string;
  label: string;
}

const Feed = ({ feedTitle,feedImage, label }: FeedProps) => {
  return (
    <main className={style.feedWrapper}>
      <section className={style.upperFeed}>
        <span className={style.feedTitle}>{feedTitle} </span>
        <Add className={style.desktopAddToCart} />
      </section>
      <section className={style.lowerFeed}>
        <div className={style.outer}>
          <img src={feedImage} alt="Feed Image"  />
          <button className={style.label}>{label}</button>
        </div>
        
      </section>
      <Add className={style.mobileAddToCart} />
    </main>
  );
};
Feed.defaultProps = {
  feedTitle: "Samurai King Resting",
  feedImage:'',
  label: "Photo of the day",
};

export default Feed;
