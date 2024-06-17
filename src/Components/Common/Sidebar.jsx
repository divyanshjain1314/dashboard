import React from "react";
import config from "../../Config";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../assets/css/sideBar.css";

const Sidebar = () => {
    const exactHomepath = useLocation()
  return (
    <React.Fragment>
      <div className="sidebar-container border-end border-1 border-secondary">
        <div className="d-flex flex-column align-items-center h-100 justify-content-between">
          <div className="mt-3">
            <i className="bi bi-chevron-double-right text-white"></i>
          </div>
          {/* Links */}
          <div className="mt-auto mb-auto d-flex flex-column justify-content-center align-items-center  w-100">
            <div className="text-center w-100">
              <Link
              
                to={`${config.appurl}`}
                className={`d-block py-3 text-center w-100 ${exactHomepath.pathname == config.appurl && "active"}`}
              >
                <i className="bi bi-house text-white "></i>
              </Link>
            </div>
            <div className="text-center w-100">
              <NavLink
                to={`${config.appurl}/search`}
                className="d-block py-3 text-center w-100 icon-with-border"
              >
                <i className="bi bi-search text-white "></i>
                  </NavLink>
            </div>
            <div className="text-center w-100">
              <NavLink
                to={`${config.appurl}/book`}
                className="d-block py-3 text-center w-100 icon-with-border"
              >
                <i className="bi bi-book text-white "></i>
              </NavLink>
            </div>
            <div className="text-center w-100">
              <NavLink
                to={`${config.appurl}/bookmark`}
                className="d-block py-3 text-center w-100 icon-with-border"
              >
                <i className="bi bi-bookmark text-white "></i>
              </NavLink>
            </div>
            <div className="text-center w-100">
              <NavLink
                to={`${config.appurl}/octagon`}
                className="d-block py-3 text-center w-100 icon-with-border"
              >
                <i className="bi bi-octagon text-white "></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
