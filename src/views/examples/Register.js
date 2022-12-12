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
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../../components/Navbars/AuthNavbar";
import AuthFooter from "../../components/Footers/AuthFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const Register = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [params, setParams] = React.useState({
    username: "",
    password: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  const fetchData = async () => {
    const response = await fetch(window.create_user, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: params.username,
        password: params.password,
      }),
    });

    const data = await response.json();
    if (data.status === "success") {
      console.log(data);
      console.log("perfect");
      toast.error("Registration Successful!", {
        position: "top-center",
        autoClose: redirectesto(),
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.log(data);
      console.log("failure");
    }
  };



 
   
    
    
  function redirectesto() {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }





  const submitted = (e) => {
    e.preventDefault();
    fetchData();
  };
  useEffect(() => {
    if (auth === "true") {
      navigate("/admin");
    }
  });
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
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>

        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="6" md="8">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-4">
                    <small>Sign up with</small>
                  </div>
                  <div className="text-center">
                    <Button
                      className="btn-neutral btn-icon mr-4"
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
                    <small>Or sign up with credentials</small>
                  </div>
                  <Form role="form" onSubmit={submitted}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                        <Input placeholder="Name" type="text" onChange={inputEvent} name="username" value={params.username} />
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
                          name="password"
                          onChange={inputEvent}
                          value={params.password}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="text-muted font-italic">
                      <small>
                        password strength:{" "}
                        <span className="text-success font-weight-700">
                          strong
                        </span>
                      </small>
                    </div>
                    <Row className="my-4">
                      <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckRegister"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister"
                          >
                            <span className="text-muted">
                              I agree with the{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="submit">
                        Create account
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
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

export default Register;
