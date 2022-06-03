import React from "react";
import style from "./Feed.module.scss";
import Image from "next/image";

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
      </section>
      <section className={style.lowerFeed}>
        <div className={style.outer}>
          <Image src={feedImage} alt="Feed Image" width={382} height={239} />
          <button className={style.label}>{label}</button>
        </div>
        
      </section>
    </main>
  );
};
Feed.defaultProps = {
  feedTitle: "Samurai King Resting",
  feedImage:'',
  label: "Photo of the day",
};

export default Feed;
