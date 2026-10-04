import { Link, useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 900,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Headphones",
    price: 80,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Backpack",
    price: 50,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 70,
    category: "Electronics",
  },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="page">
      <h1>{product.name}</h1>

      <h2>${product.price}</h2>

      <p>Category: {product.category}</p>

      <button>Add to Cart</button>

      <br />
      <br />

      <Link to="/products">Back to Products</Link>
    </div>
  );
}

export default ProductDetails;
