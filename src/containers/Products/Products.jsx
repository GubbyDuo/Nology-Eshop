import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.scss";

const Products = (props) => {
    const { products } = props;
    return (
        <div className={styles.productPage}>
            <h1>Products</h1>
            <div className={styles.grid}>
                {products.map((product) => {
                    console.log(product);
                    return <ProductCard key={product.id} data={product} />;
                })}
            </div>
        </div>
    );
};

export default Products;
