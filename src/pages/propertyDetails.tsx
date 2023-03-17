import Head from "next/head";
import Accordion from 'react-bootstrap/Accordion';
import { Row, Col, Table, Form, FormFloating, Nav, Tab } from "react-bootstrap";
import Stepper from '../components/Stepper'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import * as React from "react";
const PropertyDetails = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    const [selectedItems, setSelectedItems] = useState([]);
    const handleItemClick1 = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };
    const [display, setdisplay] = useState(false)
    const handleClick = () => {
        setdisplay(true)
    }
    const [display1, setdisplay1] = useState(false)
    const handleClick1 = () => {
        setdisplay1(true)
    }
    const [display2, setdisplay2] = useState(false)
    const handleClick2 = () => {
        setdisplay2(true)
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
    const [activeTab, setActiveTab] = useState('first');

  const handleNextClick = () => {
    if (activeTab === 'first') {
      setActiveTab('second');
    } else if (activeTab === 'second') {
      setActiveTab('third');
    }
  };
    return (
        <><div><Stepper showReason2={true} /></div>
        <Stepper showReason={true} />
        {/* <div className="red-strip text-center p-1">REASON: Change Nature of Document  |  COMMENTS: Comments appear here</div> */}
            <div className="pageMainWrap pt-4 innerpage">
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
                        {/* <Row className="mt-0 mb-2">
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
                        </Row> */}

                        <div className="pageTableContainer pageTableMain mt-4">
                            {/* <h4 className="mb-4">Basic Details</h4> */}
                            <div className="tabsList-pd">
                                <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                                    <Nav variant="pills" >
                                        <Nav.Item >
                                            <Nav.Link eventKey="first" className="small  text-xs p-1  mt-4" >
                                                Schedule 1
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second" className="small  text-xs p-1 mt-4">
                                                Schedule 2
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third" className="small  text-xs p-1 mt-4">
                                                Schedule 3
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    &ensp;
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                        <div className="scheduleDetails mb-3">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0"  >
                                        <Accordion.Header>Basic Details
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Book No" defaultValue="555"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Book No
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Year" defaultValue="2023"/>
                                                        <Form.Label htmlFor="floatingInputCustom">Year</Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="CS Number" defaultValue="456" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            CS No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <Row >
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="1 out of 2 schedules." defaultValue="1"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            1 out of 2 schedules : <span style={{ fontWeight: 'bold' }}>URBAN</span>
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="Jurisdication" id="floatingInputCustom" placeholder="Jurisdication">
                                                            <option value="1" selected>Kankipadu</option>
                                                            <option value="2">Guntur</option>
                                                            <option value="3">Ongole</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Jurisdication
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="villageName" id="floatingInputCustom" placeholder="villageName">
                                                            <option value="1">Amaravathi</option>
                                                            <option value="2" selected>Tenneru</option>
                                                            <option value="3">Karumanchi</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Village Name
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="scheduleDetails mb-3">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Schedule Details <span className="propertydetails-topbutton float-end">Permission Granted</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown onSelect={handleItemClick}>
                                                                <Dropdown.Toggle id="local-body-dropdown" className="form-select" variant="" style={{ border: '1px solid #2279c5' }}>
                                                                    {selectedItem || 'Municipal Corporation'}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Local Body</th>
                                                                                <th className="text-center">Local Body Desc</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center">01</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='Municipal Corporation'
                                                                                    >
                                                                                        Municipal Corporation
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">02</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='SPL/ Selection grade municipality'>
                                                                                        SPL/ Selection grade municipality
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">03</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='other Municipality/ Notified Area'>
                                                                                        other Municipality/ Notified Area
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}>  Village Name  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown >
                                                                <Dropdown.Toggle id="" className=" form-select" style={{ border: '1px solid #2279c5' }} variant="">
                                                                    {selectedItems.length > 0 ? selectedItems.join(", ") : "All"}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Select</th>
                                                                                <th className="text-center" >Claimant Details</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("All")}>All</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("Rahul")}>Rahul</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("Bindu")}>Bindu</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("33")}>33</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("55")}>55</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("77")}>77</Dropdown.Item></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}>  Map Claimants  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="landUse" id="floatingInputCustom" placeholder="Land Use">
                                                            <option value="1" selected>Farming</option>
                                                            <option value="2">Rent</option>
                                                            <option value="3">Own Property</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Land Use
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="ULC Act">
                                                            <option value="1">Vacant Land</option>
                                                            <option value="2">Building</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            ULC Act
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="mapClaimants" id="floatingInputCustom" placeholder="Locality/ Habitation">
                                                            <option>Locality/ Habitation</option>
                                                            <option value="1" selected>Vuyyuru</option>
                                                            <option value="2">Koduru</option>
                                                            <option value="3">Gannavaram</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Locality/ Habitation
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Ward No." defaultValue="13"/>
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
                                                            placeholder="Block No." defaultValue="19"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Block No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="" className=" form-select remove-icon" variant="" style={{ border: '1px solid #2279c5' }}>
                                                                    Door No.
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Door Number</th>
                                                                                <th className="text-center">Building Number</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center">
                                                                                    <input type="" className="form-control1 " defaultValue="529" id="floatingPassword" placeholder=""></input></td>
                                                                                <td><Dropdown.Item href="#/action-1">
                                                                                    <input type="" className="form-control1" defaultValue="34" id="" placeholder=""></input></Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"></td>
                                                                                <td><Dropdown.Item href="#/action-1">
                                                                                    <Row >
                                                                                        <Col lg={8} md={8} xs={12} ></Col>
                                                                                        <Col lg={4} md={4} xs={12} >
                                                                                            <img src="/images/plus-circle.svg" className="plus-circle-img" />
                                                                                        </Col>
                                                                                    </Row></Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}> Door No.  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Survey No." defaultValue="4"/>
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
                                                            placeholder="Sub-Survey No." defaultValue="92"/>
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
                                                            placeholder="Survey Extent" defaultValue="12.38"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Survey Extent
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Layout Name." defaultValue="1"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Layout Name
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Layout Number" defaultValue="16"/>
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
                                                            placeholder="Ptin Number" defaultValue="38"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Ptin Number
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Plot No" defaultValue="67"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Plot No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Plinth Area" defaultValue="500sqft"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Plinth Area
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="Building Type - House/Flat">
                                                            <option value="1" selected>Apartment</option>
                                                            <option value="2">House</option>
                                                            <option value="3">Hotel</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Building Type - House/Flat
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>
                                                <button className="next" onClick={handleShow}>Next</button>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Attention!</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body className="justify-content-center text-center">Given property details is in prohibited property Area</Modal.Body>
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
                                            <h6 className="mb-4"><small>Property Boundaries</small></h6>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="East" defaultValue="Magnum Saphire Apartment"/>
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
                                                            placeholder="West" defaultValue="open Land"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            West
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="North" defaultValue="open Land"/>
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
                                                            placeholder="South" defaultValue="KBR Park"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            South
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="PPD Desc" defaultValue="50"/>
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
                                                            placeholder="Total Extent/Undivided Share" defaultValue="600sqft"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Total Extent/Undivided Share
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={12} md={12} xs={12} className="mb-3" >
                                                    <Col lg={12} md={12} xs={12} className="mb-3">
                                                        <Form.Floating>
                                                            <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                                <option value="1" >500 sq yd</option>
                                                                <option value="2">800 sq yd</option>
                                                                <option value="3">1000 sq yd</option>
                                                            </Form.Select>
                                                            <Form.Label htmlFor="floatingInputCustom">
                                                                Units
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </Col>
                                                </Col>
                                            </Row>
                                            <h6 className="mb-4"><small>Flat Boundaries</small></h6>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="East" defaultValue="Magnum Saphire Apartment"/>
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
                                                            placeholder="West" defaultValue="Open Land"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            West
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="North" defaultValue="Open Land"/>
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
                                                            placeholder="South" defaultValue="KBR Park"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            South
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>
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
                                                                            <button className="clear" onClick={handleShow1}>Add New</button>&ensp;&ensp;
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
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                            <option>Total Floors</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3" selected>3</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Total Floors
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Floor Number">
                                                                            <option>Floor Number</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" selected>2</option>
                                                                            <option value="3">3</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Floor Number
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Structure Type">
                                                                            <option>Structure Type</option>
                                                                            <option value="1" selected>Concrete</option>
                                                                            <option value="2">Wood</option>
                                                                            <option value="3">Steel</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Structure Type
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Stage of Construction">
                                                                            <option>Stage of Construction</option>
                                                                            <option value="1" selected>Partial</option>
                                                                            <option value="2">Initial</option>
                                                                            <option value="3">Closure</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Stage of Construction
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Control
                                                                            id="floatingInputCustom"
                                                                            type="text"
                                                                            placeholder="Age" defaultValue="54"/>
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
                                                                            placeholder="Plinth Area" defaultValue="200 sq yd"/>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Plinth Area
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                            </Row>
                                                            <div className="pageNextBtn">
                                                                <button className="clear" onClick={handleButtonClick}>Add new</button>
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
                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                        <option>Total Floors</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3" selected>3</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Total Floors
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Floor Number">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Floor Number</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2" selected>2</option>
                                                                        <option value="3">3</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Floor Number
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Structure Type">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Structure Type</option>
                                                                        <option value="1">Concrete</option>
                                                                        <option value="2">Wood</option>
                                                                        <option value="3">Steel</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Structure Type
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Stage of Construction">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option value="1">Partial</option>
                                                                        <option value="2">Initial</option>
                                                                        <option value="3">Closure</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Stage of Construction
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Age" defaultValue="54"/>
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
                                                                        placeholder="Plinth Area" defaultValue="200 sq yd"/>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Plinth Area
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col></Row>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <div className="pageNextBtn">
                                                            <button className="clear">Add New</button>&ensp;&ensp;
                                                            <Button onClick={handleClose1} className="next">
                                                                Next
                                                            </Button>
                                                        </div>
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
                                        {!display1 && <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Apartment Name" defaultValue="Fortune Heights"/>
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
                                                            placeholder="Flat No" defaultValue="103"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Flat No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Apartment Extent" defaultValue="400 sq yd"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Apartment Extent
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                            <option>Units</option>
                                                            <option value="1" selected>1500 Sq Ft</option>
                                                            <option value="2">3500 Sq Ft</option>
                                                            <option value="3">2000 Sq Ft</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Units
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">clear</button>
                                                <button className="next" onClick={handleClick1}>Next</button>
                                            </div>
                                        </Accordion.Body>}
                                        {display1 && <Accordion.Body>
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
                                                                                <span>Apartment Name</span>2234
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Flat No</span>Ground
                                                                            </h6>

                                                                        </div>
                                                                        <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                            <h6>
                                                                                <span>Apartment Extent</span>123456
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Units</span>RCC
                                                                            </h6>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <div className="pageNextBtn">
                                                        <button className="clear">Add New</button>&ensp;&ensp;
                                                        <button className="next">Next</button>
                                                    </div>
                                                </Row></div>
                                        </Accordion.Body>}
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
                                                                <th className="text-center">Code</th>
                                                                <th className="text-center">Name</th>
                                                                <th className="text-center">Attached Yes/No</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            <tr className="text-center">
                                                                <td>6</td>
                                                                <td>Rule-3</td>
                                                                <td >
                                                                <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
                                                                        <Form.Floating >
                                                                            <Form.Select aria-label="No" >
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
                                                                <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                        {!display2 && <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="W.E.F" defaultValue="wef"/>
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
                                                            placeholder="Period in Months" defaultValue="10"/>
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
                                                            placeholder="Advance in Rs" defaultValue="100000/-"/>
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
                                                        <Row className="mb-4" key={index}>
                                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control defaultValue="12 Months"
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
                                                                    <Form.Control defaultValue="15000" name="fullName"
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
                                                                    <Form.Select aria-label="units" name="fullName" id="floatingInputCustom" placeholder="Monthly/ Yearly">
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Monthly/ Yearly
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={1} md={1} xs={12} className="col-sm-*">
                                                                {
                                                                    index === inputFields.length - 1 ?
                                                                        (
                                                                            <div className="pageNextBtn" style={{ padding: 0 }}>
                                                                                <button onClick={addInputField} style={{background:"#274c77", width:"10px", justifyContent:"center", color:"white"}}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
                                                                            </div>
                                                                        )
                                                                        :
                                                                        (""
                                                                        )
                                                                }
                                                            </Col></Row>
                                                    )
                                                })
                                            }
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>&ensp;&ensp;
                                                <button className="next" onClick={handleClick2}>Next</button>
                                            </div>
                                        </Accordion.Body>}
                                        {display2 && <Accordion.Body>
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
                                                                                <span>W.E.F</span>2234
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Period in Months</span>Ground
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Advance in Rs</span>2,200 Sq ft
                                                                            </h6>
                                                                        </div>
                                                                        <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                            <h6>
                                                                                <span>Rent Period</span>123456
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Rent Amount</span>RCC
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Monthly/Yearly</span>RCC
                                                                            </h6>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <div className="pageNextBtn">
                                                        <button className="clear">Add New</button>&ensp;&ensp;
                                                        <button className="next">Next</button>
                                                    </div>
                                                </Row></div>
                                        </Accordion.Body>}
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="linkDocuments mb-3">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Link Documents</Accordion.Header>
                                        {!display && <Accordion.Body >
                                            <Row className="mb-4">
                                                <Col lg={5} md={5} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="SRO Code" defaultValue="299"/>
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
                                                            placeholder="Regular Document No." defaultValue="56"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Regular Document No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={5} md={5} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Book No." defaultValue="29"/>
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
                                                            placeholder="Registration Year" defaultValue="2023"/>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Registration Year
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Cancel</button>&ensp;&ensp;
                                                <button onClick={handleClick} className="next">Done</button>
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
                                                        <button className="clear">Add New</button>&ensp;&ensp;
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
                                            <Form  className="float-end">
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
                                            {/* <br></br><br></br> */}
                                            <div className="mt-5">
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
                                                                                placeholder="Loan Amount in Rs" defaultValue="10,00,000"/>
                                                                            <Form.Label htmlFor="floatingInputCustom">
                                                                                Loan Amount in Rs
                                                                            </Form.Label>
                                                                        </Form.Floating>
                                                                    </Col></Row>
                                                                <div className="pageNextBtn">
                                                                    <button className="clear">Clear</button>
                                                                    <button onClick={handleNextClick} className="next">Next</button>
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
                                                                        placeholder="Land Cost Rs" defaultValue="1,00,00,000"/>
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
                                                                        placeholder="Structured Cost Rs" defaultValue="150000"/>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Structured Cost Rs
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={5} md={5} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Other Property Cost Rs (Tree, Well, etc.,)" defaultValue="50,000"/>
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
                                                                        placeholder="Value in Rs" defaultValue="5700"/>
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
                                                                        placeholder="Consideration Value" defaultValue="25000"/>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Consideration Value
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Market Value" defaultValue="75,00,000"/>
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
                                                                        placeholder="Annual Rent Rs" defaultValue="1,00,000"/>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Annual Rent Rs
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <div className="pageNextBtn">
                                                                <button className="clear">Clear</button>
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
                           
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <div className="scheduleDetails mb-3">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0"  >
                                        <Accordion.Header>Basic Details
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Book No" defaultValue="555" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Book No
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Year" defaultValue="2023" />
                                                        <Form.Label htmlFor="floatingInputCustom">Year</Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="CS Number" defaultValue="456" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            CS No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <Row >
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="1 out of 2 schedules." defaultValue="1" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            1 out of 2 schedules : <span style={{ fontWeight: 'bold' }}>URBAN</span>
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="Jurisdication" id="floatingInputCustom" placeholder="Jurisdication">
                                                            <option value="1" selected>Kankipadu</option>
                                                            <option value="2">Guntur</option>
                                                            <option value="3">Ongole</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Jurisdication
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="villageName" id="floatingInputCustom" placeholder="villageName">
                                                            <option value="1">Amaravathi</option>
                                                            <option value="2" selected>Tenneru</option>
                                                            <option value="3">Karumanchi</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Village Name
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="scheduleDetails mb-3">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Schedule Details <span className="propertydetails-topbutton float-end">Permission Granted</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown onSelect={handleItemClick}>
                                                                <Dropdown.Toggle id="local-body-dropdown" className="form-select" variant="" style={{ border: '1px solid #2279c5' }}>
                                                                    {selectedItem || 'Municipal Corporation'}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Local Body</th>
                                                                                <th className="text-center">Local Body Desc</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center">01</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='Municipal Corporation'
                                                                                    >
                                                                                        Municipal Corporation
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">02</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='SPL/ Selection grade municipality'>
                                                                                        SPL/ Selection grade municipality
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">03</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='other Municipality/ Notified Area'>
                                                                                        other Municipality/ Notified Area
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}>  Village Name  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown >
                                                                <Dropdown.Toggle id="" className=" form-select" style={{ border: '1px solid #2279c5' }} variant="">
                                                                    {selectedItems.length > 0 ? selectedItems.join(", ") : "All"}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Select</th>
                                                                                <th className="text-center" >Claimant Details</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("All")}>All</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("Rahul")}>Rahul</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("Bindu")}>Bindu</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("33")}>33</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("55")}>55</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("77")}>77</Dropdown.Item></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}>  Map Claimants  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="landUse" id="floatingInputCustom" placeholder="Land Use">
                                                            <option value="1" selected>Farming</option>
                                                            <option value="2">Rent</option>
                                                            <option value="3">Own Property</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Land Use
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="ULC Act">
                                                            <option value="1">Vacant Land</option>
                                                            <option value="2">Building</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            ULC Act
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="mapClaimants" id="floatingInputCustom" placeholder="Locality/ Habitation">
                                                            <option>Locality/ Habitation</option>
                                                            <option value="1" selected>Vuyyuru</option>
                                                            <option value="2">Koduru</option>
                                                            <option value="3">Gannavaram</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Locality/ Habitation
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Ward No." defaultValue="13" />
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
                                                            placeholder="Block No." defaultValue="19" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Block No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="" className=" form-select remove-icon" variant="" style={{ border: '1px solid #2279c5' }}>
                                                                    Door No.
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Door Number</th>
                                                                                <th className="text-center">Building Number</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center">
                                                                                    <input type="" className="form-control1 " defaultValue="529" id="floatingPassword" placeholder=""></input></td>
                                                                                <td><Dropdown.Item href="#/action-1">
                                                                                    <input type="" className="form-control1" defaultValue="34" id="" placeholder=""></input></Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"></td>
                                                                                <td><Dropdown.Item href="#/action-1">
                                                                                    <Row >
                                                                                        <Col lg={8} md={8} xs={12} ></Col>
                                                                                        <Col lg={4} md={4} xs={12} >
                                                                                            <img src="/images/plus-circle.svg" className="plus-circle-img" />
                                                                                        </Col>
                                                                                    </Row></Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}> Door No.  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Survey No." defaultValue="4" />
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
                                                            placeholder="Sub-Survey No." defaultValue="92" />
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
                                                            placeholder="Survey Extent" defaultValue="12.38" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Survey Extent
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Layout Name." defaultValue="1" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Layout Name
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Layout Number" defaultValue="16" />
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
                                                            placeholder="Ptin Number" defaultValue="38" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Ptin Number
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Plot No" defaultValue="67" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Plot No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Plinth Area" defaultValue="500sqft" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Plinth Area
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="Building Type - House/Flat">
                                                            <option value="1" selected>Apartment</option>
                                                            <option value="2">House</option>
                                                            <option value="3">Hotel</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Building Type - House/Flat
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>
                                                <button className="next" onClick={handleShow}>Next</button>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Attention!</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body className="justify-content-center text-center">Given property details is in prohibited property Area</Modal.Body>
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
                                            <h6 className="mb-4"><small>Property Boundaries</small></h6>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="East" defaultValue="Magnum Saphire Apartment" />
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
                                                            placeholder="West" defaultValue="open Land" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            West
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="North" defaultValue="open Land" />
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
                                                            placeholder="South" defaultValue="KBR Park" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            South
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="PPD Desc" defaultValue="50" />
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
                                                            placeholder="Total Extent/Undivided Share" defaultValue="600sqft" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Total Extent/Undivided Share
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={12} md={12} xs={12} className="mb-3" >
                                                    <Col lg={12} md={12} xs={12} className="mb-3">
                                                        <Form.Floating>
                                                            <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                                <option value="1" >500 sq yd</option>
                                                                <option value="2">800 sq yd</option>
                                                                <option value="3">1000 sq yd</option>
                                                            </Form.Select>
                                                            <Form.Label htmlFor="floatingInputCustom">
                                                                Units
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </Col>
                                                </Col>
                                            </Row>
                                            <h6 className="mb-4"><small>Flat Boundaries</small></h6>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="East" defaultValue="Magnum Saphire Apartment" />
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
                                                            placeholder="West" defaultValue="Open Land" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            West
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="North" defaultValue="Open Land" />
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
                                                            placeholder="South" defaultValue="KBR Park" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            South
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>
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
                                                                            <button className="clear" onClick={handleShow1}>Add New</button>&ensp;&ensp;
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
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                            <option>Total Floors</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3" selected>3</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Total Floors
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Floor Number">
                                                                            <option>Floor Number</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" selected>2</option>
                                                                            <option value="3">3</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Floor Number
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Structure Type">
                                                                            <option>Structure Type</option>
                                                                            <option value="1" selected>Concrete</option>
                                                                            <option value="2">Wood</option>
                                                                            <option value="3">Steel</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Structure Type
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Stage of Construction">
                                                                            <option>Stage of Construction</option>
                                                                            <option value="1" selected>Partial</option>
                                                                            <option value="2">Initial</option>
                                                                            <option value="3">Closure</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Stage of Construction
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Control
                                                                            id="floatingInputCustom"
                                                                            type="text"
                                                                            placeholder="Age" defaultValue="54" />
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
                                                                            placeholder="Plinth Area" defaultValue="200 sq yd" />
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Plinth Area
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                            </Row>
                                                            <div className="pageNextBtn">
                                                                <button className="clear" onClick={handleButtonClick}>Add new</button>
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
                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                        <option>Total Floors</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3" Selected>3</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Total Floors
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Floor Number">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Floor Number</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Floor Number
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Structure Type">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Structure Type</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Structure Type
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Stage of Construction">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Stage of Construction
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Age" defaultValue="54"/>
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
                                                                        placeholder="Plinth Area" defaultValue="200 sq yd"/>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Plinth Area
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col></Row>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <div className="pageNextBtn">
                                                            <button className="clear">Add New</button>&ensp;&ensp;
                                                            <Button onClick={handleClose1} className="next">
                                                                Next
                                                            </Button>
                                                        </div>
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
                                        {!display1 && <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Apartment Name" defaultValue="Fortune Heights" />
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
                                                            placeholder="Flat No" defaultValue="103" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Flat No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Apartment Extent" defaultValue="400 sq yd" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Apartment Extent
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                            <option>Units</option>
                                                            <option value="1" selected>1500 Sq Ft</option>
                                                            <option value="2">3500 Sq Ft</option>
                                                            <option value="3">2000 Sq Ft</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Units
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">clear</button>
                                                <button className="next" onClick={handleClick1}>Next</button>
                                            </div>
                                        </Accordion.Body>}
                                        {display1 && <Accordion.Body>
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
                                                                                <span>Apartment Name</span>2234
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Flat No</span>Ground
                                                                            </h6>

                                                                        </div>
                                                                        <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                            <h6>
                                                                                <span>Apartment Extent</span>123456
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Units</span>RCC
                                                                            </h6>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <div className="pageNextBtn">
                                                        <button className="clear">Add New</button>&ensp;&ensp;
                                                        <button className="next">Next</button>
                                                    </div>
                                                </Row></div>
                                        </Accordion.Body>}
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
                                                                <th className="text-center">Code</th>
                                                                <th className="text-center">Name</th>
                                                                <th className="text-center">Attached Yes/No</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            <tr className="text-center">
                                                                <td>6</td>
                                                                <td>Rule-3</td>
                                                                <td >
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
                                                                        <Form.Floating >
                                                                            <Form.Select aria-label="No" >
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                        {!display2 && <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="W.E.F" defaultValue="wef" />
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
                                                            placeholder="Period in Months" defaultValue="10" />
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
                                                            placeholder="Advance in Rs" defaultValue="100000/-" />
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
                                                        <Row className="mb-4" key={index}>
                                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control defaultValue="12 Months"
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
                                                                    <Form.Control defaultValue="15000" name="fullName"
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
                                                                    <Form.Select aria-label="units" name="fullName" id="floatingInputCustom" placeholder="Monthly/ Yearly">
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Monthly/ Yearly
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={1} md={1} xs={12} className="col-sm-*">
                                                                {
                                                                    index === inputFields.length - 1 ?
                                                                        (
                                                                            <div className="pageNextBtn" style={{ padding: 0 }}>
                                                                                <button onClick={addInputField} style={{background:"#274c77", width:"10px", justifyContent:"center", color:"white"}}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
                                                                            </div>
                                                                        )
                                                                        :
                                                                        (""
                                                                        )
                                                                }
                                                            </Col>
                                                            </Row>
                                                    )
                                                })
                                            }
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>&ensp;&ensp;
                                                <button className="next" onClick={handleClick2}>Next</button>
                                            </div>
                                        </Accordion.Body>}
                                        {display2 && <Accordion.Body>
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
                                                                                <span>W.E.F</span>2234
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Period in Months</span>Ground
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Advance in Rs</span>2,200 Sq ft
                                                                            </h6>
                                                                        </div>
                                                                        <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                            <h6>
                                                                                <span>Rent Period</span>123456
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Rent Amount</span>RCC
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Monthly/Yearly</span>RCC
                                                                            </h6>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <div className="pageNextBtn">
                                                        <button className="clear">Add New</button>&ensp;&ensp;
                                                        <button className="next">Next</button>
                                                    </div>
                                                </Row></div>
                                        </Accordion.Body>}
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="linkDocuments mb-3">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Link Documents</Accordion.Header>
                                        {!display && <Accordion.Body >
                                            <Row className="mb-4">
                                                <Col lg={5} md={5} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="SRO Code" defaultValue="299" />
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
                                                            placeholder="Regular Document No." defaultValue="56" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Regular Document No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={5} md={5} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Book No." defaultValue="29" />
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
                                                            placeholder="Registration Year" defaultValue="2023" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Registration Year
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Cancel</button>&ensp;&ensp;
                                                <button onClick={handleClick} className="next">Done</button>
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
                                                        <button className="clear">Add New</button>&ensp;&ensp;
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
                                            <Form className="float-end">
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
                                            {/* <br></br><br></br> */}
                                            <div className="mt-5">
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
                                                                                placeholder="Loan Amount in Rs" defaultValue="10,00,000" />
                                                                            <Form.Label htmlFor="floatingInputCustom">
                                                                                Loan Amount in Rs
                                                                            </Form.Label>
                                                                        </Form.Floating>
                                                                    </Col></Row>
                                                                <div className="pageNextBtn">
                                                                    <button className="clear">Clear</button>
                                                                    <button onClick={handleNextClick} className="next">Next</button>
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
                                                                        placeholder="Land Cost Rs" defaultValue="1,00,00,000" />
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
                                                                        placeholder="Structured Cost Rs" defaultValue="150000" />
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Structured Cost Rs
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={5} md={5} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Other Property Cost Rs (Tree, Well, etc.,)" defaultValue="50,000" />
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
                                                                        placeholder="Value in Rs" defaultValue="5700" />
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
                                                                        placeholder="Consideration Value" defaultValue="25000" />
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Consideration Value
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Market Value" defaultValue="75,00,000" />
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
                                                                        placeholder="Annual Rent Rs" defaultValue="1,00,000" />
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Annual Rent Rs
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <div className="pageNextBtn">
                                                                <button className="clear">Clear</button>
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
                            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                        <div className="scheduleDetails mb-3">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0"  >
                                        <Accordion.Header>Basic Details
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Book No" defaultValue="555" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Book No
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Year" defaultValue="2023" />
                                                        <Form.Label htmlFor="floatingInputCustom">Year</Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="CS Number" defaultValue="456" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            CS No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <Row >
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="1 out of 2 schedules." defaultValue="1" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            1 out of 2 schedules : <span style={{ fontWeight: 'bold' }}>URBAN</span>
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="Jurisdication" id="floatingInputCustom" placeholder="Jurisdication">
                                                            <option value="1" selected>Kankipadu</option>
                                                            <option value="2">Guntur</option>
                                                            <option value="3">Ongole</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Jurisdication
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="villageName" id="floatingInputCustom" placeholder="villageName">
                                                            <option value="1">Amaravathi</option>
                                                            <option value="2" selected>Tenneru</option>
                                                            <option value="3">Karumanchi</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Village Name
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="scheduleDetails mb-3">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Schedule Details <span className="propertydetails-topbutton float-end">Permission Granted</span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown onSelect={handleItemClick}>
                                                                <Dropdown.Toggle id="local-body-dropdown" className="form-select" variant="" style={{ border: '1px solid #2279c5' }}>
                                                                    {selectedItem || 'Municipal Corporation'}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Local Body</th>
                                                                                <th className="text-center">Local Body Desc</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center">01</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='Municipal Corporation'
                                                                                    >
                                                                                        Municipal Corporation
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">02</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='SPL/ Selection grade municipality'>
                                                                                        SPL/ Selection grade municipality
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">03</td>
                                                                                <td>
                                                                                    <Dropdown.Item eventKey='other Municipality/ Notified Area'>
                                                                                        other Municipality/ Notified Area
                                                                                    </Dropdown.Item>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}>  Village Name  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown >
                                                                <Dropdown.Toggle id="" className=" form-select" style={{ border: '1px solid #2279c5' }} variant="">
                                                                    {selectedItems.length > 0 ? selectedItems.join(", ") : "All"}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Select</th>
                                                                                <th className="text-center" >Claimant Details</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("All")}>All</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("Rahul")}>Rahul</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("Bindu")}>Bindu</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("33")}>33</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("55")}>55</Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"><Form.Check aria-label="" /></td>
                                                                                <td><Dropdown.Item onClick={() => handleItemClick1("77")}>77</Dropdown.Item></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}>  Map Claimants  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="landUse" id="floatingInputCustom" placeholder="Land Use">
                                                            <option value="1" selected>Farming</option>
                                                            <option value="2">Rent</option>
                                                            <option value="3">Own Property</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Land Use
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="ULC Act">
                                                            <option value="1">Vacant Land</option>
                                                            <option value="2">Building</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            ULC Act
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="mapClaimants" id="floatingInputCustom" placeholder="Locality/ Habitation">
                                                            <option>Locality/ Habitation</option>
                                                            <option value="1" selected>Vuyyuru</option>
                                                            <option value="2">Koduru</option>
                                                            <option value="3">Gannavaram</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Locality/ Habitation
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Ward No." defaultValue="13" />
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
                                                            placeholder="Block No." defaultValue="19" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Block No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <div className="drop-section">
                                                        <Form.Floating>
                                                            <Dropdown>
                                                                <Dropdown.Toggle id="" className=" form-select remove-icon" variant="" style={{ border: '1px solid #2279c5' }}>
                                                                    Door No.
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <table className="tableData listData tableheadBg table mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-center">Door Number</th>
                                                                                <th className="text-center">Building Number</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="text-center">
                                                                                    <input type="" className="form-control1 " defaultValue="529" id="floatingPassword" placeholder=""></input></td>
                                                                                <td><Dropdown.Item href="#/action-1">
                                                                                    <input type="" className="form-control1" defaultValue="34" id="" placeholder=""></input></Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center"></td>
                                                                                <td><Dropdown.Item href="#/action-1">
                                                                                    <Row >
                                                                                        <Col lg={8} md={8} xs={12} ></Col>
                                                                                        <Col lg={4} md={4} xs={12} >
                                                                                            <img src="/images/plus-circle.svg" className="plus-circle-img" />
                                                                                        </Col>
                                                                                    </Row></Dropdown.Item></td>
                                                                            </tr>
                                                                            <tr>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-20px", }}>
                                                                <span style={{ background: "white", padding: "4px" }}> Door No.  </span>
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </div>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Survey No." defaultValue="4" />
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
                                                            placeholder="Sub-Survey No." defaultValue="92" />
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
                                                            placeholder="Survey Extent" defaultValue="12.38" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Survey Extent
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Layout Name." defaultValue="1" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Layout Name
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Layout Number" defaultValue="16" />
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
                                                            placeholder="Ptin Number" defaultValue="38" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Ptin Number
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Plot No" defaultValue="67" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Plot No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Plinth Area" defaultValue="500sqft" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Plinth Area
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="Building Type - House/Flat">
                                                            <option value="1" selected>Apartment</option>
                                                            <option value="2">House</option>
                                                            <option value="3">Hotel</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Building Type - House/Flat
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>
                                                <button className="next" onClick={handleShow}>Next</button>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Attention!</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body className="justify-content-center text-center">Given property details is in prohibited property Area</Modal.Body>
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
                                            <h6 className="mb-4"><small>Property Boundaries</small></h6>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="East" defaultValue="Magnum Saphire Apartment" />
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
                                                            placeholder="West" defaultValue="open Land" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            West
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="North" defaultValue="open Land" />
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
                                                            placeholder="South" defaultValue="KBR Park" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            South
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="PPD Desc" defaultValue="50" />
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
                                                            placeholder="Total Extent/Undivided Share" defaultValue="600sqft" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Total Extent/Undivided Share
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={12} md={12} xs={12} className="mb-3" >
                                                    <Col lg={12} md={12} xs={12} className="mb-3">
                                                        <Form.Floating>
                                                            <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                                <option value="1" >500 sq yd</option>
                                                                <option value="2">800 sq yd</option>
                                                                <option value="3">1000 sq yd</option>
                                                            </Form.Select>
                                                            <Form.Label htmlFor="floatingInputCustom">
                                                                Units
                                                            </Form.Label>
                                                        </Form.Floating>
                                                    </Col>
                                                </Col>
                                            </Row>
                                            <h6 className="mb-4"><small>Flat Boundaries</small></h6>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="East" defaultValue="Magnum Saphire Apartment" />
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
                                                            placeholder="West" defaultValue="Open Land" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            West
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="North" defaultValue="Open Land" />
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
                                                            placeholder="South" defaultValue="KBR Park" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            South
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>
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
                                                                            <button className="clear" onClick={handleShow1}>Add New</button>&ensp;&ensp;
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
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                            <option>Total Floors</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3"selected>3</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Total Floors
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Floor Number">
                                                                            <option>Floor Number</option>
                                                                            <option value="1" >1</option>
                                                                            <option value="2" selected>2</option>
                                                                            <option value="3">3</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Floor Number
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Structure Type">
                                                                            <option>Structure Type</option>
                                                                            <option value="1" selected>Concrete</option>
                                                                            <option value="2">Wood</option>
                                                                            <option value="3">Steel</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Structure Type
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Stage of Construction">
                                                                            <option>Stage of Construction</option>
                                                                            <option value="1" selected>Partial</option>
                                                                            <option value="2">Initial</option>
                                                                            <option value="3">Closure</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Stage of Construction
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Control
                                                                            id="floatingInputCustom"
                                                                            type="text"
                                                                            placeholder="Age" defaultValue="54" />
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
                                                                            placeholder="Plinth Area" defaultValue="200 sq yd" />
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Plinth Area
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                            </Row>
                                                            <div className="pageNextBtn">
                                                                <button className="clear" onClick={handleButtonClick}>Add new</button>
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
                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                        <option>Total Floors</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3" selected>3</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Total Floors
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Floor Number">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Floor Number</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Floor Number
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Structure Type">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option>Structure Type</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Structure Type
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Stage of Construction">
                                                                <Form.Floating>
                                                                    <Form.Select aria-label="units">
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Stage of Construction
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Age" defaultValue="54"/>
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
                                                                        placeholder="Plinth Area" defaultValue="200 sq yd"/>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Plinth Area
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col></Row>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <div className="pageNextBtn">
                                                            <button className="clear">Add New</button>&ensp;&ensp;
                                                            <Button onClick={handleClose1} className="next">
                                                                Next
                                                            </Button>
                                                        </div>
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
                                        {!display1 && <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Apartment Name" defaultValue="Fortune Heights" />
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
                                                            placeholder="Flat No" defaultValue="103" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Flat No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Apartment Extent" defaultValue="400 sq yd" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Apartment Extent
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                            <option>Units</option>
                                                            <option value="1" selected>1500 Sq Ft</option>
                                                            <option value="2">3500 Sq Ft</option>
                                                            <option value="3">2000 Sq Ft</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Units
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">clear</button>
                                                <button className="next" onClick={handleClick1}>Next</button>
                                            </div>
                                        </Accordion.Body>}
                                        {display1 && <Accordion.Body>
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
                                                                                <span>Apartment Name</span>2234
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Flat No</span>Ground
                                                                            </h6>

                                                                        </div>
                                                                        <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                            <h6>
                                                                                <span>Apartment Extent</span>123456
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Units</span>RCC
                                                                            </h6>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <div className="pageNextBtn">
                                                        <button className="clear">Add New</button>&ensp;&ensp;
                                                        <button className="next">Next</button>
                                                    </div>
                                                </Row></div>
                                        </Accordion.Body>}
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
                                                                <th className="text-center">Code</th>
                                                                <th className="text-center">Name</th>
                                                                <th className="text-center">Attached Yes/No</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            <tr className="text-center">
                                                                <td>6</td>
                                                                <td>Rule-3</td>
                                                                <td >
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
                                                                        <Form.Floating >
                                                                            <Form.Select aria-label="No" >
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                                                    <Col lg={12} md={12} xs={12} className="d-flex justify-content-center">
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
                                        {!display2 && <Accordion.Body>
                                            <Row className="mb-4">
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="W.E.F" defaultValue="wef" />
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
                                                            placeholder="Period in Months" defaultValue="10" />
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
                                                            placeholder="Advance in Rs" defaultValue="100000/-" />
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
                                                        <Row className="mb-4" key={index}>
                                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control defaultValue="12 Months"
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
                                                                    <Form.Control defaultValue="15000" name="fullName"
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
                                                                    <Form.Select aria-label="units" name="fullName" id="floatingInputCustom" placeholder="Monthly/ Yearly">
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </Form.Select>
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Monthly/ Yearly
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={1} md={1} xs={12} className="col-sm-*">
                                                                {
                                                                    index === inputFields.length - 1 ?
                                                                        (
                                                                            <div className="pageNextBtn" style={{ padding: 0 }}>
                                                                                <button onClick={addInputField} style={{background:"#274c77", width:"10px", justifyContent:"center", color:"white"}}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
                                                                            </div>
                                                                        )
                                                                        :
                                                                        (""
                                                                        )
                                                                }
                                                            </Col></Row>
                                                    )
                                                })
                                            }
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>&ensp;&ensp;
                                                <button className="next" onClick={handleClick2}>Next</button>
                                            </div>
                                        </Accordion.Body>}
                                        {display2 && <Accordion.Body>
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
                                                                                <span>W.E.F</span>2234
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Period in Months</span>Ground
                                                                            </h6>
                                                                            <h6>
                                                                                <span>Advance in Rs</span>2,200 Sq ft
                                                                            </h6>
                                                                        </div>
                                                                        <div className="d-flex align-items-center justify-content-evenly mb-3">
                                                                            <h6>
                                                                                <span>Rent Period</span>123456
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Rent Amount</span>RCC
                                                                            </h6>
                                                                            <h6 >
                                                                                <span>Monthly/Yearly</span>RCC
                                                                            </h6>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <div className="pageNextBtn">
                                                        <button className="clear">Add New</button>&ensp;&ensp;
                                                        <button className="next">Next</button>
                                                    </div>
                                                </Row></div>
                                        </Accordion.Body>}
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="linkDocuments mb-3">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Link Documents</Accordion.Header>
                                        {!display && <Accordion.Body >
                                            <Row className="mb-4">
                                                <Col lg={5} md={5} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="SRO Code" defaultValue="299" />
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
                                                            placeholder="Regular Document No." defaultValue="56" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Regular Document No.
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={5} md={5} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Book No." defaultValue="29" />
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
                                                            placeholder="Registration Year" defaultValue="2023" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Registration Year
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Cancel</button>&ensp;&ensp;
                                                <button onClick={handleClick} className="next">Done</button>
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
                                                        <button className="clear">Add New</button>&ensp;&ensp;
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
                                            <Form className="float-end">
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
                                            {/* <br></br><br></br> */}
                                            <div className="mt-5">
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
                                                                                placeholder="Loan Amount in Rs" defaultValue="10,00,000" />
                                                                            <Form.Label htmlFor="floatingInputCustom">
                                                                                Loan Amount in Rs
                                                                            </Form.Label>
                                                                        </Form.Floating>
                                                                    </Col></Row>
                                                                <div className="pageNextBtn">
                                                                    <button className="clear">Clear</button>
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
                                                                        placeholder="Land Cost Rs" defaultValue="1,00,00,000" />
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
                                                                        placeholder="Structured Cost Rs" defaultValue="150000" />
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Structured Cost Rs
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={5} md={5} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Other Property Cost Rs (Tree, Well, etc.,)" defaultValue="50,000" />
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
                                                                        placeholder="Value in Rs" defaultValue="5700" />
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
                                                                        placeholder="Consideration Value" defaultValue="25000" />
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Consideration Value
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <Col lg={6} md={6} xs={12} className="mb-3">
                                                                <Form.Floating>
                                                                    <Form.Control
                                                                        id="floatingInputCustom"
                                                                        type="text"
                                                                        placeholder="Market Value" defaultValue="75,00,000" />
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
                                                                        placeholder="Annual Rent Rs" defaultValue="1,00,000" />
                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                        Annual Rent Rs
                                                                    </Form.Label>
                                                                </Form.Floating>
                                                            </Col>
                                                            <div className="pageNextBtn">
                                                                <button className="clear">Clear</button>
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
                                            <p className="text-center1 text-center">This is total of two Schedule Duty Figures</p>
                                            <Row className="mb-4">
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Sale agreement Y/N?">
                                                            <option>Sale agreement Y/N?</option>
                                                            <option value="1" selected>Yes</option>
                                                            <option value="2">No</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Sale agreement Y/N?
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Section 16. enclosed Y/N?">
                                                            <option value="1" selected>Yes</option>
                                                            <option value="2">No</option>
                                                        </Form.Select>
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Section 16. enclosed Y/N?
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Sale Agreement stamp duty/Duty Paid..." defaultValue="1500" />
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
                                                            placeholder="Stamp Duty Borne by Doct" defaultValue="100 Rs" />
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
                                                            placeholder="Final Chargeable Value" defaultValue="5,00,000" />
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
                                                            placeholder="Other Fee" defaultValue="10,000" />
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
                                                            placeholder="Stamp Duty Payable" defaultValue="5000 Rs" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Stamp Duty Payable
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Transfer Duty Payable" defaultValue="5000 Rs" />
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
                                                            placeholder="DSD Payable" defaultValue="2000 Rs" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            DSD Payable
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="User Charges" defaultValue="1000 Rs" />
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
                                                            placeholder="Regn Fee Payable" defaultValue="35,000" />
                                                        <Form.Label htmlFor="floatingInputCustom">
                                                            Regn Fee Payable
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                            </Row>
                                            <div className="pageNextBtn">
                                                <button className="clear">Clear</button>
                                                <button className="next">Save</button>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>

                        </div>
                    </div>
                </div>
            </div></>
    );
};
export default PropertyDetails;
