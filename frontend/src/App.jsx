import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      <div className="sidebar">
        <h2>📦 Inventory</h2>

        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("customers")}>Customers</button>
        <button onClick={() => setPage("orders")}>Orders</button>
      </div>

      <div className="content">
        {page === "dashboard" && <Dashboard />}
        {page === "products" && <Products />}
        {page === "customers" && <Customers />}
        {page === "orders" && <Orders />}
      </div>
    </div>
  );
}

export default App;