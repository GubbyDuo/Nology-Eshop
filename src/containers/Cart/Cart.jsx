import React from "react";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
            <div className={styles.cartTitle}>
                <h1>Cart</h1>
                <div className={styles.cardSubtitle}>
                    <div className={styles.subtitleStyle}>Name</div>
                    <div className={styles.subtitleStyle}>Price</div>
                    <div className={styles.subtitleStyle}>Quantity</div>
                    <div className={styles.subtitleStyle}>Total</div>
                </div>

                {cart.map((item) => {
                    return <CartItem data={item} />;
                })}
            </div>
        </div>
    );
};

export default Cart;
