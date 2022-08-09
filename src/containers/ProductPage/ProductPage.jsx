import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductPage.module.scss";
import { useEffect } from "react";
import { getProductById } from "../../services/products";
import { useContext } from "react";
import { CartContext } from "../../App";

// const findProductById = (products, id) => {
//     const product = products.find((myProduct) => {
//         return myProduct.id === id;
//     });
//     return product;
// };

const ProductPage = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    let { productId } = useParams();
    console.log(productId);

    useEffect(() => {
        getProductById(productId).then((product) => {
            setProduct(product);
        });
    }, []);

    const addToCart = () => {
        if (cart.length) {
            const findEntry = cart.find((entry) => {
                return entry.id === productId;
            });
            console.log(findEntry);
            if (findEntry) {
                const removedEntryCart = cart.filter((item) => {
                    return item.id !== productId;
                });
                const newCart = [
                    ...removedEntryCart,
                    {
                        id: productId,
                        qty: findEntry.qty + 1,
                    },
                ];
                setCart(newCart);
            } else {
                setCart([
                    ...cart,
                    {
                        id: productId,
                        qty: 1,
                    },
                ]);
            }
        } else {
            setCart([
                {
                    id: productId,
                    qty: 1,
                },
            ]);
        }
        console.log(cart);
    };

    return (
        <>
            <div className={styles.productPage}>
                <div className={styles.grid}>
                    <div>
                        <img
                            className={styles.image}
                            src={product && product.image}
                            alt=""
                        />
                    </div>
                    <div className={styles.textField}>
                        <h1>
                            {product && product.name} (
                            {product && product.pitch})
                        </h1>
                        <div className={styles.productInfo}>
                            <p>Price: ${product && product.price}</p>
                            <p>In stock: {product && product.stock}</p>
                            <button onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
