// Dashboard.jsx
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Your role is: {user.role}</p>
    </div>
  );
}

export default Dashboard;
