import React from "react";
import "../styles/dashboard.css";

function Dashboard({ user }) {
  return (
    <div className="dashboard">
      <h2>Welcome, {user.email}</h2>

      <div className="cards">

        <div className="card">
          <h3>AI Monitoring</h3>
          <p>Status: Active</p>
        </div>

        <div className="card">
          <h3>IoT Lab Devices</h3>
          <p>Connected Devices: 5</p>
        </div>

        <div className="card">
          <h3>Code Evaluation</h3>
          <p>Last Score: 92%</p>
        </div>

        <div className="card">
          <h3>Behavior Alerts</h3>
          <p>No suspicious activity</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;