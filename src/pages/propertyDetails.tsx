import Head from "next/head";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";
import Stepper from '../components/Stepper'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

//import 'bootstrap-icons/font/bootstrap-icons.css';
import * as React from "react";



const PropertyDetails = () => {
    const [display, setdisplay] = useState(false)
    const handleClick = () => {
        setdisplay(true)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const tableData = [
        {
            appNo: "456787654",
            ackNo: "345",
            csNo: "212",
            ackYear: "2022",
            presenterName: "Chandra Sekhar",
            noofSchedule: "1",
            generateddatetime: "22/11/2022 @ 10: 45 AM",
            bookNumber: "1",
            maj: "01",
            min: "01",
        },
        {
            appNo: "456787654",
            ackNo: "345",
            csNo: "212",
            ackYear: "2022",
            presenterName: "Sekhar Varma",
            noofSchedule: "2",
            generateddatetime: "22/11/2022 @ 10: 45 AM",
            bookNumber: "2",
            maj: "02",
            min: "02",
        },
        {
            appNo: "456787654",
            ackNo: "345",
            csNo: "212",
            ackYear: "2022",
            presenterName: "Chandra Sekhar",
            noofSchedule: "1",
            generateddatetime: "22/11/2022 @ 10: 45 AM",
            bookNumber: "1",
            maj: "01",
            min: "01",
        },
        {
            appNo: "456787654",
            ackNo: "345",
            csNo: "212",
            ackYear: "2022",
            presenterName: "Sekhar Varma",
            noofSchedule: "2",
            generateddatetime: "22/11/2022 @ 10: 45 AM",
            bookNumber: "2",
            maj: "02",
            min: "02",
        },
    ];
    const [cards, setCards] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);

    function handleButtonClick() {
        if (cards.length === 0) {

            const newCard = { title: "New", description: "newcard." };

            setCards([newCard, ...cards]);
        }

        setButtonClicked(true);
    }
    const [age, setAge] = React.useState('');
    const [inputFields, setInputFields] = useState([{
        fullName: '',
    }]);
    const addInputField = () => {
        setInputFields([...inputFields, {
            fullName: '',
        }])

    }
    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    return (
        <><Stepper /><div className="pageMainWrap pt-4 innerpage">
            <Head>
                <title>Property Details - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>

            <div className="mainWrapper">
                <div className="wrapperInner pt-0">
                    <div className="acknowledgement">
                        <button className="active partyDetails">Property Details</button>
                        <button className="imaging">Cash Receipt</button>
                    </div>
                    <Row className="mt-0 mb-2">
                        <Col >
                            <div className="float-end">
                                <Dropdown>
                                    <Dropdown.Toggle id="" className="previous-schedule" variant="secondary">
                                        Previous Schedule
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Schedule 1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Schedule 2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Schedule 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                    <div className="pageTableContainer pageTableMain mt-4">
                        <h4 className="mb-4">Basic Details</h4>
                        <Row className="mb-4">
                            <Col lg={3} md={4} xs={12}>
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Book No." />
                                    <Form.Label htmlFor="floatingInputCustom">
                                        Book No.
                                    </Form.Label>
                                </Form.Floating>
                            </Col>
                            <Col lg={3} md={4} xs={12} className="mb-3">
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Year" />
                                    <Form.Label htmlFor="floatingInputCustom">Year</Form.Label>
                                </Form.Floating>
                            </Col>
                            <Col lg={3} md={3} xs={12} className="mb-3">
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="CS Number" />
                                    <Form.Label htmlFor="floatingInputCustom">
                                        CS Number
                                    </Form.Label>
                                </Form.Floating>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col lg={3} md={4} xs={12}>
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="1 out of 2 schedules." />
                                    <Form.Label htmlFor="floatingInputCustom">
                                        1 out of 2 schedules.
                                    </Form.Label>
                                </Form.Floating>
                            </Col>
                            <Col lg={3} md={4} xs={12} className="mb-3">
                                <Form.Floating>
                                    <Form.Select aria-label="Jurisdication">
                                        <option>Jurisdication</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Floating>
                            </Col>
                            <Col lg={3} md={3} xs={12} className="mb-3">
                                <Form.Floating>
                                    <Form.Select aria-label="villageName">
                                        <option>Village Name</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Floating>
                            </Col>
                        </Row>
                        <div className="scheduleDetails mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Schedule Details <span className="propertydetails-topbutton float-end">Permission Granted</span> 
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="mb-4">
                                            <Col lg={6} md={6} xs={12}>

                                                <Form.Floating>
                                                    <Form.Select aria-label="localBody">
                                                        <option>Local Body</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                            <div className="drop-section">
                                                <Dropdown>
                                                    <Dropdown.Toggle id="" className=" form-select" variant="">
                                                    Map Claimants
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <table className="tableData listData tableheadBg table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th className="text-center">Select</th>
                                                                <th className="text-center">Claimant Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                <td><Dropdown.Item href="#/action-1">XXXXXXXXXX</Dropdown.Item></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                <td><Dropdown.Item href="#/action-1">XXXXXXXXXXX</Dropdown.Item></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                <td><Dropdown.Item href="#/action-1">XXXXXXXXXXXX</Dropdown.Item></td>
                                                            </tr>
                                                        </tbody>

                                                        </table>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Select aria-label="landUse">
                                                        <option>Land Use</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={6} md={6} xs={12}>
                                                <Form.Floating>
                                                    <Form.Select aria-label="localBody">
                                                        <option>ULC Act</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Select aria-label="mapClaimants">
                                                        <option>Locality/ Habitation</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Ward No." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Ward No.
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Block No." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Block No.
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">                                          <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="Door No." />
                                                <Form.Label htmlFor="floatingInputCustom">
                                                    Door No.
                                                </Form.Label>
                                            </Form.Floating>
                                        </Col>
                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Survey No." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Survey No.
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>


                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Sub-Survey No." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Sub-Survey No.
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Survey Extent." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Survey Extent.
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Row className="mb-4"></Row>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Layout Name." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Layout Name.
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Layout Number" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Layout Number
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>

                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Ptin Number" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Ptin Number
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Plot No" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Plot No
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Plinth Area" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Plinth Area
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Select aria-label="localBody">
                                                        <option>Building Type - House/Flat</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Floating>
                                            </Col>
                                        </Row>

                                        <div className="pageNextBtn">
                                            {/* <button className="next">Clear</button> */}
                                            <button className="clear">Clear</button>
                                            <button className="next" onClick={handleShow}>Next</button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Attention!</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body className="justify-content-center">This is prohibited property</Modal.Body>
                                                <Modal.Footer className="justify-content-center">
                                                    <Button className="submit" onClick={handleClose}>
                                                        Submit for request
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>


                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="boundaries mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Boundaries</Accordion.Header>
                                    <Accordion.Body>

                                        <h4>Property Boundaries</h4>

                                        <Row className="mb-4">

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="East" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        East

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="West" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        West

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col></Row>
                                        <Row className="mb-4">

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="North" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        North

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="South" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        South

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                        </Row>

                                        <Row className="mb-4">

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="PPD Desc" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        PPD Desc

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="Total Extent/Undivided Share" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        Total Extent/Undivided Share

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col></Row>
                                        <Row className="mb-4">

                                            <Col lg={12} md={12} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Select aria-label="units">

                                                        <option>Units</option>

                                                        <option value="1">One</option>

                                                        <option value="2">Two</option>

                                                        <option value="3">Three</option>

                                                    </Form.Select>

                                                </Form.Floating>

                                            </Col>

                                        </Row>

                                        <h4>Flat Boundaries</h4>

                                        <Row className="mb-4">

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="East" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        East

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="West" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        West

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>
                                        </Row>
                                        <Row className="mb-4">

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="North" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        North

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="South" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        South

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                        </Row>

                                        <div className="pageNextBtn">

                                            <button className="clear">Clear</button>

                                            {/* <button className="next">Clear</button> */}

                                            <button className="next">Next</button>

                                        </div>

                                    </Accordion.Body>

                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="structureDetails mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Structure Details </Accordion.Header>
                                    <Accordion.Body>


                                        <div className="pageNextBtn">
                                            {/* <button className="next">Clear</button> */}
                                            {/* <button className="clear" onClick={handleShow1}>Add New</button> */}
                                            <div>
                                                <div>
                                                    {cards.map((card, index) => (
                                                        <div key={index} >
                                                            <div>

                                                                <Row className="partyDetails mb-3 linkdocuments-bg">
                                                                    <Col lg={4} md={4} xs={12} className="mb-3" />
                                                                    <Col lg={4} md={4} xs={12} className="mb-3">
                                                                        <div className="card">
                                                                            <div className="cardHeader d-flex align-items-center justify-content-between">
                                                                                <h5>
                                                                                    <span></span>
                                                                                </h5>
                                                                                <h4 className="cardBtns">
                                                                                    <button className="edit">
                                                                                        <img src="/images/edit-icon.svg" />
                                                                                    </button>
                                                                                    <button className="delete">
                                                                                        <img src="/images/delete-icon.svg" />
                                                                                    </button>
                                                                                </h4>
                                                                            </div>
                                                                            <div className="cardBody">
                                                                                <Row>

                                                                                    <Col lg={12} md={12} xs={12}>
                                                                                        <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                                            <h6>
                                                                                                <span>Total Floors</span><center>2</center>
                                                                                            </h6>
                                                                                            <h6>
                                                                                                <span>Floor No.</span><center>Ground</center>
                                                                                            </h6>
                                                                                            <h6>
                                                                                                <span>Structure Type</span><center>RCC</center>
                                                                                            </h6>
                                                                                        </div>

                                                                                        <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                                            <h6>
                                                                                                <span>Plinth Area</span><center>2,200 Sq.ft</center>
                                                                                            </h6>
                                                                                            <h6 >
                                                                                                <span>Stage of Construction</span><center>Under...</center>
                                                                                            </h6>
                                                                                            <h6 >
                                                                                                <span>Age</span><center>5 Years</center>
                                                                                            </h6>

                                                                                        </div>


                                                                                    </Col>
                                                                                </Row>

                                                                            </div>

                                                                        </div>
                                                                    </Col>
                                                                    <div className="pageNextBtn">
                                                                        {/* <button className="next">Clear</button> */}

                                                                        <button onClick={handleShow1}>Add New</button>&ensp;&ensp;
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {!buttonClicked && (
                                                    <div>
                                                        <Row className="mb-4">
                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Total Floors</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Floor Number</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </Form.Floating>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-4">
                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Structure Type</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </Form.Floating>
                                                            </Col>

                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Stage of Construction</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </Form.Floating>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-4">
                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Age" />
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Age
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Plinth Area" />
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Plinth Area
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                        </Row>
                                                        <div className="pageNextBtn">
                                                            <button onClick={handleButtonClick}>Add new</button>&ensp;&ensp;
                                                            <button className="next">Next</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <Modal show={show1} onHide={handleClose1}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Add New Structure</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Row className="mb-4">
                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                            <Form.Floating>
                                                                <Form.Select aria-label="units">
                                                                    <option>Total Floors</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Form.Floating>
                                                        </Col>
                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                            <Form.Floating>
                                                                <Form.Select aria-label="units">
                                                                    <option>Floor Number</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Form.Floating>
                                                        </Col>
                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                            <Form.Floating>
                                                                <Form.Select aria-label="units">
                                                                    <option>Structure Type</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Form.Floating>
                                                        </Col>
                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                            <Form.Floating>
                                                                <Form.Select aria-label="units">
                                                                    <option>Stage of Construction</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Form.Floating>
                                                        </Col>
                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                            <Form.Floating>
                                                                <Form.Control
                                                                    id="floatingInputCustom"
                                                                    type="text"
                                                                    placeholder="Age" />
                                                                <Form.Label htmlFor="floatingInputCustom">
                                                                    Age
                                                                </Form.Label>
                                                            </Form.Floating>
                                                        </Col>
                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                            <Form.Floating>
                                                                <Form.Control
                                                                    id="floatingInputCustom"
                                                                    type="text"
                                                                    placeholder="Plinth Area" />
                                                                <Form.Label htmlFor="floatingInputCustom">
                                                                    Plinth Area
                                                                </Form.Label>
                                                            </Form.Floating>
                                                        </Col></Row>
                                                </Modal.Body>

                                                <Modal.Footer>

                                                    <button className="clear">Add New</button>
                                                    <Button variant="primary" onClick={handleClose1}>
                                                        Next
                                                    </Button>


                                                </Modal.Footer>
                                            </Modal>

                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="apartmentDetails mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Apartment Details  </Accordion.Header>
                                    <Accordion.Body>

                                        <Row className="mb-4">

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="Apartment Name" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        Apartment Name

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="Flat No" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        Flat No

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col></Row>
                                        <Row className="mb-4">

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Control

                                                        id="floatingInputCustom"

                                                        type="text"

                                                        placeholder="Apartment Extent" />

                                                    <Form.Label htmlFor="floatingInputCustom">

                                                        Apartment Extent

                                                    </Form.Label>

                                                </Form.Floating>

                                            </Col>

                                            <Col lg={6} md={6} xs={12} className="mb-3">

                                                <Form.Floating>

                                                    <Form.Select aria-label="units">

                                                        <option>Units</option>

                                                        <option value="1">One</option>

                                                        <option value="2">Two</option>

                                                        <option value="3">Three</option>

                                                    </Form.Select>

                                                </Form.Floating>

                                            </Col>

                                        </Row>

                                        <div className="pageNextBtn">

                                            <button className="clear">clear</button>

                                            {/* <button className="next">Clear</button> */}

                                            <button className="next">Next</button>

                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="enclosureDetails mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Enclosure Details  </Accordion.Header>
                                    <Accordion.Body>

                    <Row className="justify-content-center">

                      <Col lg={6} md={6} xs={12} >

                        <Table bordered size="lg" className=" w-55 " >

                          <thead className="enclosuredetails-table">

                            <tr >

                              <th >Code</th>

                              <th >Name</th>

                              <th >Attached Yes/No</th>

                            </tr>

                          </thead>

                          <tbody>

                            <tr>

                              <td>6</td>

                              <td>Rule-3</td>

                              <td>

                                <Col lg={6} md={6} xs={12}>

                                  <Form.Floating >

                                    <Form.Select aria-label="No">

                                      <option>No</option>

                                      <option value="1">One</option>

                                      <option value="2">Two</option>

                                      <option value="3">Three</option>

                                    </Form.Select>

                                  </Form.Floating>

                                </Col>

                              </td>

                            </tr>

                            <tr >

                              <td>10</td>

                              <td>Annexure</td>

                              <td>

                                <Col lg={6} md={6} xs={12}>

                                  <Form.Floating >

                                    <Form.Select aria-label="No">

                                      <option>No</option>

                                      <option value="1">One</option>

                                      <option value="2">Two</option>

                                      <option value="3">Three</option>

                                    </Form.Select>

                                  </Form.Floating>

                                </Col>

                              </td>

                            </tr>

                            <tr >

                              <td>6</td>

                              <td>Rule-3</td>

                              <td>

                                <Col lg={6} md={6} xs={12}>

                                  <Form.Floating >

                                    <Form.Select aria-label="No">

                                      <option>No</option>

                                      <option value="1">One</option>

                                      <option value="2">Two</option>

                                      <option value="3">Three</option>

                                    </Form.Select>

                                  </Form.Floating>

                                </Col>

                              </td>

                            </tr>

                            <tr>

                              <td>10</td>

                              <td>Annexure</td>

                              <td>

                                <Col lg={6} md={6} xs={12}>

                                  <Form.Floating >

                                    <Form.Select aria-label="No">

                                      <option>No</option>

                                      <option value="1">One</option>

                                      <option value="2">Two</option>

                                      <option value="3">Three</option>

                                    </Form.Select>

                                  </Form.Floating>

                                </Col>

                              </td>

                            </tr>

                            <tr>

                              <td>6</td>

                              <td>Rule-3</td>

                              <td>

                                <Col lg={6} md={6} xs={12}>

                                  <Form.Floating >

                                    <Form.Select aria-label="No">

                                      <option>No</option>

                                      <option value="1">One</option>

                                      <option value="2">Two</option>

                                      <option value="3">Three</option>

                                    </Form.Select>

                                  </Form.Floating>

                                </Col>

                              </td>

                            </tr>

                            <tr>

                              <td>10</td>

                              <td>Annexure</td>

                              <td>

                                <Col lg={6} md={6} xs={12}>

                                  <Form.Floating >

                                    <Form.Select aria-label="No">

                                      <option>No</option>

                                      <option value="1">One</option>

                                      <option value="2">Two</option>

                                      <option value="3">Three</option>

                                    </Form.Select>

                                  </Form.Floating>

                                </Col>

                              </td>

                            </tr>

                          </tbody>

                        </Table>

                      </Col>

                    </Row>

                    <div className="pageNextBtn">

                      <button className="clear">Clear</button>

                      {/* <button className="next">Clear</button> */}

                      <button className="next">Next</button>

                    </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="leaseDetails mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Lease Details</Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="mb-4">
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="W.E.F" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        W.E.F
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Period in Months" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Period in Months
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Advance in Rs" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Advance in Rs
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <h4>Rent Details</h4>

                                        {
                                            inputFields.map((data, index) => {
                                                const { fullName } = data;
                                                return (
                                                    // <div>


                                                    <Row className="mb-4" key={index}>
                                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                                        <Form.Floating>
                                                            <Form.Control onChange={(evnt) => handleChange1(index, evnt)} value={fullName}
                                                                id="floatingInputCustom"
                                                                type="text"
                                                                placeholder="Rent Period" />
                                                            <Form.Label htmlFor="floatingInputCustom">
                                                                Rent Period
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </Col>




                                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                                            <Form.Floating>
                                                                <Form.Control onChange={(evnt) => handleChange1(index, evnt)} value={fullName} name="fullName"
                                                                    id="floatingInputCustom"
                                                                    type="text"
                                                                    placeholder="Rent Amount" />
                                                                <Form.Label htmlFor="floatingInputCustom">
                                                                    Rent Amount
                                                                </Form.Label>
                                                            </Form.Floating>
                                                        </Col>



                                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                                            <Form.Floating>
                                                                <Form.Select aria-label="units" onChange={(evnt) => handleChange1(index, evnt)} value={fullName} name="fullName">
                                                                    <option>Monthly/ Yearly</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </Form.Select>
                                                            </Form.Floating>

                                                        </Col>



                                                        {/* <Grid container >
                    <Grid item sm={12} xs={12} md={12} xl={12} lg={12}><div >.</div></Grid>
                  </Grid> */}
                                                        <Col lg={1} md={1} xs={12}>
                                                            {
                                                                index === inputFields.length - 1 ?
                                                                    (
                                                                        <div className="pageNextBtn" style={{ padding: 0 }}>
                                                                            <button onClick={addInputField} className="next"> + </button>
                                                                        </div>
                                                                        // <AddIcon sx={{ marginTop: '20px', width: '55px', height: '50px', background: '#274C77', color: 'white', borderRadius:'4px' }}  />
                                                                    )
                                                                    :
                                                                    (""
                                                                        // <button style={{ marginTop: '35px', }} onClick={() => removeInputFields(index)}>x</button>
                                                                    )
                                                            }
                                                        </Col></Row>


                                                    // </div>
                                                )
                                            })
                                        }



                                        <div className="pageNextBtn">
                                            <button >Clear</button>&ensp;&ensp;
                                            <button className="next">Next</button>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="linkDocuments mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">

                                    <Accordion.Header>Link Documents</Accordion.Header>
                                    {!display && <Accordion.Body onClick={handleClick}>
                                        <Row className="mb-4">
                                            <Col lg={5} md={5} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="SRO Code" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        SRO Code
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={5} md={5} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Regular Document No." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Regular Document No.
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={5} md={5} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Book No." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Book No.
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={5} md={5} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Registration Year" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Registration Year
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={5} md={5} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Schedule No" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Schedule No
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <div className="pageNextBtn">
                                            <button >Cancel</button>&ensp;&ensp;
                                            <button className="next">Done</button>
                                        </div>
                                    </Accordion.Body>}
                                    {display && <Accordion.Body>
                                        <div className="linkdocuments-bg">
                                            <Row className="partyDetails mb-3 linkdocuments-bg">
                                                <Col lg={4} md={4} xs={12} className="mb-3" />
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <div className="card">
                                                        <div className="cardHeader d-flex align-items-center justify-content-between">
                                                            <h5>
                                                                <span></span>
                                                            </h5>
                                                            <h4 className="cardBtns">
                                                                <button className="edit">
                                                                    <img src="/images/edit-icon.svg" />
                                                                </button>
                                                                <button className="delete">
                                                                    <img src="/images/delete-icon.svg" />
                                                                </button>
                                                            </h4>
                                                        </div>
                                                        <div className="cardBody">
                                                            <Row>

                                                                <Col lg={12} md={12} xs={12}>
                                                                    <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                        <h6>
                                                                            <span>SRO Code</span>2234
                                                                        </h6>
                                                                        <h6>
                                                                            <span>Reg Doc No.</span>Ground
                                                                        </h6>
                                                                        <h6>
                                                                            <span>Reg Year</span>2,200 Sq ft
                                                                        </h6>
                                                                    </div>

                                                                    <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                        <h6>
                                                                            <span>Schedule No.</span>123456
                                                                        </h6>
                                                                        <h6 >
                                                                            <span>Book No.</span>RCC
                                                                        </h6>

                                                                    </div>


                                                                </Col>
                                                            </Row>

                                                        </div>

                                                    </div>
                                                </Col>
                                                <div className="pageNextBtn">
                                                    {/* <button className="next">Clear</button> */}

                                                    <button >Add New</button>&ensp;&ensp;
                                                    <button className="next">Next</button>
                                                </div>
                                            </Row></div>

                                    </Accordion.Body>}


                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="marketValue mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Market Value  </Accordion.Header>
                                    <Accordion.Body>

                                        <Form>

                                            <div key="inline-radio" className="mb-3">

                                                <Form.Check

                                                    inline

                                                    label="Online Entry"

                                                    name="group1"

                                                    type="radio"

                                                    id="inline-radio-1" checked />

                                                <Form.Check

                                                    inline

                                                    label="Post Manual Entry"

                                                    name="group1"

                                                    type="radio"

                                                    id="inline-radio-2" />

                                            </div>

                                        </Form>


                                        <div>
                                            <div>
                                                {cards.map((card, index) => (
                                                    <div key={index} >
                                                        <div>
                                                            <Row className="mb-4">

                                                                <Col lg={6} md={6} xs={12} className="mb-3">

                                                                    <Form.Floating>

                                                                        <Form.Control

                                                                            id="floatingInputCustom"

                                                                            type="text"

                                                                            placeholder="Loan Amount in Rs" />

                                                                        <Form.Label htmlFor="floatingInputCustom">

                                                                            Loan Amount in Rs

                                                                        </Form.Label>

                                                                    </Form.Floating>

                                                                </Col></Row>
                                                            <div className="pageNextBtn">

                                                                <button className="clear">Clear</button>

                                                                {/* <button className="next">Clear</button> */}

                                                                <button onClick={handleButtonClick} className="next">Next</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {!buttonClicked && (
                                                <div>
                                                    <Row className="mb-4">

                                                        <Col lg={6} md={6} xs={12} className="mb-3">

                                                            <Form.Floating>

                                                                <Form.Control

                                                                    id="floatingInputCustom"

                                                                    type="text"

                                                                    placeholder="Land Cost Rs" />

                                                                <Form.Label htmlFor="floatingInputCustom">

                                                                    Land Cost Rs

                                                                </Form.Label>

                                                            </Form.Floating>

                                                        </Col>

                                                        <Col lg={6} md={6} xs={12} className="mb-3">

                                                            <Form.Floating>

                                                                <Form.Control

                                                                    id="floatingInputCustom"

                                                                    type="text"

                                                                    placeholder="Structured Cost Rs" />

                                                                <Form.Label htmlFor="floatingInputCustom">

                                                                    Structured Cost Rs

                                                                </Form.Label>

                                                            </Form.Floating>

                                                        </Col>

                                                    </Row>

                                                    <Row className="mb-4">

                                                        <Col lg={5} md={5} xs={12} className="mb-3">

                                                            <Form.Floating>

                                                                <Form.Control

                                                                    id="floatingInputCustom"

                                                                    type="text"

                                                                    placeholder="Other Property Cost Rs (Tree, Well, etc.,)" />

                                                                <Form.Label htmlFor="floatingInputCustom">

                                                                    Other Property Cost Rs (Tree, Well, etc.,)

                                                                </Form.Label>

                                                            </Form.Floating>

                                                        </Col>

                                                        <Col lg={3} md={3} xs={12} className="mb-3">

                                                            <Form.Floating>

                                                                <Form.Control

                                                                    id="floatingInputCustom"

                                                                    type="text"

                                                                    placeholder="Value in Rs" />

                                                                <Form.Label htmlFor="floatingInputCustom">

                                                                    Value in Rs

                                                                </Form.Label>

                                                            </Form.Floating>

                                                        </Col>

                                                        <Col lg={4} md={4} xs={12} className="mb-3">

                                                            <Form.Floating>

                                                                <Form.Control

                                                                    id="floatingInputCustom"

                                                                    type="text"

                                                                    placeholder="Consideration Value" />

                                                                <Form.Label htmlFor="floatingInputCustom">

                                                                    Consideration Value

                                                                </Form.Label>

                                                            </Form.Floating>

                                                        </Col>

                                                    </Row>

                                                    <Row className="mb-4">

                                                        <Col lg={6} md={6} xs={12} className="mb-3">

                                                            <Form.Floating>

                                                                <Form.Control

                                                                    id="floatingInputCustom"

                                                                    type="text"

                                                                    placeholder="Market Value" />

                                                                <Form.Label htmlFor="floatingInputCustom">

                                                                    Market Value

                                                                </Form.Label>

                                                            </Form.Floating>

                                                        </Col>

                                                        <Col lg={6} md={6} xs={12} className="mb-3">

                                                            <Form.Floating>

                                                                <Form.Control

                                                                    id="floatingInputCustom"

                                                                    type="text"

                                                                    placeholder="Annual Rent Rs" />

                                                                <Form.Label htmlFor="floatingInputCustom">

                                                                    Annual Rent Rs

                                                                </Form.Label>

                                                            </Form.Floating>

                                                        </Col>

                                                        <div className="pageNextBtn">

                                                            <button className="clear">Clear</button>

                                                            {/* <button className="next">Clear</button> */}

                                                            <button onClick={handleButtonClick} className="next">Next</button>

                                                        </div>

                                                    </Row>

                                                </div>
                                            )}
                                        </div>

                                    </Accordion.Body>


                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="dutyFigure mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Duty Figure</Accordion.Header>
                                    <Accordion.Body>
                                        <p class="text-center">This is total of two Schedule Duty Figures</p>
                                        <Row className="mb-4">
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Select aria-label="units">
                                                        <option>Sale agreement Y/N?</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Select aria-label="units">
                                                        <option>Section 16. enclosed Y/N?</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Sale Agreement stamp duty/Duty Paid..." />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Sale Agreement stamp duty/Duty Paid...
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <hr></hr>
                                        <Row className="mb-4">
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Stamp Duty Borne by Doct" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Stamp Duty Borne by Doct
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Final Chargeable Value" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Final Chargeable Value
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Other Fee" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Other Fee
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Stamp Duty Payable" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Stamp Duty Payable
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Transfer Duty Payable" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Transfer Duty Payable
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="DSD Payable" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        DSD Payable
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col></Row>
                                        <Row className="mb-4">
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="User Charges" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        User Charges
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Regn Fee Payable" />
                                                    <Form.Label htmlFor="floatingInputCustom">
                                                        Regn Fee Payable
                                                    </Form.Label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <div className="pageNextBtn">
                                            {/* <button className="next">Clear</button> */}
                                            <button className="clear">Clear</button>
                                            <button className="next">Save</button>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    );
};
export default PropertyDetails;
