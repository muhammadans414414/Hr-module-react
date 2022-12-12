import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/loginSlice";
import { setToken } from "../../store/authTokenSlice";
import { setCurrentUser } from "../../store/currentUserSlice";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../../components/Navbars/AuthNavbar";

import AuthFooter from "../../components/Footers/AuthFooter";
const Login = () => {
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params, setParams] = React.useState({
    email: "",
    password: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  const fetchData = async () => {
    const response = await fetch(window.authentication, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: params.email,
        password: params.password,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      console.log(data);
      dispatch(setToken(data.token));
      dispatch(login("true"));
      dispatch(setCurrentUser(data.user));
      navigate("/admin");
    } else {
      console.log(data);
      console.log("failure");
    }
  };

  const submitted = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    if (auth === "true") {
      navigate("/admin");
    }
  });
  React.useEffect(() => {
    if (auth === "false") {
    
    toast.error("Please Login !", {
      position: "top-center",
      autoClose: redirectesto(),
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
  }
  },[]);

  function redirectesto() {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 2560 100"
            
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>

        <Container className="mt--8 pb-5 ">
          
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon">
                        <img
                          alt="..."
                          src={
                            require("../../assets/img/icons/common/github.svg")
                              .default
                          }
                        />
                      </span>
                      <span className="btn-inner--text">Github</span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon">
                        <img
                          alt="..."
                          src={
                            require("../../assets/img/icons/common/google.svg")
                              .default
                          }
                        />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <Form role="form" onSubmit={submitted}>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                        <Input
                          placeholder="email"
                          type="email"
                          autoComplete="new-email"
                          onChange={inputEvent}
                          value={params.email}
                          name="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                        <Input
                          placeholder="Password"
                          type="password"
                          autoComplete="new-password"
                          onChange={inputEvent}
                          value={params.password}
                          name="password"
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="primary" type="submit">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      
      <AuthFooter />
      <ToastContainer
        position="top-center"
        autoClose={2000}
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

export default Login;
