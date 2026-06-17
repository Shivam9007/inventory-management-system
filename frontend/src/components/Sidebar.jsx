function Sidebar({ setPage }) {
  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>🚀 Inventory</h2>

      <button
        onClick={() => setPage("dashboard")}
        style={btnStyle}
      >
        Dashboard
      </button>

      <button
        onClick={() => setPage("products")}
        style={btnStyle}
      >
        Products
      </button>

      <button
        onClick={() => setPage("customers")}
        style={btnStyle}
      >
        Customers
      </button>

      <button
        onClick={() => setPage("orders")}
        style={btnStyle}
      >
        Orders
      </button>
    </div>
  );
}

const btnStyle = {
  width: "100%",
  marginTop: "10px",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Sidebar;