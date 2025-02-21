// this file control all the function  in the products_controller and export to products_route

const Products = require("../model/product");

const getAllProducts = async (req, resp, next) => {
  // this route will provide all of the products.
  let products;
  //   here we will use async and await.
  // below code means it find Product Schema which is available in mongoose.

  try {
    products = await Products.find();
  } catch (err) {
    console.log(err);
  }

  if (!products) {
    return resp.status(404).json({ message: "No Products Found" });
  }
  return resp.status(200).json({ products });
};

const getById = async (req, resp, next) => {
  let products;
  const id = req.params.id;

  try {
    products = await Products.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!products) {
    return resp.status(404).json({ message: "No Product Found" });
  } else {
    return resp.status(200).json({ products });
  }
};

const addProducts = async (req, resp, next) => {
  // In addProducts it contain Product schema as a instance.
  let products;

  // createing destructuring object so that we can use with help of req.body.
  const { name, author, description, price, available, image } = req.body;
  try {
    products = new Products({
      // create new instance of product
      name,
      author,
      description,
      price,
      available,
      image,
    });
    // Now to save for save we use metod in moongose
    await products.save();
  } catch (err) {
    console.log(err);
  }
  // NOw Check Validation
  if (!products) {
    return resp.status(404).json({ message: "Unable to Add" });
  }
  // if it is true.
  return resp.status(200).json({ products });
};

const updateProducts = async (req, resp, next) => {
  let products;
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;

  try {
    // id se lege konsa data aur hume usme kya update karna h like wo pass karunga name,author,description etc.
    products = await Products.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    products = await products.save();
  } catch (err) {
    console.log(err);
  }
  // validation
  if (!products) {
    return resp.status(404).json({ message: "Unable to Update by this ID" });
  }
  return resp.status(200).json({ products });
};

const deleteProduct = async (req, resp, next) => {
  let products;
  let id = req.params.id;
  try {
    products = await Products.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  //validation
  if (!products) {
    return resp.status(404).json({ message: "Unable to delete by ID" });
  }
  return resp.status(200).json({ message: " Product deleted successfully" });
};
exports.getAllProducts = getAllProducts;
exports.addProducts = addProducts;
exports.getById = getById;
exports.updateProducts = updateProducts;
exports.deleteProduct = deleteProduct;
