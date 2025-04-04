import React from "react";
import { Outlet } from "react-router";
import Button from "../../snippets/Button/Button";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Button />
      <Outlet />
    </div>
  );
};

export default Dashboard;
