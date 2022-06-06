import React from "react";
import images from "../../helpers/image";
import style from "./MoreInfo.module.scss";

interface Image{
    image:string,
}

interface MoreInfoProps{
    moreInfoTitle: string,
    images:Image[];
    details:string,
    pixelSize: number,
    mbSize:number,
}

const MoreInfo = ({
    moreInfoTitle,
    images,
    details,
    pixelSize,
    mbSize

} : MoreInfoProps) => {
    return(
        <section className={style.moreInfoWrapper}>
            <div className={style.title}>
                <span>{moreInfoTitle}</span>
            </div>
            <div className={style.image}>
            {
                images 
                && images.length >=1
                ?(
                    images.map((image) => (
                        <div key={image.image} className={style.img}>
                            <img src={image.image} alt="Image" />
                        </div>
                    ))
                )
                :null
            }
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
    image:'',    
    details:'Details',
    pixelSize: "Size: 1020 x 1020 pixel",
    mbSize: "Size: 15 mb",
}

export default MoreInfo;