import React from "react";
import styles from "./CarouselItem.module.scss";
import { NavLink } from "react-router-dom";

const CarouselItem = (props) => {
    const { product, productNo } = props;
    return (
        <NavLink
            to={`/products/${product[productNo].id}`}
            className={styles.carouselSlide}
        >
            <img
                className={styles.carouselImage}
                src={product[productNo].image}
            ></img>
        </NavLink>
    );
};

export default CarouselItem;
