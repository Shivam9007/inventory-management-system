import { useEffect, useState } from "react";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

 useEffect(() => {
  console.log("Products page loaded");

  API.get("/products")
    .then((res) => {
      console.log("Products Data:", res.data);
      setProducts(res.data);
    })
    .catch((err) => {
      console.error("Products Error:", err);
    });
}, []);

  return (
    <div>
      <h1>📦 Products</h1>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.price}</td>
              <td>{p.stock_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;