import React from "react";
import "../SidebarRight/Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AndroidIcon from "@mui/icons-material/Android";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import { useContext } from "react";
import { DarkmodeContext } from "../../Context/DarkmodeContext";

import { Link } from "react-router-dom";
const Sidebar = () => {
  const { dispatch } = useContext(DarkmodeContext);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">saikiran</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">main</p>

            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashborad</span>
              </li>
            </Link>

            <p className="title"></p>
            <Link to="/Lists" style={{ textDecoration: "none" }}>
              <li>
                <PersonIcon className="icon" />

                <span>User</span>
              </li>
            </Link>

            <Link to="/Single" style={{ textDecoration: "none" }}>
              <li>
                <ProductionQuantityLimitsIcon className="icon" />
                <span>Products</span>
              </li>
            </Link>

            <li>
              <BorderAllIcon className="icon" />
              <span>oders</span>
            </li>
            <li>
              <DeliveryDiningIcon className="icon" />
              <span>delivery</span>
            </li>
            <p className="title">Useful</p>
            <li>
              <QueryStatsIcon className="icon" />
              <span>stats</span>
            </li>
            <li>
              <NotificationsActiveIcon className="icon" />
              <span>Notification</span>
            </li>
            <p className="title">service</p>
            <li>
              <AndroidIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <RssFeedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className="icon" />
              <span>settings</span>
            </li>
            <p className="title">user</p>
            <li>
              <AccountCircleIcon className="icon" />
              <span>profie</span>
            </li>
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <div
            className="coloroption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="coloroption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
