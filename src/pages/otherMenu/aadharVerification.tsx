import { Container, Col, Row, Form, Modal } from "react-bootstrap"
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
const aadharVerification = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const [display, setDisplay] = React.useState(false);
    const handleDisplay = () => {
        setDisplay(true);
        setShow(true);
    };
    const [selectedOption, setSelectedOption] = useState("S/o");
    const handleOptionClick = (event) => { setSelectedOption(event.target.textContent); };
    useEffect(() => { require("bootstrap/dist/js/bootstrap.bundle.min.js"); }, []);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <><div className="pageMainWrap innerpage">
            <Head>
                <title>AadharVerification</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div>
                <div className="mainWrapper">
                    <div className="otherMenuwrapperInner1">
                        <div className="pageTableContainer">
                            <div className="acknowledgement">
                                <button className="active partyDetails">Aadhar Verification</button>
                            </div>
                            <Row className="my-3">
                                <Col lg={2} md={2} xs={2}></Col>
                                <Col lg={6} md={8} xs={8} className="mb-3">
                                    <Form.Floating>
                                        <Form.Control
                                            id="floatingInputCustom"
                                            type="text"
                                            placeholder="Aadhar Number"
                                            name="aadharnumber"
                                            value="xxxx xxxx 9875"
                                        />
                                        <label htmlFor="floatingInputCustom">
                                            Aadhar No.
                                        </label>
                                    </Form.Floating>
                                </Col>
                                <Col lg={1} md={4} xs={4} className="mb-3">
                                    <button className="bluebuttonclass"
                                        onClick={handleDisplay}> Verify </button>
                                </Col>
                                <Col lg={1} md={4} xs={4} className="mb-3">
                                    <button className="whitebuttonclass" onClick={handleClose}> Clear </button>
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        <div>
                            <Container>
                                <Row className="mb-3 mt-5">
                                    <Col lg={1} md={1} xs={1}></Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <h6>Aadhar Details</h6>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} md={1} xs={1}></Col>
                                    <Col lg={8} md={9} xs={9}>
                                        <Row>
                                            <Col lg={8} md={8} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Name"
                                                        name="name"
                                                        value={show ? "Krishna" : null}
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        Name
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                <div className="input-group">
                                                    <button className="btn btn-outline-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#4D4D4D", borderRadius: "12px 0px 0px 12px", borderColor: "#6096BA", backgroundColor: "#F6F9FB" }} >
                                                        {selectedOption}
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" onClick={handleOptionClick}>S/o</a></li>
                                                        <li><a className="dropdown-item" onClick={handleOptionClick}>D/o</a></li>
                                                        <li><a className="dropdown-item" onClick={handleOptionClick}>W/o</a></li>
                                                    </ul>
                                                    <Form.Floating>
                                                        <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" className="form-control" value={show ? "Subbarao" : null}/>
                                                        <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                                                    </Form.Floating>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col lg={8} md={8} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Phone Number"
                                                        name="phone number"
                                                        value={show ? "+91 98*******2" : null}
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        Phone Number
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Age"
                                                        name="age"
                                                        value={show ? "28" : null}
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        Age
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={11} md={11} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Address"
                                                        name="address"
                                                        value={show ? "Falt 120, Block C, Anjali Residency, Rajahmundry" : null}
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        Address
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={3} md={4} xs={4}>
                                    <div className="partydetails-image-box">
                                        { show ? <Image width={200} height={165} src="/images/krishna.svg" /> : null}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        {/* <Modal show={show} onHide={handleClose} className="modal modal-lg">
                            <Modal.Header closeButton>
                                <Modal.Title>Aadhar Verification</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    <Container>
                                        <Row>
                                            <Col className="text-center">
                                                KYC not completed for Aadhar no. xxxx xxxx 6789.<br />
                                                Would you like to be redirected to eKYC?
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 justify-content-center pageNextBtn">
                                            <Col lg={2} md={2} xs={2}>
                                                <button className="bluebuttonclass" onClick={handleClose}>
                                                    Yes
                                                </button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Modal.Body>
                        </Modal> */}
                    </div>
                </div>
            </div>
        </div></>
    );
};
export default aadharVerification;
