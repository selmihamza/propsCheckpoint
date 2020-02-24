import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductTable from "./productTable";
import * as serviceWorker from "./serviceWorker";

let products = [
  { name: "i phone", price: "2000", category: "Electronics" },
  { name: "samsung s 10", price: "1500", category: "Electronics" },
  { name: "huawei y9", price: "1000", category: "Electronics" },
  { name: "pull", price: "100", category: "Clothes" },
  { name: "jeans", price: "200", category: "Clothes" },
  { name: "veste", price: "300", category: "Clothes" }
];

ReactDOM.render(
  <ProductTable products={products} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
