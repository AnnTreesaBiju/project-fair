import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ProjectPis from '../Asseset/project1.png'
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'

function ProjectCard() {
    // to modal show
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* card */}
            <Card className='shadow mb-5 btn' style={{ width: "25rem" }} onClick={handleShow}>
                <Card.Img variant="top" src={ProjectPis} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>

                </Card.Body>
            </Card>
            {/* modal */}
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12} md={6}>
                            <img style={{ height: "250px" }} className='img-fluid' src={ProjectPis} alt="" />
                        </Col>
                        <Col sm={12} md={6}>
                            <h4 className='mb-3'>Project Titel</h4>
                            <p><span className='fw-bolder'> Project Overview : </span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati maiores voluptates natus totam eligendi sint temporibus fugiat, eaque error vitae quisquam corporis voluptatum minima officiis ipsam quasi quod consequatur.
                            </p>
                            <p>Languge Used : <span className='fw-bolder'>HTML, CSS , React</span></p>
                        </Col>
                    </Row>
                    <div className='mt-5'>
                        <a href="https://github.com/AnnTreesaBiju/media-player" target='_blank' className='btn me-3'><i class="fa-brands fa-github fa-2x"></i></a>
                        <a href="https://media-player-crud.netlify.app/" target='_blank' className='btn me-3'><i class="fa-solid fa-link fa-2x"></i></a>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ProjectCard