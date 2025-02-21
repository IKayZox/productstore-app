import React, { useEffect, useState } from "react";
import "./Product.css";
// furst we create URL which fetch data and get axios request from backend

// What does Axios do?
/*
Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE .
*/
import axios from "axios";
import Product from "./Product";
// const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
const URL = `/api/products`;

const fetchHandler = async () => {
  return await axios.get(URL).then((resp) => resp.data);
  // data varialbe get all the data it take promise thats why we used then
};
const Products = () => {
  // now i use eseEffect it run after browser render the components and its runs only One's if we provide any value in the array then it ryrun the array and it will redner whole page in the browser.
  console.log("products.js url   ", URL);

  const [products, setProducts] = useState("");
  useEffect(() => {
    fetchHandler().then((data) => setProducts(data.products));
  }, []);
  // console.log(products);
  // products () get the our two products data.
  return (
    <>
      <li>
        <ul>
          {products &&
            products.map((product, i) => (
              <li key={i}>
                {/* here we get our product component * className used for*/}
                <Product product={product} />
              </li>
            ))}
        </ul>
      </li>
    </>
  );
};
export default Products;
// 1:25
