import React from "react";
import style from "./Description.module.scss";

interface DescriptionProps {
  descriptionTitle: string;
  descriptionContent:string,
}

const Description = ({
  descriptionTitle,
  descriptionContent,
}: DescriptionProps) => {
  return (
    <article className={style.description}>
      <section className={style.descriptionTitle}>
        <span> {descriptionTitle} </span>
      </section>
      <section className={style.descriptionContent}>
        <span>{descriptionContent}</span>
        {/* <p>
          So how did the classical Latin become so Incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of Cicero
          &gt s De Finibus in order to provide placeholder text to mockup
          various fonts for specimen book.
        </p> */}
      </section>
    </article>
  );
};

Description.defaultProps = {
  descriptionTitle: "About the Samurai King Resting",
  descriptionContent:"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.",
};

export default Description;
