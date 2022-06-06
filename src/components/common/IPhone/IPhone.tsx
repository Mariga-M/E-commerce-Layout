import React from "react";
import style from "./IPhone.module.scss";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Add from "./components/Add";
import Description from "./components/Description";
import MoreInfo from "./components/MoreInfo";
import Photography from "./components/Photography";
import photos from './helpers/photo';
import images from './helpers/image';

const IPhone = () => {
  return (
    <article className={style.wrapper}>
      <Header appName="/name.svg" />
      <Feed feedImage="/dog.png" />
      <Add />
      <Description />
      <MoreInfo
        images={images}
      />
      <Photography
      premium
      photos={photos} />
    </article>
  );
};

export default IPhone;
