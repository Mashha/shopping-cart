import React from "react";
import "./dashboard.css";
import Home from "../../pages/Home";

function Dashboard({ user, isAuthenticated }) {
  return isAuthenticated ? (
    <div className="dashboard">
      <h1>
        Hello to your dashboard <span>{user?.name}</span>
      </h1>
      <p>This is where all the info about the user will go!</p>
    </div>
  ) : (
    <Home />
  );
}

export default Dashboard;
