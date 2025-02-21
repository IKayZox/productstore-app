import { Button } from "@mui/material";
import React from "react";
import "./Product.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  const { _id, name, author, description, price, image } = props.product;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`/api/products/${_id}`)
      .then((resp) => resp.data)
      .then(() => history("/")) // this is temporary solution.
      .then(() => {
        //now to Navigate the data.
        history("/products");
      });
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs: {price}</h2>
      <Button LinkComponent={Link} to={`/products/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};
export default Product;
