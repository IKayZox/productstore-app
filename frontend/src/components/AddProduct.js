import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const history = useNavigate();

  const [input, setInputs] = useState({
    name: "",
    description: "",
    author: "",
    price: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post(`/api/products`, {
        // we have to send data in string thats why
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        avilable: Boolean(input.checked),
      })
      .then((resp) => resp.data); // data (property) represnt in axios
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // it prevent whenever reload the page is send.
    console.log(input);
    sendRequest().then(() => history("/products")); // we call sendrequest after that now push the user's on the products page. for this we import react-router-dom.
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={700}
          alignItems="center"
          alignSelf="center"
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={input.name} // use state me h kyuki by using input can change
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name" //name = "name ye ditto copy hona chaiye jo tumne useState me kiye h."
          />

          <FormLabel>Author</FormLabel>
          <TextField
            value={input.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />

          <FormLabel>Description</FormLabel>
          <TextField
            value={input.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />

          <FormLabel>Price</FormLabel>
          <TextField
            value={input.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <FormLabel>Image</FormLabel>
          <TextField
            value={input.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={input.avilable}
                onChange={() => setChecked(!checked)}
              />
            }
            // baiscally it cheked the opposite value
            label="Available"
            // we give checked = false because we want to true as a dynamically.
          />
          <Button variant="contained" type="submit">
            Add Product
          </Button>
        </Box>
      </form>
    </>
  );
}
// 1:18
