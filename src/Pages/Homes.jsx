import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link} from 'react-router-dom';

function Homes() {
    return (
        <>
            {/* landing */}
            <div className='container-fluid rounded bg-success' style={{ width: "100%", height: "100vh" }}>
                <Row className='p-5 ps-5 align-items-center'>
                    <Col sm={12} md={6}>
                        <h4 style={{ fontSize: "80px",color:"rgb(53, 50, 75)"}} className='fw-bolder mb-5'><i class="fa-brands fa-stack-overflow fa-beat me-3"></i>
                            {" "}
                            Project Fair...</h4>
                        <p style={{textAlign:"justify",color: "white"  }} className='fs-5 fw-bolder me-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laboriosam dolore dicta quaerat placeat similique minus, consequatur commodi ut sapiente rem sit quo molestiae magni praesentium itaque fuga eius suscipit.</p>
                        <button className='btn btn-primary mt-2'>Start To Explore <i class="fa-solid fa-right-to-bracket ms-2 fa-beat"></i></button>
                    </Col>
                    <Col sm={12} md={6}>
                        <img style={{ marginTop: "100px" }} className='w-75 ms-5' src="https://www.inboundcy.com/wp-content/uploads/design-services_re_5v95-inboundcy.com_.svg" alt="" />
                    </Col>
                </Row>
            </div>
            {/* all projects */}
            <div className='mt-5'>
                <h1 style={{color:"rgb(42, 39, 76)"}} className='text-center mb-5'>Expoler Our Projects </h1>
                {/* to automatic scroll :-marquee*/}
               <marquee scrollAmount={30}>
                 <Row>
                    <Col sm={12} md={6} lg={4}>
                        <ProjectCard/>
                    </Col>
                </Row>
                </marquee>
                <div className='text-center mt-5'> <Link to={"/projects"}>View More Projects</Link></div>
            </div>
        </>
    )
}

export default Homes