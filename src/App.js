import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SideBar from './Pages/Dashboard/Index';
import config from './Config';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import DashboardIndex from './Pages/Dashboard/Index';
import Layout from './Components/Layout/Layout';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
        <Route path={`${config.appurl}`} element={<Layout />}>
          <Route exact index element={<DashboardIndex />} /> 
          <Route path="search" element={<DashboardIndex />} />
          <Route path="book" element={<DashboardIndex />} />
          <Route path="bookmark" element={<DashboardIndex />} />
          <Route path="octagon" element={<DashboardIndex />} />
        </Route>
          <Route
            path="*"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
