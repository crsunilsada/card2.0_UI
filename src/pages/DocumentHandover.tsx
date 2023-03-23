import { Col, Row, Form } from "react-bootstrap"
import Head from "next/head";
import Image from "next/image";
import Stepper from '../components/Stepper'
import { useEffect, useState } from "react";
import React from "react";
const documentHandover = () => {
    const [selectedOption, setSelectedOption] = useState("S/o");
    const [checked, setchecked] = useState(0);
    const handleOptionClick = (event) => { setSelectedOption(event.target.textContent); };
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const [clicked, setclicked] = useState(false);
    const handleClick = () => { setclicked(true); setborder("1px solid #989898 ") };
    const [border, setborder] = useState("0px solid #989898")
    const [show, setshow] = useState(false)
    const clickFunction = () => {
        setshow(true)
    }
    const [show1, setshow1] = useState(false)
    const clickFunction1 = () => {
        setshow1(true)
    }
    return (
        <><div><Stepper showReason1={true} /></div>
            <Stepper showReason={false} />
            <div className="pageMainWrap innerpage">
                <Head>
                    <title>Document Handover - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div style={{ width: "100%" }}>
                    <div className="mainWrapper">
                        <div className="wrapperInner pageTableMain">
                            <div>
                                <div className="acknowledgement">
                                    <button className="active partyDetails">Document Handover</button>
                                </div>
                                <div>
                                    <Row className="justify-content-center mt-3">
                                        <Col lg={2} md={2} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="dropdown"
                                                    placeholder="Date"
                                                    value="16-03-2023" />
                                                <label htmlFor="floatingInputCustom">
                                                    Date
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={1} md={1} xs={12} className="mb-3 ">
                                            <Form.Floating>
                                                <Form.Select aria-label="Book No" id="floatingInputCustom" >
                                                    <option value="0" >Please Select</option>
                                                    <option value="1" selected>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </Form.Select>
                                                <Form.Label for="floatingInputCustom">
                                                    Book No
                                                </Form.Label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={1} md={1} xs={12} className="mb-3 ">
                                            <Form.Floating>
                                                <Form.Select aria-label="Year" id="floatingInputCustom">
                                                    <option value="0" >Please Select</option>
                                                    <option value="1" selected>2022</option>
                                                    <option value="2">2023</option>
                                                </Form.Select>
                                                <Form.Label htmlFor="floatingInputCustom">
                                                    Year
                                                </Form.Label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={2} md={2} xs={12} className="mb-3 ">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="dropdown"
                                                    placeholder="Doc No"
                                                    value="239" />
                                                <label htmlFor="floatingInputCustom">
                                                    Doc No
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={1} md={2} xs={4} className="mb-3">
                                            <button onClick={clickFunction} className="bluebuttonclass">Verify</button>
                                        </Col>
                                        <Col lg={1} md={2} xs={4}>
                                            <button className="whitebuttonclass">Clear</button>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row className="justify-content-start">
                                        <Col lg={2} md={2} xs={2}></Col>
                                        <Col lg={6} md={6} xs={12} className="justify-content-start">
                                            <p className="text-color">
                                                Basic Details
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col lg
                                            ={2} md={2} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="Ack No"
                                                    value={show ? "1" : null} />
                                                <label htmlFor="floatingInputCustom">
                                                    Ack No
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={2} md={2} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="Ack Year"
                                                    value={show ? "2022" : null} />
                                                <label htmlFor="floatingInputCustom">
                                                    Ack Year
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={2} md={2} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="CS No"
                                                    value={show ? "46" : null} />
                                                <label htmlFor="floatingInputCustom">
                                                    CS No
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={2} md={2} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="CS Year"
                                                    value={show ? "2022" : null} />
                                                <label htmlFor="floatingInputCustom">
                                                    CS Year
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col lg={2} md={2} xs={12}></Col>
                                        <Col lg={3} md={4} xs={12} className="justify-content-center">
                                            <p className="text-color">
                                                Nominee Details
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col lg={2} md={2} xs={1} className="mb-3"></Col>
                                        <Col lg={6} md={6} xs={12} className="mb-3">
                                            <Row>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="ID Type"
                                                            value={show ? "Aadhar" : null}
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            ID Type
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="ID Number"
                                                            value={show ? "xxxx xxxx 6543" : null}
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            ID Number
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Name"
                                                            value={show ? "Sanjay Kumar" : null}
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            Name
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
                                                            placeholder="Age"
                                                            value={show1 ? "23" : null}
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            Age
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <div className="input-group">
                                                        <button
                                                            className="btn btn-outline-secondary dropdown-toggle "
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                            style={{ color: "#4D4D4D", borderRadius: "12px 0px 0px 12px", borderColor: "#6096BA", backgroundColor: "#F6F9FB" }}
                                                        >
                                                            {selectedOption}
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#" onClick={handleOptionClick}>S/o</a></li>
                                                            <li><a className="dropdown-item" href="#" onClick={handleOptionClick}>D/o</a></li>
                                                            <li><a className="dropdown-item" href="#" onClick={handleOptionClick}>W/o</a></li>
                                                        </ul>
                                                        <Form.Floating>
                                                            <Form.Control
                                                                id="floatingInputCustom"
                                                                type="text"
                                                                placeholder="Relation Name"
                                                                className="form-control"
                                                                value={show1 ? "venkateswara rao" : null}
                                                            />
                                                            <label htmlFor="floatingInputCustom">
                                                                Relation Name
                                                            </label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Phone Number"
                                                            value={show1 ? "+91 72*******1" : null}
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            Phone Number
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12} md={12} xs={12}>
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Address"
                                                            value={show1 ? "Falt 120, Block C, Anjali Residency, KPHB, Rajahmundry" : null}
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            Address
                                                        </label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <Row>
                                            </Row>
                                        </Col>
                                        <Col lg={3} md={2} xs={4} className="float-end">
                                            <div className="partydetails-image-box">
                                                {show1 ? <Image width={200} height={165} src="/images/executant-img.svg" /> : null}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="py-2">
                                        <Col lg={4} md={4} xs={2}></Col>
                                        <Col lg={2} md={2} xs={4} className="text-center">
                                            <button className={show1 ? "redbuttonclass-disable" : "redbuttonclass"} onClick={clickFunction1}>e-KYC</button>
                                        </Col>
                                        <Col lg={2} md={2} xs={4}>
                                            <button className="bluebuttonclass">Save</button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default documentHandover;
