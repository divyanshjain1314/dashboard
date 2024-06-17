import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';

const Layout = () => {
  return (
    <React.Fragment>
      <div >
     <div className='container-main' >
     <Sidebar />
      <main >
        <Outlet />
      </main>
     </div>
        </div>
    </React.Fragment>
  );
};

export default Layout;
