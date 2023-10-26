import React from 'react'
// redirection
import { Link} from 'react-router-dom';
// theme
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div style={{ height: "300px", width: "100%" }} className='d-flex bg-success flex-column justify-content-center align-items-center mt-5'>
    <div className='d-flex  justify-content-evenly w-100 '>
        <div style={{ width: "400px",color:"rgb(16, 13, 41)" }} className=" fw-bolder website f d-flex flex-column text-primary">
            <h4 style={{color:"rgb(42, 39, 76)"}}> <i className="fa-brands fa-stack-overflow ms-1"></i>
                {" "}
                Project Fair</h4>
            <h6 style={{color:"white"}}>Designed and built with all the love in the world by my self with the help of my contributors.</h6>
            <h6 style={{color:"white"}}>Code licensed AnnTreesa Biju docs CC BY 3.0.</h6>
            <p style={{color:"white"}}>Currently v1.0.0</p>
        </div>
        <div className="link d-flex flex-column mb-3">
            <h4 style={{color:"rgb(42, 39, 76)"}}> Links</h4>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Home Page
            </Link>
            <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>Login Page
            </Link>
            <Link to={"/register"} style={{ textDecoration: "none", color: "white" }}>Registraction Page
            </Link>
            <Link to={"/projects"} style={{ textDecoration: "none", color: "white" }}>All Projects
            </Link>
            <Link to={"/dashbord"} style={{ textDecoration: "none", color: "white" }}>Dashboard
            </Link>

        </div>
        <div className="guide  d-flex flex-column ">
            <h4 style={{color:"rgb(42, 39, 76)"}}> Guide</h4>
            <Link to={"https://react-bootstrap.netlify.app/"} style={{ textDecoration: "none", color: "white" }}>React
            </Link>
            <Link to={"/homhttps://react-bootstrap.netlify.app/"} style={{ textDecoration: "none", color: "white" }}>React Bootstrap
            </Link>
            <Link to={"https://react-bootstrap.netlify.app/"} style={{ textDecoration: "none", color: "white" }}>Routing
            </Link>
            <Link to={"https://react-bootstrap.netlify.app/"} style={{ textDecoration: "none", color: "white" }}>Bootstrap
            </Link>
        </div>
        <div className="guide d-flex flex-column">
            <h4 style={{color:"rgb(42, 39, 76)"}}>Contact Us</h4>
            <div className=" d-flex">
                <Form.Control className='me-3' type="text" placeholder="Enter Your mail" />
                <Button variant="primary">Submit</Button>
            </div>
            <div className="d-flex  mt-3">
                <Link to={'https://fontawesome.com/icons/twitter?f=brands&s=solid'} className="fs-4 me-5" style={{ color: "white", textDecoration: "none" }}>
                <i className="fa-brands fa-twitter"></i>
                    {" "}
                </Link>
                <Link to={'https://fontawesome.com/icons/twitter?f=brands&s=solid'} className="fs-4 me-5 " style={{ color: "white", textDecoration: "none" }}>
                <i className="fa-brands fa-github"></i>
                    { " " }
                </Link>
                <Link to={'https://fontawesome.com/icons/twitter?f=brands&s=solid'} className="fs-4 me-5" style={{ color: "white", textDecoration: "none" }}>
                <i className="fa-brands fa-facebook"></i>
                    { " " }
                </Link>
            </div>
        </div>
    </div>
    <p style={{color:"rgb(42, 39, 76)"}}>Copyright © 2023 AnnTreesa Biju. Built with React.</p>
</div>
  )
}

export default Footer