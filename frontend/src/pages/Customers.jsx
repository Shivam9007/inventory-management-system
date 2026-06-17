import { useEffect, useState } from "react";
import API from "../services/api";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

 const fetchCustomers = async () => {
  try {
    const res = await API.get("/customers");
    console.log("Customers Data:", res.data);
    setCustomers(res.data);
  } catch (error) {
    console.error("Customers Error:", error);
  }
};

  return (
    <div>
      <h1>👥 Customers</h1>

      <table width="100%" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;