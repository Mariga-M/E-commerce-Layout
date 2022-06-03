import React from "react";
import style from "./IPhone.module.scss";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Add from "./components/Add";
import Description from "./components/Description";
import MoreInfo from "./components/MoreInfo";

const IPhone = () => {
  return (
    <article className={style.wrapper}>
      <Header appName="/name.svg" />
      <Feed feedImage="/dog.png" />
      <Add />
      <Description />
      <MoreInfo
        image1="/image1.svg"
        image2="/image2.svg"
        image3="/image3.svg"
      />
    </article>
  );
};

export default IPhone;
