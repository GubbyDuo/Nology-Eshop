import React from "react";
import styles from "./Home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import getProducts from "../../services/products";
import { useEffect, useParams, useState } from "react";
import CarouselItem from "../../components/CarouselItem/CarouselItem";

const Home = () => {
    const [product, setProduct] = useState("");

    const featuredProducts = [0, 10, 6, 9, 4, 1];

    useEffect(() => {
        getProducts().then((product) => {
            console.log(product);
            setProduct(product);
        });
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className={styles.homePage}>
            <h1>Home</h1>
            <div>
                <Slider className={styles.carousel} {...sliderSettings}>
                    {product &&
                        featuredProducts.map((featProd) => {
                            return (
                                <div className={styles.carouselSlide}>
                                    <CarouselItem
                                        key={product.id}
                                        product={product}
                                        productNo={featProd}
                                    ></CarouselItem>
                                </div>
                            );
                        })}
                    {/* <div className={styles.carouselSlide}>
                        <NavLink to={`/products/${product && product[0].id}`}>
                            <img
                                className={styles.carouselImage}
                                src={product && product[0].image}
                            ></img>
                        </NavLink>
                    </div>
                    <div className={styles.carouselSlide}>
                        <NavLink to={`/products/${product && product[10].id}`}>
                            <img
                                className={styles.carouselImage}
                                src={product[10].image}
                            ></img>
                        </NavLink>
                    </div>
                    <div className={styles.carouselSlide}>
                        <NavLink to={`/products/${product && product[6].id}`}>
                            <img
                                className={styles.carouselImage}
                                src={product[6].image}
                            ></img>
                        </NavLink>
                    </div>
                    <div className={styles.carouselSlide}>
                        <NavLink to={`/products/${product && product[9].id}`}>
                            <img
                                className={styles.carouselImage}
                                src={product[9].image}
                            ></img>
                        </NavLink>
                    </div>
                    <div className={styles.carouselSlide}>
                        <NavLink to={`/products/${product && product[4].id}`}>
                            <img
                                className={styles.carouselImage}
                                src={product[4].image}
                            ></img>
                        </NavLink>
                    </div>
                    <div className={styles.carouselSlide}>
                        <NavLink to={`/products/${product && product[1].id}`}>
                            <img
                                className={styles.carouselImage}
                                src={product[1].image}
                            ></img>
                        </NavLink>
                    </div> */}
                </Slider>
            </div>
        </div>
    );
};

export default Home;
