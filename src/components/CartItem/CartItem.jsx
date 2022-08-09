import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProductById } from "../../services/products";
import styles from "./CartItem.module.scss";

const CartItem = (props) => {
    const { data } = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(data.id).then((item) => setProduct(item));
    }, []);
    return (
        <div className={styles.cartPage}>
            <div className={styles.itemGrid}>
                <div className={styles.imageSection}>
                    <img className={styles.image} src={product.image} alt="" />
                </div>
                <div className={styles.textAreaParent}>
                    <div className={styles.textArea}>
                        {product.name} ({product.pitch})
                    </div>
                    <div className={styles.textArea}>${product.price}</div>
                    <div className={styles.textArea}>{data.qty}</div>
                    <div className={styles.textArea}>
                        ${(product.price * data.qty).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
