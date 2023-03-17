import { Container, Col, Row, Form, Button } from "react-bootstrap"
import Image from "next/image";
import Head from "next/head";
import Stepper from '../components/Stepper'
import Link from "next/link";
import { useEffect, useState } from "react";
const partyDetails = () => {
    const [selectedOption, setSelectedOption] = useState("S/O");
    const handleOptionClick = (event) => { setSelectedOption(event.target.textContent); };
    useEffect(() => { require("bootstrap/dist/js/bootstrap.bundle.min.js"); }, []);
    return (
        <><div className="pageMainWrap innerpage"><Stepper />
            <Head>
                <title>Party Details - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div>
                <div className="mainWrapper">
                    <div className="wrapperInner">
                        <div className="pageTableContainer">
                            <div className="acknowledgement">
                                <button className="active partyDetails">Party Details</button>
                                <button className=" imaging">Imaging</button>
                            </div>
                                <div className="mb-4 d-flex assigningcheckboxes">
                                    <Form.Check
                                        value="Executant"
                                        type="radio"
                                        aria-label="Executant"
                                        label="Executant"
                                        name="inlineRadioOptions"
                                    />
                                    <Form.Check
                                        value="Claimant"
                                        type="radio"
                                        aria-label="Claimant"
                                        label="Claimant"
                                        name="inlineRadioOptions"
                                    />
                                </div>
                                <div>
                                    <Row>
                                        <Col lg={8} md={8} xs={8}>
                                            <Row>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Select aria-label="Default select example">
                                                        <option value="">ID Proof</option>
                                                        <option value="10">Chairman</option>
                                                        <option value="20">AP Registrar Head</option>
                                                        <option value="30">Document Writer</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="ID Number"
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            ID Number
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
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
                                                <Col lg={2} md={2} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Nominee Name"
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            Age
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
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
                                            <Row>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
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
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Address"
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            Address
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Phone Number"
                                                            name="pannumber"
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            PAN Number/Form 60/61
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="PAN Card Number"
                                                            name="pancardnumber"
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            PAN Card Number
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={2} md={2} xs={2}>
                                        <div className="partydetails-image-card ">
                                            <div className="partydetails-image-box"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col lg={6} md={6} xs={6}>
                                        <div className="form-check-checkbox assigningcheckboxes">
                                            <input className="form-check-input m-2" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="m-2">
                                                Consider this Claimant/Executant as Representative
                                            </label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} xs={12} className="mb-1">
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-1">
                                    </Col>
                                    <Col lg={4} md={4} xs={4} className="mb-1">
                                        <div className="pageNextBtn">
                                            <button className="clear">
                                                Clear
                                            </button>
                                            <Link href={"/partyDetailsScroll"}>
                                            <button className="next">
                                                Done
                                            </button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>

                        </div>
                    </div>
                </div>
            </div>
        </div></>
    );
};
export default partyDetails;
