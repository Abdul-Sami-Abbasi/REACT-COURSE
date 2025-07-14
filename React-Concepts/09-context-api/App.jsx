import React from "react";
import { UserContext } from "./UserContext";
import Profile from "./Profile";

function App() {
  return (
    <UserContext.Provider value="Sami">
      <h1>Context API Example</h1>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
