import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import AdminLayout from "./layouts/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/views/examples/Login";
import Register from "../src/views/examples/Register";
import Icons from "./views/examples/Icons";
import Maps from "./views/examples/Maps";
import Tables from "./views/examples/Tables";
import Profile from "./views/examples/Profile";
import Protected from "./views/examples/Protected";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<AdminLayout />} />
        <Route path="/admin" element={<Protected Component={AdminLayout} />} />
        <Route path="/icons" element={<Protected Component={Icons} />} />
        <Route path="/maps" element={<Protected Component={Maps} />} />
        <Route path="/user-profile" element={<Protected Component={Profile} page="profile" />} />
        <Route path="/tables" element={<Protected Component={Tables} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
