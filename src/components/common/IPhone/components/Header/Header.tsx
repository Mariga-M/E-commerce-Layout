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
        <Image src={appName} alt="App Name" width={124} height={19.67} />
        {/* <img 
            src={appName} 
            className={appName}
             /> */}
      </section>
      <section className={style.cart}>
        <button>
          {/* <img 
            src="/cart.svg"
             alt="Cart" 
             /> */}
          <Image src="/cart.svg" alt="Cart" width={32} height={32} />
        </button>
      </section>
    </header>
  );
};

Header.defaultProps = {
  appName: "",
};

export default Header;
