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
        console.log("Inside UseEffect");
        const wrapper = async () => {
            const myProducts = await getProducts();
            setProducts(myProducts);
        };
        wrapper();
    }, []);

    console.log("First Declaration");
    return (
        <div className="App">
            <CartContext.Provider value={[cart, setCart]}>
                <PageWrapper>
                    <BrowserRouter>
                        <Nav />
                        <Routes>
                            <Route
                                path="/"
                                element={<Home product={products} />}
                            ></Route>
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
        </div>
    );
}

export default App;
