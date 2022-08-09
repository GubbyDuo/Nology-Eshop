import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={styles.navBar}>
            <span className={styles.navBarSplit}>
                <span className={styles.navBarCentered}>
                    <NavLink className={styles.navLink} to="/">
                        Home
                    </NavLink>
                    <NavLink className={styles.navLink} to="/products">
                        Products
                    </NavLink>
                </span>
                <span className={styles.navBarCart}>
                    <NavLink className={styles.navLink} to="/cart">
                        Cart
                    </NavLink>
                </span>
            </span>
        </nav>
    );
};

export default Nav;
