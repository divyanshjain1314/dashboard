import React from "react";
import config from "../../Config";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/sideBar.css";


const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar-container">
        <div className="d-flex flex-column align-items-center h-100 justify-content-between">
          <div className="mt-3">
            <i className="bi bi-chevron-double-right text-white"></i>
          </div>
          {/* Links */}
          <div className="mt-auto mb-auto d-flex flex-column justify-content-center align-items-center  w-100">
            <div className="text-center py-3">
              <NavLink to={`${config.appurl}`}>
                <i class="bi bi-house text-white "></i>
              </NavLink>
            </div>
            <div className="text-center w-100">
              <NavLink to={`${config.appurl}`} className="d-block py-3 text-center icon-with-border w-100">
                <i class="bi bi-house text-white "></i>
              </NavLink>
            </div>
            <div className="text-center py-3">
              <NavLink to={`${config.appurl}`}>
                <i class="bi bi-house text-white "></i>
              </NavLink>
            </div>
            <div className="icon-with-border text-center py-3">
              <NavLink to={`${config.appurl}`}>
                <i class="bi bi-house text-white "></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
