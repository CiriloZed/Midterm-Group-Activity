import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./layouts/default";
import DefaultView from "./views/default";
import "./style/fonts.css";
import Products from "./views/products";
import ProductInfo from "./views/product-info";
import Cart from "./views/cart";
import { CartProvider } from "./CartProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
const MainComponent = Layout(DefaultView);
const ProductComponent = Layout(Products);
const ProductInfoComponent = Layout(ProductInfo);
const CartComponent = Layout(Cart);
const router = createBrowserRouter([
  { path: "/", element: <MainComponent /> },
  { path: "/product", element: <ProductComponent /> },
  { path: "/product-info/:productKey", element: <ProductInfoComponent /> },
  { path: "/cart", element: <CartComponent /> },
]);
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
