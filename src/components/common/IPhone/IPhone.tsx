import React from "react";
import style from "./IPhone.module.scss";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Add from "./components/Add";
import Description from "./components/Description";
import MoreInfo from "./components/MoreInfo";
import Photography from "./components/Photography";
import photos from "./helpers/photo";
import images from "./helpers/image";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

const IPhone = () => {
  return (
    <article className={style.wrapper}>
      <Header appName="/name.svg" />
      <Feed feedImage="/dog.svg" />
      <div className={style.desktopMoreDescription}>
        <div className={style.desktopDescription}>
          <Description />
        </div>  
        <div className={style.desktopMore}>
          <MoreInfo images={images} />
        </div>
      </div>
      <Photography premium photos={photos} />
      <Footer />           
    </article>
  );
};

export default IPhone;
