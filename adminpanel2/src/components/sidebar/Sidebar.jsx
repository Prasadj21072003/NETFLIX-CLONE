import React from "react";
import "./sidebar.scss";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import EmailIcon from "@mui/icons-material/Email";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ListIcon from "@mui/icons-material/List";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <h3>Dashboard</h3>
        <ul>
          <Link to="/" className="link">
            <li className="dashboardli">
              <HomeIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <li className="dashboardli">
            <AnalyticsIcon className="icon" />
            <span>Analytics</span>
          </li>
          <li className="dashboardli">
            <TrendingUpIcon className="icon" />
            <span>Sales</span>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <h3>Quick Menu</h3>
        <ul>
          <Link to="/users" className="link">
            <li className="dashboardli">
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" className="link">
            <li className="dashboardli">
              <SlideshowIcon className="icon" />
              <span>Movies</span>
            </li>
          </Link>
          <Link to="/Movielist" className="link">
            <li className="dashboardli">
              <ListIcon className="icon" />
              <span>Movielists</span>
            </li>
          </Link>
          <li className="dashboardli">
            <EqualizerIcon className="icon" />
            <span>Reports</span>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <h3>Notification</h3>
        <ul>
          <li className="dashboardli">
            <EmailIcon className="icon" />
            <span>Mail</span>
          </li>
          <li className="dashboardli">
            <QuestionAnswerIcon className="icon" />
            <span>Feedback</span>
          </li>
          <li className="dashboardli">
            <MessageIcon className="icon" />
            <span>Messages</span>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <h3>Staff</h3>
        <ul>
          <li className="dashboardli">
            <WorkIcon className="icon" />
            <span>Manage</span>
          </li>
          <li className="dashboardli">
            <AnalyticsIcon className="icon" />
            <span>Analytics</span>
          </li>
          <li className="dashboardli">
            <ReportIcon className="icon" />
            <span>Reports</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
