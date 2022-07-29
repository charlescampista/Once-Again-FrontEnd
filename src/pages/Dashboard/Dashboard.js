import React, { Fragment } from "react";
import Sidebar from "../../components/Sidebar";
export default function Dashboard() {
  return (
    <Fragment>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <div>Dashboard</div>
        </div>
      </div>
    </Fragment>
  );
}
