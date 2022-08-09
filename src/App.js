import "./App.css";
import PageWrapper from "./containers/PageWrapper/PageWrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import getProducts from "./services/products";
import { createContext, useContext, useEffect, useState } from "react";
import Products from "./containers/Products/Products";
import ProductPage from "./containers/ProductPage/ProductPage";
import Cart from "./containers/Cart/Cart";
import Home from "./containers/Home/Home";

export const CartContext = createContext();

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        wrapper();
    }, []);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            <PageWrapper>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/products"
                            element={<Products products={products} />}
                        ></Route>
                        <Route
                            path="/products/:productId"
                            element={<ProductPage />}
                        ></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </BrowserRouter>
            </PageWrapper>
        </CartContext.Provider>
    );
}

export default App;
