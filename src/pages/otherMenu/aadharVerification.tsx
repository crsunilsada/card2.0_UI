import { Container, Col, Row, Form, Button } from "react-bootstrap"
import Head from "next/head";
import Image from "next/image";
import Stepper from '../components/Stepper'
import { useEffect, useState } from "react";
import React from "react";
const aadharVerification = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const [display, setDisplay] = React.useState(false);
    const handleDisplay = () => {
        setDisplay(true);
    };
    const [selectedOption, setSelectedOption] = useState("S/o");
    const handleOptionClick = (event) => { setSelectedOption(event.target.textContent); };
    useEffect(() => { require("bootstrap/dist/js/bootstrap.bundle.min.js"); }, []);
    return (
        <><div className="pageMainWrap innerpage">
            <Head>
                <title>AadharVerification</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div>
                <div className="mainWrapper">
                    <div className="wrapperInner">
                        <div className="pageTableContainer">
                            <div className="acknowledgement">
                                <button className="active partyDetails">Aadhar Verification</button>
                            </div>
                            <div>
                                <Row>
                                    <Col lg={2} md={2} xs={2}></Col>
                                    <Col lg={6} md={6} xs={6} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Aadhar Number"
                                                name="aadharnumber"
                                            />
                                            <label htmlFor="floatingInputCustom">
                                                Aadhar No.
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    {!display && <Col lg={1} md={1} xs={1}>
                                        <button className="bluebuttonclass"
                                            data-bs-toggle="modal" data-bs-target="#aadharVerification"
                                            onClick={handleDisplay}> Verify </button>
                                    </Col>}
                                    {display && <Col lg={1} md={1} xs={1}>
                                        <button className="bluebuttonclass"
                                            data-bs-toggle="modal" data-bs-target="#aadharVerification"
                                            onClick={handleDisplay}> <Image width={20} height={15} src="/images/tick.svg" /> </button>
                                    </Col>}
                                    <Col lg={1} md={1} xs={1}>
                                        <button className="whitebuttonclass" data-bs-dismiss="modal"> Clear </button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <hr />
                        {display && <div>
                            <Container>
                                <Row>
                                    <Row className="mb-3 mt-3">
                                        <Col lg={1} md={1} xs={1}></Col>
                                        <Col lg={8} md={8} xs={8}>
                                            <Row>
                                                <Col className="mb-3">
                                                    <h6>Aadhar Details</h6>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Row className="mb-3">
                                                    <Col lg={7} md={7} xs={7}>
                                                        <Form.Floating>
                                                            <Form.Control
                                                                id="floatingInputCustom"
                                                                type="text"
                                                                placeholder="Name"
                                                            />
                                                            <label htmlFor="floatingInputCustom">
                                                                Name
                                                            </label>
                                                        </Form.Floating>
                                                    </Col>
                                                    <Col lg={4} md={4} xs={4}>
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
                                                                <Form.Control id="floatingInputCustom" type="text" placeholder="Age" className="form-control" />
                                                                <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                                                            </Form.Floating>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col lg={7} md={7} xs={7}>
                                                        <Form.Floating>
                                                            <Form.Control
                                                                id="floatingInputCustom"
                                                                type="text"
                                                                placeholder="Phone Number"
                                                                name="phonenumber"
                                                            />
                                                            <label htmlFor="floatingInputCustom">
                                                                Phone Number
                                                            </label>
                                                        </Form.Floating>
                                                    </Col>
                                                    <Col lg={4} md={4} xs={4}>
                                                        <Form.Floating>
                                                            <Form.Control
                                                                id="floatingInputCustom"
                                                                type="text"
                                                                placeholder="Age"
                                                            />
                                                            <label htmlFor="floatingInputCustom">
                                                                Age
                                                            </label>
                                                        </Form.Floating>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={11} md={11} xs={11}>
                                                        <Form.Floating>
                                                            <Form.Control
                                                                id="floatingInputCustom"
                                                                type="text"
                                                                placeholder="Address"
                                                                name="address"
                                                            />
                                                            <label htmlFor="floatingInputCustom">
                                                                Address
                                                            </label>
                                                        </Form.Floating>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Col>

                                        <Col lg={2} md={2} xs={2} className="mt-4">
                                            <div className="witness-image-card">
                                                <div className="witness-image-box"></div>
                                            </div>
                                        </Col>
                                    </Row>

                                </Row>
                            </Container>
                        </div>}
                        <div className="modal" id="aadharVerification" aria-labelledby="aadharVerificationLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="aadharVerificationLabel">Aadhar Verification</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <Image width={20} height={20} src="/images/popup-close.svg" />
                                        </button>
                                    </div>
                                    <div className="modal-body ">
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
                                                            <button className="bluebuttonclass" type="button" data-bs-dismiss="modal" aria-label="Close">
                                                                Yes
                                                            </button>
                                                        </Col>

                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    );
};
export default aadharVerification;
