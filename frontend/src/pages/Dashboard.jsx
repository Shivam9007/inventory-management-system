function Dashboard() {
  return (
    <div>
      <h1>📊 Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div className="card">
          <h3>Total Products</h3>
          <h1>120</h1>
        </div>

        <div className="card">
          <h3>Total Customers</h3>
          <h1>50</h1>
        </div>

        <div className="card">
          <h3>Total Orders</h3>
          <h1>80</h1>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <h1>₹5,00,000</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;