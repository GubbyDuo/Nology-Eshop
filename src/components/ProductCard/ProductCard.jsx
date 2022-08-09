import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ data }) => {
    return (
        <div className={styles.cardBorder} key={data.id}>
            <img className={styles.image} src={data.image} alt="" />
            <h4 className={styles.textMargin}>{data.name}</h4>
            <p className={styles.textMargin}>${data.price}</p>
            <p className={styles.textMargin}>In Stock: {data.stock}</p>
            <NavLink className={styles.bottomText} to={`/products/${data.id}`}>
                View Product
            </NavLink>
        </div>
    );
};

export default ProductCard;
