import react from 'react';
import priceRanges from '../../../helpers/priceRange';

import style from './FilterBody.module.scss';

interface Category{
    checkbox:string,
    label:string,
}

interface FilterBodyProps{
    categories: Category[];
    categoryTitle:string;
    priceRangeTitle:string;
}

const FilterBody = ({categories, categoryTitle, priceRangeTitle}: FilterBodyProps) => {
    return (
        <section className={style.filterBodyWrapper}>
            <div className={style.category}>
                <div className={style.categoryTitle}> {categoryTitle}</div>
                {
                categories
                 && categories.length >=1 
                ?(
                    categories.map((category)=>(
                        <div key={category.label} className={style.categoryBody}>
                            <img src={category.checkbox} alt=''/>
                            <span className={style.categoryLabel}>{category.label}</span>
                        </div>
                    ))
                ):
                null
                }
            </div>
            <section className={style.priceRange}>
                <div className={style.priceRangeTitle}> {priceRangeTitle}</div>
                {
                    priceRanges
                    && priceRanges.length >=1
                    ?(priceRanges.map((priceRange) =>(
                        <div key={priceRange.label} className={style.priceRangeBody}>
                            <img src={priceRange.checkbox} alt="" />
                            <span className={style.priceRangeLabel}>{priceRange.label}</span>
                        </div>
                    ))
                    ):null
                }
            </section>
        </section>
    );
};
FilterBody.defaultProps={
    categoryTitle:'Category',
    priceRangeTitle:'Price Range',
}

export default FilterBody;