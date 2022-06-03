import React from "react";
import style from "./MoreInfo.module.scss";

interface MoreInfoProps{
    moreInfoTitle: string,
    image1:string,
    image2:string,
    image3:string,
    details:string,
    pixelSize: number,
    mbSize:number,
}

const MoreInfo = ({
    moreInfoTitle,
    image1,
    image2,
    image3,
    details,
    pixelSize,
    mbSize

} : MoreInfoProps) => {
    return(
        <section className={style.moreInfoWrapper}>
            <div className={style.title}>
                <span>{moreInfoTitle}</span>
            </div>
            <div className={style.images}>
                <img src={image1} alt="Image" />
                <img src={image2} alt="Image" />
                <img src={image3} alt="Image" />
            </div>
            <div className={style.details}>
                <span className={style.detailsTitle}>{details}</span>
                <div className={style.detailsContent}>
                    <span>{pixelSize}</span>
                    <span>{mbSize}</span>
                </div>
            </div>
        </section>
    )
};

MoreInfo.defaultProps ={
    moreInfoTitle:"People also buy",
    image1:'',
    image2:'',
    image3:'',
    details:'Details',
    pixelSize: "Size: 1020 x 1020 pixel",
    mbSize: "Size: 15 mb",
}

export default MoreInfo;