import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#6d7bc9">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Once Again
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/decks" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Decks</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cards" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">
                Cards
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tags" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">
                Tags
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/dev-about"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">Desenvolvedor</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Keep it simple!
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
