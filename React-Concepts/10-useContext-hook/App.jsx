// App.jsx
import React from "react";
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";

function App() {
  const user = { name: "Sami", role: "Admin" };

  return (
    <UserContext.Provider value={user}>
      <h1>App Root</h1>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;
