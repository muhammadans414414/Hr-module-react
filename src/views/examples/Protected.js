import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminFooter from "../../components/Footers/AdminFooter";
import routes from "../../routes";
// reactstrap components
import { Container } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// core components
import Header from "../../components/Headers/Header";
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import UserHeader from "../../components/Headers/UserHeader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  const Component = props.Component;
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (auth === "false") {
    navigate("/login");
    // toast.error("Access Not Allowed !", {
    //   position: "top-center",
    //   autoClose: redirectesto(),
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  }
  },[]);

  function redirectesto() {
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }


  return (
    <>
      <Sidebar
        routes={routes}
        logo={{
          innerLink: "/admin",
          imgSrc: require("../../assets/img/brand/argon-react.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content">
        <AdminNavbar />
        {props.page === "profile" ? <UserHeader /> : <Header />}
        <Container className="mt--7" fluid>
          <Component />
          <AdminFooter />
        </Container>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="light"
      />
    </>
  );
};

export default Protected;
