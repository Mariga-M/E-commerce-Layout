import React from "react";
import Image from "next/image";
import style from "./Header.module.scss";

interface HeaderProps {
  appName: string;
}

const Header = ({ appName }: HeaderProps) => {
  return (
    <header className={style.header}>
      <section className={style.name}>
        <img src={appName} alt="App Name"  />
      </section>
      <section className={style.cart}>
        <button onClick={()=> alert('Cart')}>          
          <img src="/cart.svg" alt="Cart"  />
        </button>
      </section>
    </header>
  );
};

Header.defaultProps = {
  appName: "",
};

export default Header;
