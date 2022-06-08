import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={style.footer}>
      <img src="/vector1.svg" alt="" />
      <span> 1 </span>
      <span> 2 </span>
      <span className={style.number}> 3 </span>
      <span> 4 </span>
      <img src="/vector2.svg" alt="" />
    </section>
  );
};

export default Footer;
