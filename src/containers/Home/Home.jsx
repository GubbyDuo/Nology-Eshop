import React from "react";
import styles from "./Home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "../../components/CarouselItem/CarouselItem";

const Home = (props) => {
    // const [product, setProduct] = useState("");
    console.log(props);
    const featuredProducts = [0, 10, 6, 9, 4, 1];

    const { product } = props;

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
                {props.product[0] ? (
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
                    </Slider>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default Home;
