import Head from "next/head";
import Accordion from 'react-bootstrap/Accordion';
import { Row, Col, Table, Form, FormFloating, Nav, Tab } from "react-bootstrap";
import Stepper from '../components/Stepper'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Link from "next/link";
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


    const [display7, setdisplay7] = useState(false)
    const handleClick7 = () => {
        setdisplay7(true)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show9, setShow9] = useState(false);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);

    const [show10, setShow10] = useState(false);
    const handleClose10 = () => setShow10(false);
    const handleShow10 = () => setShow10(true);

    const [show11, setShow11] = useState(false);
    const handleClose11 = () => setShow11(false);
    const handleShow11= () => setShow11(true);

    const [show12, setShow12] = useState(false);
    const handleClose12 = () => setShow12(false);
    const handleShow12= () => setShow12(true);

    const [show13, setShow13] = useState(false);
    const handleClose13 = () => setShow13(false);
    const handleShow13= () => setShow13(true);

    const [show14, setShow14] = useState(false);
    const handleClose14 = () => setShow14(false);
    const handleShow14= () => setShow14(true);

    const [show15, setShow15] = useState(false);
    const handleClose15 = () => setShow15(false);
    const handleShow15= () => setShow15(true);

    const [show16, setShow16] = useState(false);
    const handleClose16 = () => setShow16(false);
    const handleShow16= () => setShow16(true);

    const [show17, setShow17] = useState(false);
    const handleClose17 = () => setShow17(false);
    const handleShow17= () => setShow17(true);

    const [show18, setShow18] = useState(false);
    const handleClose18 = () => setShow18(false);
    const handleShow18= () => setShow18(true);

    const [show19, setShow19] = useState(false);
    const handleClose19 = () => setShow19(false);
    const handleShow19= () => setShow19(true);

    const [show20, setShow20] = useState(false);
    const handleClose20 = () => setShow20(false);
    const handleShow20= () => setShow20(true);

    const [show21, setShow21] = useState(false);
    const handleClose21 = () => setShow21(false);
    const handleShow21= () => setShow21(true);

    const [show22, setShow22] = useState(false);
    const handleClose22 = () => setShow22(false);
    const handleShow22= () => setShow22(true);

    const [show23, setShow23] = useState(false);
    const handleClose23 = () => setShow23(false);
    const handleShow23= () => setShow23(true);

    const [show24, setShow24] = useState(false);
    const handleClose24 = () => setShow24(false);
    const handleShow24= () => setShow24(true);

    const [show25, setShow25] = useState(false);
    const handleClose25 = () => setShow25(false);
    const handleShow25= () => setShow25(true);

    const [show26, setShow26] = useState(false);
    const handleClose26 = () => setShow26(false);
    const handleShow26= () => setShow26(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);
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
    const [buttonClicked, setButtonClicked] = useState(false);
    function handleButtonClick() {
        setButtonClicked(true);
    }
    const [cards1, setCards1] = useState([]);
    const [buttonClicked1, setButtonClicked1] = useState(false);
    function handleButtonClick1() {
        if (cards1.length === 0) {
            const newCard1 = { title: "New", description: "newcard." };
            setCards1([newCard1, ...cards1]);
        }
        setButtonClicked1(true);
    }

    const [cards3, setCards3] = useState([]);
    const [buttonClicked3, setButtonClicked3] = useState(false);
    function handleButtonClick3() {
        if (cards3.length === 0) {
            const newCard3 = { title: "New", description: "newcard." };
            setCards3([newCard3, ...cards3]);
        }
        setButtonClicked3(true);
    }

    const [cards5, setCards5] = useState([]);
    const [buttonClicked5, setButtonClicked5] = useState(false);
    function handleButtonClick5() {
        if (cards5.length === 0) {
            const newCard5 = { title: "New", description: "newcard." };
            setCards5([newCard5, ...cards5]);
        }
        setButtonClicked5(true);
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
    const [inputFields1, setInputFields1] = useState([{
        fullName1: '',
    }]);
    const addInputField1 = () => {
        setInputFields1([...inputFields1, {
            fullName1: '',
        }])
    }
    const [inputFields2, setInputFields2] = useState([{
        fullName2: '',
    }]);
    const addInputField2 = () => {
        setInputFields2([...inputFields2, {
            fullName2: '',
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
                       <div className="pageTableContainer pageTableMain mt-4">
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
                                                            <option value="0">Please Select</option>
                                                            <option value="1" selected>Kankipadu</option>
                                                            <option value="2">Guntur</option>
                                                            <option value="3">Ongole</option>
                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom" className="float-label">
                                                            Jurisdication
                                                        </Form.Label>
                                                    </Form.Floating>
                                                </Col>
                                                <Col lg={3} md={3} xs={12} className="mb-3">
                                                    <Form.Floating>
                                                        <Form.Select aria-label="villageName" id="floatingInputCustom" placeholder="villageName">
                                                                            <option value="0">Please Select</option>
                                                                            <option value="1" selected>Amaravathi</option>
                                                                            <option value="2" >Tenneru</option>
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
                                                        <Accordion.Body className="accordionContent-sd">
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
                                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
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
                                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
                                                                                <span style={{ background: "white", padding: "4px" }}>  Map Claimants  </span>
                                                                            </Form.Label>
                                                                        </Form.Floating>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="landUse" id="floatingInputCustom" placeholder="Land Use">
                                                                        <option value="0">Please Select</option>
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
                                                                        <option value="0">Please Select</option>
                                                                            <option value="1" selected>Vacant Land</option>
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
                                                                        <option value="0">Please Select</option>
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
                                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
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
                                                                            placeholder="Plinth Area" defaultValue="500 sq ft" />
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Plinth Area
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="Building Type - House/Flat">
                                                                        <option value="0">Please Select</option>
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
                                                                    <Modal.Body className="justify-content-center text-center"><h6>Given property details is in prohibited property Area</h6></Modal.Body>
                                                                    <Modal.Footer className="justify-content-center">
                                                                        <Button className="digital-sign-btn-enable" onClick={handleClose}>
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
                                                                            placeholder="Total Extent/Undivided Share" defaultValue="600 sq ft" />
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Total Extent/Undivided Share
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={12} md={12} xs={12} className="mb-3" >
                                                                    <Col lg={12} md={12} xs={12} className="mb-3">
                                                                        <Form.Floating>
                                                                            <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                                            <option value="0">Please Select</option>
                                                                                <option value="1" selected>500 sq yd</option>
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
                                                                             <div>
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
                                                                                        <img src="/images/edit-icon.svg"  onClick={handleShow6}/>
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
                                                                                            <button className="clear" onClick={handleShow1}>Add New</button>
                                                                                            <button className="next">Next</button>
                                                                                        </div>
                                                                                    </Row>
                                                                                </div>
                                                                             </div>
                                                                          </Accordion.Body>
                                                                          <Modal show={show6} onHide={handleClose6}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Structure Details </Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                                    <option value="0">Please Select</option>
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
                                                                                    <option value="0">Please Select</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>Concrete</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>Partial</option>
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
                                                                                        placeholder="Age" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Age
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
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
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose6} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div></Col></Row>
                                                                    </Modal.Body>

                                                                </Modal>

                                                                <Modal show={show1} onHide={handleClose1}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Structure Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3" >3</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Total Floors
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Floor Number">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2" >2</option>
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >Concrete</option>
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >Partial</option>
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
                                                                                        placeholder="Age"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Age
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Plinth Area"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Plinth Area
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose1} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div></Col>
                                                                            </Row>

                                                                    </Modal.Body>
                                                                    {/* <Modal.Footer>

                                                                    </Modal.Footer> */}
                                                                </Modal>

                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="apartmentDetails mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Apartment Details  </Accordion.Header>

                                                         <Accordion.Body>
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
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow9}/>
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
                                                                        <button className="clear"  onClick={handleShow10}>Add New</button>
                                                                        <button className="next" >Next</button>
                                                                    </div>
                                                                </Row></div>
                                                                <Modal show={show10} onHide={handleClose10}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Apartment Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Name
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No."  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Flat No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Extent
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} id="floatingInputCustom" placeholder="Stage of Construction">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >200 Sq Yd</option>
                                                                                        <option value="2">800 Sq Yd</option>
                                                                                        <option value="3">600 Sq Yd</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Units
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose10} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show9} onHide={handleClose9}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Apartment Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name" defaultValue="Magnum Saphire" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Name
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Flat No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Extent
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} id="floatingInputCustom" placeholder="Stage of Construction">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>200 Sq Yd</option>
                                                                                        <option value="2">800 Sq Yd</option>
                                                                                        <option value="3">600 Sq Yd</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Units
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose9} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            {/* <div className="enclosureDetails mb-3">
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
                                            </div> */}
                                            <div className="leaseDetails mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Lease Details</Accordion.Header>

                                                        <Accordion.Body>
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
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow22}/>
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
                                                                                                <span>Monthly /Yearly</span>RCC
                                                                                            </h6>
                                                                                        </div>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <div className="pageNextBtn">
                                                                        <button className="clear" onClick={handleShow21}>Add New</button>
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row></div>
                                                                <Modal show={show21} onHide={handleClose21}  className="modal-lg">
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Lease Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                    <Row className="mb-4">
                                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Control
                                                                            id="floatingInputCustom"
                                                                            type="text"
                                                                            placeholder="W.E.F"  />
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
                                                                            placeholder="Period in Months"/>
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
                                                            <h4 className="my-5">Rent Details</h4>
                                                            {
                                                                inputFields.map((data, index) => {
                                                                    const { fullName } = data;
                                                                    return (
                                                                        <Row className="mb-4" key={index} >
                                                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
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
                                                                                    <Form.Control  name="fullName"
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >One</option>
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
                                                                                                <button onClick={addInputField} style={{ background: "#274c77", width: "10px", justifyContent: "center", color: "white" }}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
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
                                                            <Row>
                                                                            <Col lg={12} md={12} xs={12} >
                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose21} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                            </Col></Row>

                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show22} onHide={handleClose22} className="modal-lg">
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Lease Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
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
                                                            <h4  className="my-5">Rent Details</h4>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>One</option>
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
                                                                                                <button onClick={addInputField} style={{ background: "#274c77", width: "10px", justifyContent: "center", color: "white" }}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
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
                                                             <Row>
                                                                            <Col lg={12} md={12} xs={12} >
                                                            <div className="pageNextBtn">
                                                            <Button onClick={handleClose22} className="next">
                                                                                Save
                                                                            </Button>
                                                            </div></Col></Row>

                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="linkDocuments mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Link Documents</Accordion.Header>

                                                         <Accordion.Body>
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
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow16}/>
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
                                                                        <button className="clear" onClick={handleShow15}>Add New</button>
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row></div>
                                                                <Modal show={show15} onHide={handleClose15}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Link Documents</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        SRO Code
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Regular Document No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Book No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Registration Year
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent"/>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Schedule No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose15} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show16} onHide={handleClose16}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Link Documents</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name" defaultValue="33" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        SRO Code
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." defaultValue="549" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Regular Document No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="5" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Book No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="2023" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Registration Year
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Schedule No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose16} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="marketValue mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Market Value  <span className="propertydetails-topbutton1 float-end mt-3">
                                                        </span></Accordion.Header>
                                                        <Accordion.Body>

                                                                    <Form className="float-end radioTop-pd">
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
                                                                    <div className="mt-5">
                                                                        <div>
                                                                            {cards1.map((card, index) => (
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
                                                                        {!buttonClicked1 && (
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
                                                                                        <button onClick={handleButtonClick1} className="next">Next</button>
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
                                                                                    <option value="0">Please Select</option>
                                                                                    <option value="1" selected>Kankipadu</option>
                                                                                    <option value="2">Guntur</option>
                                                                                    <option value="3">Ongole</option>
                                                                                </Form.Select>
                                                                                <Form.Label htmlFor="floatingInputCustom" class="float-label1">
                                                                                    Jurisdication
                                                                                </Form.Label>
                                                                            </Form.Floating>
                                                                        </Col>
                                                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                                                            <Form.Floating>
                                                                                <Form.Select aria-label="villageName" id="floatingInputCustom" placeholder="villageName">
                                                                                    <option value="0">Please Select</option>
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
                                                                <Accordion.Body className="accordionContent-sd">
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
                                                                                    <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
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
                                                                                    <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
                                                                                        <span style={{ background: "white", padding: "4px" }}>  Map Claimants  </span>
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </div>
                                                                        </Col>
                                                                        <Col lg={6} md={6} xs={12} className="mb-3">
                                                                            <Form.Floating>
                                                                                <Form.Select aria-label="landUse" id="floatingInputCustom" placeholder="Land Use">
                                                                                    <option value="0">Please Select</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                    <option value="1" selected>Vacant Land</option>
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
                                                                                    <option value="0">Please Select</option>
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
                                                                                    <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
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
                                                                                    placeholder="Plinth Area" defaultValue="500 sq ft" />
                                                                                <Form.Label htmlFor="floatingInputCustom">
                                                                                    Plinth Area
                                                                                </Form.Label>
                                                                            </Form.Floating>
                                                                        </Col>
                                                                        <Col lg={4} md={4} xs={12} className="mb-3">
                                                                            <Form.Floating>
                                                                                <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="Building Type - House/Flat">
                                                                                    <option value="0">Please Select</option>
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
                                                                        <button className="next" onClick={handleShow2}>Next</button>
                                                                        <Modal show={show2} onHide={handleClose2}>
                                                                            <Modal.Header closeButton>
                                                                                <Modal.Title>Attention!</Modal.Title>
                                                                            </Modal.Header>
                                                                            <Modal.Body className="justify-content-center text-center"><h6>Given property details is in prohibited property Area</h6></Modal.Body>
                                                                            <Modal.Footer className="justify-content-center">
                                                                                <Button className="submit" onClick={handleClose2}>
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
                                                                                    placeholder="Total Extent/Undivided Share" defaultValue="600 sq ft" />
                                                                                <Form.Label htmlFor="floatingInputCustom">
                                                                                    Total Extent/Undivided Share
                                                                                </Form.Label>
                                                                            </Form.Floating>
                                                                        </Col>
                                                                        <Col lg={12} md={12} xs={12} className="mb-3" >
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                                                        <option value="0">Please Select</option>
                                                                                        <option value="1" selected>500 sq yd</option>
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
                                                                    <div>
                                                                        <div>
                                                                            <div >
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
                                                                                                            <img src="/images/edit-icon.svg" onClick={handleShow7} />
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
                                                                                            <button className="clear" onClick={handleShow3}>Add New</button>
                                                                                            <button className="next">Next</button>
                                                                                        </div>
                                                                                    </Row>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                <Modal show={show7} onHide={handleClose7}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Structure Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                                    <option value="0">Please Select</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2" selected>Two</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>One</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>One</option>
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
                                                                                        placeholder="Age" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Age
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
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
                                                                            <Col lg={12} md={12} xs={12} >
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose7} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show3} onHide={handleClose3}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Structure Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3">3</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Total Floors
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Floor Number">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2" >Two</option>
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >One</option>
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >One</option>
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
                                                                                        placeholder="Age"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Age
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Plinth Area"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Plinth Area
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose3} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="apartmentDetails mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Apartment Details  </Accordion.Header>

                                                     <Accordion.Body>
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
                                                                                    <button className="edit" >
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow12}/>
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
                                                                        <button className="clear" onClick={handleShow11}>Add New</button>
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row></div>
                                                                <Modal show={show12} onHide={handleClose12}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Apartment Details </Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name" defaultValue="Magnum Saphire" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Name
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Flat No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Extent
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}  id="floatingInputCustom" placeholder="Stage of Construction">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0" >Please Select</option>
                                                                                        <option value="1" selected>200 Sq Yd</option>
                                                                                        <option value="2">800 Sq Yd</option>
                                                                                        <option value="3">600 Sq Yd</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Units
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose12} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div></Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show11} onHide={handleClose11}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Apartment Details </Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Name
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No."  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Flat No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Extent
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} id="floatingInputCustom" placeholder="Stage of Construction">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >200 Sq Yd</option>
                                                                                        <option value="2">800 Sq Yd</option>
                                                                                        <option value="3">600 Sq Yd</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Units
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose11} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>

                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            {/* <div className="enclosureDetails mb-3">
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
                                            </div> */}
                                            <div className="leaseDetails mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Lease Details</Accordion.Header>

                                                       <Accordion.Body>
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
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow24}/>
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
                                                                                                <span>Monthly /Yearly</span>RCC
                                                                                            </h6>
                                                                                        </div>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <div className="pageNextBtn">
                                                                        <button className="clear" onClick={handleShow23}>Add New</button>
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row></div>
                                                        </Accordion.Body>
                                                        <Modal show={show23} onHide={handleClose23} className="modal-lg">
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Lease Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
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
                                                                            placeholder="Period in Months"  />
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
                                                                            placeholder="Advance in Rs"  />
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Advance in Rs
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                            </Row>
                                                            <h4  className="my-5">Rent Details</h4>
                                                            {
                                                                inputFields.map((data, index) => {
                                                                    const { fullName } = data;
                                                                    return (
                                                                        <Row className="mb-4" key={index}>
                                                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
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
                                                                                    <Form.Control  name="fullName"
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >One</option>
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
                                                                                                <button onClick={addInputField} style={{ background: "#274c77", width: "10px", justifyContent: "center", color: "white" }}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
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
                                                            <Col lg={12} md={12} xs={12}>
                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose23} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                            </Col>

                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show24} onHide={handleClose24} className="modal-lg">
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Lease Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
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
                                                            <h4  className="my-5">Rent Details</h4>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>One</option>
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
                                                                                                <button onClick={addInputField} style={{ background: "#274c77", width: "10px", justifyContent: "center", color: "white" }}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
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
                                                                    <Col lg={12} md={12} xs={12}>
                                                                    <div className="pageNextBtn">
                                                                            <Button onClick={handleClose24} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                    </Col>
                                                                    </Modal.Body>
                                                                </Modal>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="linkDocuments mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Link Documents</Accordion.Header>

                                                       <Accordion.Body>
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
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow18}/>
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
                                                                        <button className="clear" onClick={handleShow17}>Add New</button>
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row></div>
                                                                <Modal show={show17} onHide={handleClose17}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Link Documents</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name"/>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        SRO Code
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Regular Document No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent"/>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Book No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent"/>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Registration Year
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Schedule No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose17} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show18} onHide={handleClose18}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Link Documents</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name" defaultValue="33" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        SRO Code
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." defaultValue="549" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Regular Document No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="5" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Book No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="2023" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Registration Year
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Schedule No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose18} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="marketValue mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Market Value  <span className="propertydetails-topbutton1 float-end mt-3">
                                                                </span></Accordion.Header>
                                                                <Accordion.Body>
                                                                <Form className="float-end radioTop-pd">
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
                                                            <div className="mt-5">
                                                                <div>
                                                                    {cards3.map((card, index) => (
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
                                                                {!buttonClicked3 && (
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
                                                                                <button onClick={handleButtonClick3} className="next">Next</button>
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
                                                                        <option value="0">Please Select</option>
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
                                                                        <option value="0">Please Select</option>
                                                                            <option value="1" selected>Amaravathi</option>
                                                                            <option value="2" selected>Tenneru</option>
                                                                            <option value="3">Karumanchi</option>
                                                                        </Form.Select>
                                                                        <Form.Label htmlFor="floatingInputCustom" >
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
                                                        <Accordion.Body className="accordionContent-sd">
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
                                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
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
                                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
                                                                                <span style={{ background: "white", padding: "4px" }}>  Map Claimants  </span>
                                                                            </Form.Label>
                                                                        </Form.Floating>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={6} md={6} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="landUse" id="floatingInputCustom" placeholder="Land Use">
                                                                        <option value="0">Please Select</option>
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
                                                                        <option value="0">Please Select</option>
                                                                            <option value="1" selected>Vacant Land</option>
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
                                                                        <option value="0">Please Select</option>
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
                                                                            <Form.Label htmlFor="floatingInputCustom" style={{ top: "-25px", }}>
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
                                                                            placeholder="Plinth Area" defaultValue="500 sq ft" />
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Plinth Area
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Select aria-label="localBody" id="floatingInputCustom" placeholder="Building Type - House/Flat">
                                                                        <option value="0">Please Select</option>
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
                                                                <button className="next" onClick={handleShow4}>Next</button>
                                                                <Modal show={show4} onHide={handleClose4}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Attention!</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body className="justify-content-center text-center"><h6>Given property details is in prohibited property Area</h6></Modal.Body>
                                                                    <Modal.Footer className="justify-content-center">
                                                                        <Button className="submit" onClick={handleClose4}>
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
                                                                            placeholder="Total Extent/Undivided Share" defaultValue="600 sq ft" />
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Total Extent/Undivided Share
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                                <Col lg={12} md={12} xs={12} className="mb-3" >
                                                                    <Col lg={12} md={12} xs={12} className="mb-3">
                                                                        <Form.Floating>
                                                                            <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Units">
                                                                            <option value="0">Please Select</option>
                                                                                <option value="1" selected>500 sq yd</option>
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
                                                                <div>
                                                                    <div>

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
                                                                                                            <img src="/images/edit-icon.svg" onClick={handleShow8}/>
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
                                                                                            <button className="clear" onClick={handleShow5}>Add New</button>
                                                                                            <button className="next">Next</button>
                                                                                        </div>
                                                                                    </Row>
                                                                                </div>
                                                                    </div>

                                                                </div>
                                                                <Modal show={show8} onHide={handleClose8}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Structure Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                                    <option value="0">Please Select</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2" selected>Two</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>One</option>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2" selected>Two</option>
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
                                                                                        placeholder="Age" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Age
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
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
                                                                            <Col lg={12} md={12} xs={12} >
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose8} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show5} onHide={handleClose5}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Structure Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units" id="floatingInputCustom" placeholder="Total Floors">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1">1</option>
                                                                                        <option value="2">2</option>
                                                                                        <option value="3" >3</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Total Floors
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3" id="floatingInputCustom" placeholder="Floor Number">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2" >Two</option>
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >One</option>
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2" >Two</option>
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
                                                                                        placeholder="Age" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Age
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Plinth Area"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Plinth Area
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose1} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="apartmentDetails mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Apartment Details  </Accordion.Header>

                                                         <Accordion.Body>
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
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow14}/>
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
                                                                        <button className="clear" onClick={handleShow13}>Add New</button>
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row></div>
                                                                <Modal show={show13} onHide={handleClose13}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Apartment Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
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
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No."/>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Flat No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
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
                                                                            <Col lg={12} md={12} xs={12} id="floatingInputCustom" placeholder="Stage of Construction">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >200 Sq Yd</option>
                                                                                        <option value="2">800 Sq Yd</option>
                                                                                        <option value="3">600 Sq Yd</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Units
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose13} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show14} onHide={handleClose14}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Apartment Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name" defaultValue="Magnum Saphire" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Name
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Flat No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Apartment Extent
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} id="floatingInputCustom" placeholder="Stage of Construction">
                                                                                <Form.Floating>
                                                                                    <Form.Select aria-label="units">
                                                                                    <option value="0" >Please Select</option>
                                                                                        <option value="1" selected>200 Sq Yd</option>
                                                                                        <option value="2">800 Sq Yd</option>
                                                                                        <option value="3">600 Sq Yd</option>
                                                                                    </Form.Select>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Units
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose14} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>

                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            {/* <div className="enclosureDetails mb-3">
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
                                            </div> */}
                                            <div className="leaseDetails mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Lease Details</Accordion.Header>

                                                        <Accordion.Body>
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
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow26}/>
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
                                                                                                <span>Monthly /Yearly</span>RCC
                                                                                            </h6>
                                                                                        </div>
                                                                                    </Col>
                                                                                </Row>
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <div className="pageNextBtn">
                                                                        <button className="clear" onClick={handleShow25}>Add New</button>
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row></div>
                                                                <Modal show={show25} onHide={handleClose25} className="modal-lg">
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Lease Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                    <Row className="mb-4">
                                                                <Col lg={4} md={4} xs={12} className="mb-3">
                                                                    <Form.Floating>
                                                                        <Form.Control
                                                                            id="floatingInputCustom"
                                                                            type="text"
                                                                            placeholder="W.E.F"  />
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
                                                                            placeholder="Advance in Rs"  />
                                                                        <Form.Label htmlFor="floatingInputCustom">
                                                                            Advance in Rs
                                                                        </Form.Label>
                                                                    </Form.Floating>
                                                                </Col>
                                                            </Row>
                                                            <h4  className="my-5">Rent Details</h4>
                                                            {
                                                                inputFields.map((data, index) => {
                                                                    const { fullName } = data;
                                                                    return (
                                                                        <Row className="mb-4" key={index}>
                                                                            <Col lg={3} md={3} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
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
                                                                                    <Form.Control name="fullName"
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
                                                                                    <option value="0" selected>Please Select</option>
                                                                                        <option value="1" >One</option>
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
                                                                                                <button onClick={addInputField} style={{ background: "#274c77", width: "10px", justifyContent: "center", color: "white" }}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
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
                                                                    <Col lg={12} md={12} xs={12}>
                                                                    <div className="pageNextBtn">
                                                                            <Button onClick={handleClose25} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                    </Col>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show26} onHide={handleClose26} className="modal-lg">
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Lease Details</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
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
                                                            <h4  className="my-5">Rent Details</h4>
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
                                                                                    <option value="0">Please Select</option>
                                                                                        <option value="1" selected>One</option>
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
                                                                                                <button onClick={addInputField} style={{ background: "#274c77", width: "10px", justifyContent: "center", color: "white" }}><span className="d-flex justify-content-center mx-auto"><strong>+</strong></span></button>
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
                                                            <Col lg={12} md={12} xs={12}>
                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose26} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                            </Col>

                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="linkDocuments mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Link Documents</Accordion.Header>

                                                        <Accordion.Body>
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
                                                                                        <img src="/images/edit-icon.svg" onClick={handleShow20}/>
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
                                                                        <button className="clear" onClick={handleShow19}>Add New</button>
                                                                        <button className="next">Next</button>
                                                                    </div>
                                                                </Row></div>
                                                                <Modal show={show19} onHide={handleClose19}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Add Link Documents</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name"  />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        SRO Code
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Regular Document No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Book No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Registration Year
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} >
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent"/>
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Schedule No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose19} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                                <Modal show={show20} onHide={handleClose20}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>Edit Link Documents</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <Row className="mb-4">
                                                                        <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Name" defaultValue="33" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        SRO Code
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Flat No." defaultValue="549" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Regular Document No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="5" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Book No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="2023" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Registration Year
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12} className="mb-3">
                                                                                <Form.Floating>
                                                                                    <Form.Control
                                                                                        id="floatingInputCustom"
                                                                                        type="text"
                                                                                        placeholder="Apartment Extent" defaultValue="54" />
                                                                                    <Form.Label htmlFor="floatingInputCustom">
                                                                                        Schedule No.
                                                                                    </Form.Label>
                                                                                </Form.Floating>
                                                                            </Col>
                                                                            <Col lg={12} md={12} xs={12}>
                                                                            <div className="pageNextBtn">
                                                                            <Button onClick={handleClose20} className="next">
                                                                                Save
                                                                            </Button>
                                                                        </div>
                                                                            </Col>
                                                                            </Row>
                                                                    </Modal.Body>
                                                                </Modal>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="marketValue mb-3">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Market Value  <span className="propertydetails-topbutton1 float-end mt-3">
                                                                <Form className="float-end radioTop-pd">
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
                                                            </span></Accordion.Header>
                                                        <Accordion.Body>

                                                            <div className="mt-5">
                                                                <div>
                                                                    {cards5.map((card, index) => (
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
                                                                {!buttonClicked5 && (
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
                                                                                <button onClick={handleButtonClick5} className="next">Next</button>
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
                                                                        <option value="0">Please Select</option>
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
                                                                        <option value="0">Please Select</option>
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
                                                                <Link href="/verification">
                                                                <button className="next">Save</button>
                                                                </Link>
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
