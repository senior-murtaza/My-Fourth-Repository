import { useState } from "react";
import { Link } from "react-router-dom";

const productData = [
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

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page">
      <h1>Products</h1>

      <input
        className="search"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>All</option>
        <option>Electronics</option>
        <option>Accessories</option>
      </select>

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>

            <p>${product.price}</p>

            <p>{product.category}</p>

            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
