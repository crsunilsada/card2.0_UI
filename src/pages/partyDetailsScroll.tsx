import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import { useEffect, useState } from "react";
import { Row, Col, Tab, Nav, Form, Modal, Tooltip, OverlayTrigger } from "react-bootstrap";
import Stepper from '../components/Stepper';
const partyDetailsScroll = () => {
  const [activeTab, setActiveTab] = useState('first');
  const handleNextClick = () => {
    if (activeTab === 'first') {
      setActiveTab('second');
    }
  };
  const [selectedOption, setSelectedOption] = useState("S/o");
  const handleOptionClick = (event) => { setSelectedOption(event.target.textContent); };
  useEffect(() => { require("bootstrap/dist/js/bootstrap.bundle.min.js"); }, []);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);

  const tooltip = (
    <Tooltip id="tooltip-top">
      <Form.Floating>
        <p>Flat 120, Block C, Anjali Residency, Benzcircle, Vijayawada.</p>
      </Form.Floating>
    </Tooltip>
  );
  const tooltip1 = (
    <Tooltip id="tooltip-top">
      <Form.Floating>
        <p>Flat 10, Krishnanjali Residency, kukatpally, Hyderabad.</p>
      </Form.Floating>
    </Tooltip>
  );
  const tooltip2 = (
    <Tooltip id="tooltip-top">
      <Form.Floating>
        <p>Flat 1A/2, Block A, Sanjan Enclave, Hitec city, Hyderabad.</p>
      </Form.Floating>
    </Tooltip>
  );
  return (
    <><div><Stepper showReason2={true} /></div>
      <Stepper showReason={true} />
      <div className="pageMainWrap innerpage">
        <Head>
          <title>Party Details Scroll - CARD</title>
          <meta name="description" content="login" />
          <link rel="icon" href="/igrsfavicon.ico" />
        </Head>
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <button className="active partyDetails">Party Details</button>
              <button className="imaging">Imaging</button>
            </div>
            <div className="pageTableContainer partyDetailsMain">
              <div className="partyDetails">
                <div className="executanttantTable">
                  <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                    <div className="tabsList">
                      <Nav variant="pills">
                        <Nav.Item>
                          <Nav.Link eventKey="first" className="mb-3">
                            <span>4</span>Executant List
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second" className="mb-3">
                            <span>4</span>Claimant List
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <div className="PropertyScrollBar">
                            <Col lg={4} md={6} xs={12} className="mb-3">
                              <div className="card">
                                <div className="cardHeader">
                                  <h5>
                                    Presentant - <span>Executant</span>
                                  </h5>
                                </div>
                                <div className="cardBody cardSpaceBetween">
                                  <Row>
                                    <Col lg={4} md={7} xs={12}>
                                      <img src="/images/party-executantimg.jpg" />
                                    </Col>
                                    <Col lg={8} md={7} xs={12}>
                                      <div className="d-flex align-items-center mb-3">
                                        <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Name</span>Sanjay Kumar
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>Aadhaar No.</span>XXXXXX7689
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Rel & Relation</span>S/o Krishna
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>PAN / form 60/61</span>CBAGK0769K
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <OverlayTrigger
                                          overlay={tooltip} placement="bottom">
                                        <h6>
                                          <span>Address</span>Flat 120,
                                          Block C, Anjali Residency...
                                        </h6>
                                        </OverlayTrigger>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                            <Col lg={4} md={6} xs={12} className="mb-3">
                            <div className="card">
                              <div className="cardHeader d-flex align-items-center justify-content-between">
                                <h5>
                                  Executant (Raju) - <span>Representative</span>
                                </h5>
                                <h4 className="cardBtns">
                                    <button type="button" onClick={handleShow1}>
                                      <img src="/images/edit-icon.svg" />
                                    </button>
                                  </h4>
                                </div>
                                <div className="cardBody cardSpaceBetween">
                                  <Row>
                                    <Col lg={4} md={7} xs={12}>
                                      <img src="/images/krishna.svg" />
                                    </Col>
                                    <Col lg={8} md={7} xs={12}>
                                      <div className="d-flex align-items-center mb-3">
                                        <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Name</span>Krishna Kanth
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>Aadhaar No.</span>XXXXXX1243
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Rel & Relation</span>S/o Subbarao
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>PAN / form 60/61</span>DBAGK0721B
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <OverlayTrigger overlay={tooltip1} placement="bottom">
                                        <h6>
                                          <span>Address</span>Flat 10, Krishnanjali Residency...
                                        </h6>
                                        </OverlayTrigger>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                            <Col lg={4} md={6} xs={12} className="mb-3">
                            <div className="card">
                              <div className="cardHeader d-flex align-items-center justify-content-between">
                                <h5>
                                  Executant
                                </h5>
                                <h4 className="cardBtns">
                                    <button onClick={handleShow2}>
                                      <img src="/images/edit-icon.svg" />
                                    </button>
                                  </h4>
                                </div>
                                <div className="cardBody cardSpaceBetween">
                                  <Row>
                                    <Col lg={4} md={7} xs={12}>
                                      <img src="/images/Dharmendar.svg" />
                                    </Col>
                                    <Col lg={8} md={7} xs={12}>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Name</span>Dharmendra
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>Aadhaar No.</span>XXXXXX7689
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Rel & Relation</span>S/o Parthasarthi
                                        </h6>
                                      </Col>
                                      <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>PAN / form 60/61</span>ABCKG0123A
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <OverlayTrigger overlay={tooltip2} placement="bottom">
                                        <h6>
                                          <span>Address</span>Flat 1A/2,
                                          Block A, Sanjan Enclave...
                                        </h6>
                                        </OverlayTrigger>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                            <Col lg={4} md={6} xs={12} className="mb-3">
                              <div className="card">
                                <div className="cardHeader d-flex align-items-center justify-content-between">
                                  <h5>
                                  <span>Executant</span>
                                  </h5>
                                  <h4 className="cardBtns">
                                    <button type="button" onClick={handleShow3}>
                                      <img src="/images/edit-icon.svg" />
                                    </button>
                                  </h4>
                                </div>
                                <div className="cardBody cardSpaceBetween">
                                  <Row>
                                    <Col lg={4} md={7} xs={12} className="partydetails-card-image">
                                    </Col>
                                    <Col lg={8} md={7} xs={12}>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Name</span>Ajay Kumar
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="mb-3">
                                          <span>Passport No.</span>J8369854
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Rel & Relation</span>S/o Krishna
                                        </h6>
                                      </Col>
                                      <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>PAN / form 60/61</span>CBAGK0769K
                                        </h6>
                                      </Col>
                                      </div>
                                      <div className="d-flex align-items-center">
                                      <OverlayTrigger overlay={tooltip} placement="bottom">
                                        <h6>
                                          <span>Address</span>Flat 120,
                                          Block C, Anjali Residency...
                                        </h6>
                                        </OverlayTrigger>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </Row>
                        <div className="pageNextBtn">
                          <button onClick={handleNextClick} className="next">
                            Next
                          </button>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                    <Tab.Content>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <div className="PropertyScrollBar">
                            <Col lg={4} md={6} xs={12} className="mb-3">
                              <div className="card">
                                <div className="cardHeader d-flex align-items-center justify-content-between">
                                  <h5>
                                    <span>Claimant</span>
                                  </h5>
                                  <h4 className="cardBtns">
                                    <button type="button" onClick={handleShow}>
                                      <img src="/images/edit-icon.svg" />
                                    </button>
                                  </h4>
                                </div>
                                <div className="cardBody cardSpaceBetween">
                                  <Row>
                                    <Col lg={4} md={7} xs={12}>
                                      <img src="/images/party-executantimg.jpg" />
                                    </Col>
                                    <Col lg={8} md={7} xs={12}>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Name</span>Sanjay Kumar
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>Aadhaar No.</span>XXXXXX7689
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Rel & Relation</span>S/o Krishna
                                        </h6>
                                      </Col>
                                      <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>PAN / form 60/61</span>CBAGK0769K
                                        </h6>
                                      </Col>
                                      </div>
                                      <div className="d-flex align-items-center">
                                      <OverlayTrigger overlay={tooltip} placement="bottom">
                                        <h6>
                                          <span>Address</span>Flat 120,
                                          Block C, Anjali Residency...
                                        </h6>
                                        </OverlayTrigger>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                            <Col lg={4} md={6} xs={12} className="mb-3">
                              <div className="card">
                                <div className="cardHeader d-flex align-items-center justify-content-between">
                                  <h5>
                                    <span>Claimant</span>
                                  </h5>
                                  <h4 className="cardBtns">
                                    <button type="button" >
                                      <img src="/images/edit-icon.svg" onClick={handleShow1} />
                                    </button>
                                  </h4>
                                </div>
                                <div className="cardBody cardSpaceBetween">
                                  <Row>
                                    <Col lg={4} md={7} xs={12}>
                                      <img src="/images/krishna.svg" />
                                    </Col>
                                    <Col lg={8} md={7} xs={12}>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Name</span>Krishna Kanth
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>Aadhaar No.</span>XXXXXX1243
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Rel & Relation</span>S/o Subbarao
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>PAN / form 60/61</span>DBAGK0721B
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <OverlayTrigger overlay={tooltip1} placement="bottom">
                                        <h6>
                                          <span>Address</span>Flat 10, Krishnanjali Residency...
                                        </h6>
                                        </OverlayTrigger>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                            <Col lg={4} md={6} xs={12} className="mb-3">
                              <div className="card">
                                <div className="cardHeader d-flex align-items-center justify-content-between">
                                  <h5>
                                    <span>Claimant</span>
                                  </h5>
                                  <h4 className="cardBtns">
                                    <button onClick={handleShow2}>
                                      <img src="/images/edit-icon.svg" />
                                    </button>
                                  </h4>
                                </div>
                                <div className="cardBody cardSpaceBetween">
                                  <Row>
                                    <Col lg={4} md={7} xs={12}>
                                      <img src="/images/dharmendar.svg" />
                                    </Col>
                                    <Col lg={8} md={7} xs={12}>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Name</span>Dharmendra
                                        </h6>
                                      </Col>
                                      <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>Aadhaar No.</span>XXXXXX7623
                                        </h6>
                                      </Col>
                                      </div>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Rel & Relation</span>S/o Parthasarthi
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>PAN / form 60/61</span>ABCKG0123A
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center">
                                      <OverlayTrigger overlay={tooltip2} placement="bottom">
                                        <h6>
                                          <span>Address</span>Flat 1A/2,
                                          Block A, Sanjan Enclave...
                                        </h6>
                                        </OverlayTrigger>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                            <Col lg={4} md={6} xs={12} className="mb-3">
                              <div className="card">
                                <div className="cardHeader d-flex align-items-center justify-content-between">
                                  <h5>
                                    <span>Claimant</span>
                                  </h5>
                                  <h4 className="cardBtns">
                                    <button type="button" onClick={handleShow3}>
                                      <img src="/images/edit-icon.svg" />
                                    </button>
                                  </h4>
                                </div>
                                <div className="cardBody cardSpaceBetween">
                                  <Row>
                                    <Col lg={4} md={7} xs={12} className="partydetails-card-image">
                                    </Col>
                                    <Col lg={8} md={7} xs={12}>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Name</span>Ajay Kumar
                                        </h6>
                                      </Col>
                                      <Col lg={6} md={6} xs={6}>
                                        <h6 className="mb-3">
                                          <span>Passport No.</span>J8369854
                                        </h6>
                                      </Col>
                                      </div>
                                      <div className="d-flex align-items-center mb-3">
                                      <Col lg={6} md={6} xs={6}>
                                        <h6>
                                          <span>Rel & Relation</span>S/o Krishna
                                        </h6>
                                        </Col>
                                        <Col lg={6} md={6} xs={6}>
                                        <h6 className="justify-content-end">
                                          <span>PAN / form 60/61</span>CBAGK0769K
                                        </h6>
                                        </Col>
                                      </div>
                                      <div className="d-flex align-items-center">
                                      <OverlayTrigger overlay={tooltip} placement="bottom">
                                        <h6>
                                          <span>Address</span>Flat 120,
                                          Block C, Anjali Residency...
                                        </h6>
                                        </OverlayTrigger>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </Row>
                        <Link href="/verification">
                          <div className="pageNextBtn">
                            <button className="next"> Save </button>
                          </div>
                        </Link>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} className="modal modal-xl">
          <Modal.Header closeButton>
            <Modal.Title>Edit Party Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Row>
                <Col lg={9} md={10} xs={10}>
                  <Row>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Select aria-label="Book No" id="floatingInputCustom" placeholder="ID Proof">
                          <option value="1">Aadhar Card</option>
                          <option value="2">Pan Card</option>
                        </Form.Select>
                        <Form.Label htmlFor="floatingInputCustom">
                          Id Proof
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Number"
                          value="xxxx xxxx 7689"
                        />
                        <label htmlFor="floatingInputCustom">
                          ID Number
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
                          placeholder="Name"
                          value="Sanjay Kumar"
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
                          placeholder="Age"
                          value="30"
                        />
                        <label htmlFor="floatingInputCustom">
                          Age
                        </label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
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
                          <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" value="Krishna.." className="form-control" />
                          <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                        </Form.Floating>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="address"
                          name="address"
                          value="Flat 120, Block C, Anjali Residency.."
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
                          name="phone number"
                          value="+91 98*******3"
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
                          placeholder="PAN Number"
                          name="pancardnumber"
                          value="CBAGK0769K"
                        />
                        <label htmlFor="floatingInputCustom">
                          PAN Number/Form 60/61
                        </label>
                      </Form.Floating>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3} md={4} xs={4}>
                  <div className="partydetails-image-card">
                    <Image height={220} width={400} src="/images/person.svg" alt="Card image" />
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col lg={8} md={10} xs={12}>
                <div className="form-check-checkbox assigningcheckboxes">
                  <input className="form-check-input m-1" type="checkbox" id="defaultCheck1" defaultChecked />
                  <label className="m-1">
                    Consider this Claimant/Executant as Representative
                  </label>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="pageNextBtn">
              <button className="clear mb-2 m-1">
                Clear
              </button>
              <button className="next mb-2 m-4" onClick={handleClose}>
                Done
              </button>
            </div>
          </Modal.Footer>
        </Modal>
 <Modal show={show1} onHide={handleClose1} className="modal modal-xl">
          <Modal.Header closeButton>
            <Modal.Title>Edit Party Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Row>
                <Col lg={9} md={9} xs={9}>
                  <Row>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Select aria-label="Book No" id="floatingInputCustom" placeholder="ID Proof">
                          <option value="1">Aadhar Card</option>
                          <option value="2">Pan Card</option>
                        </Form.Select>
                        <Form.Label htmlFor="floatingInputCustom">
                          Id Proof
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Number"
                          value="xxxx xxxx 1243"
                        />
                        <label htmlFor="floatingInputCustom">
                          ID Number
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
                          placeholder="Name"
                          value="Krishna Kanth"
                        />
                        <label htmlFor="floatingInputCustom">
                          Name
                        </label>
                      </Form.Floating>
                    </Col>
                    <Col lg={2} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Age"
                          value="28"
                        />
                        <label htmlFor="floatingInputCustom">
                          Age
                        </label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={12} xs={12} className="mb-3">
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
                          <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" value="Subbarao.." className="form-control" />
                          <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                        </Form.Floating>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="address"
                          name="address"
                          value="Flat 10, Krishnajali Residency.."
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
                          name="phone number"
                          value="+91 92******24"
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
                          placeholder="PAN Number"
                          name="pancardnumber"
                          value="DBAGK721B"
                        />
                        <label htmlFor="floatingInputCustom">
                          PAN Number/Form 60/61
                        </label>
                      </Form.Floating>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3} md={4} xs={4}>
                  <div className="partydetails-image-card">
                    <Image height={220} width={400} src="/images/krishna.svg" alt="Card image" />
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col lg={8} md={10} xs={12}>
                <div className="form-check-checkbox assigningcheckboxes">
                  <input className="form-check-input m-1" type="checkbox" id="defaultCheck1" defaultChecked />
                  <label className="m-1">
                    Consider this Claimant/Executant as Representative
                  </label>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="pageNextBtn">
              <button className="clear mb-2 m-1">
                Clear
              </button>
              <button className="next mb-2 m-4" onClick={handleClose1}>
                Done
              </button>
            </div>
          </Modal.Footer>
        </Modal>
 <Modal show={show2} onHide={handleClose2} className="modal modal-xl">
          <Modal.Header closeButton>
            <Modal.Title>Edit Party Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Row>
                <Col lg={9} md={9} xs={9}>
                  <Row>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Select aria-label="Book No" id="floatingInputCustom" placeholder="ID Proof">
                          <option value="1">Aadhar Card</option>
                          <option value="2">Pan Card</option>
                        </Form.Select>
                        <Form.Label htmlFor="floatingInputCustom">
                          ID Proof
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Number"
                          value="xxxx xxxx 7623"
                        />
                        <label htmlFor="floatingInputCustom">
                          ID Number
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
                          placeholder="Name"
                          value="Dharmendra"
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
                          placeholder="Age"
                          value="39"
                        />
                        <label htmlFor="floatingInputCustom">
                          Age
                        </label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
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
                          <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" value="parthasar.." className="form-control" />
                          <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                        </Form.Floating>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="address"
                          name="address"
                          value="FLat 1A/2, Block A, Sanjan Enclave.."
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
                          name="phone number"
                          value="+91 96*******7"
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
                          placeholder="PAN Number"
                          name="pannumber"
                          value="ABCKG0123A"
                        />
                        <label htmlFor="floatingInputCustom">
                          PAN Number/Form 60/61
                        </label>
                      </Form.Floating>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3} md={4} xs={4}>
                  <div className="partydetails-image-card">
                    <Image height={200} width={350} src="/images/Dharmendar.svg" alt="Card image" />
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col lg={8} md={10} xs={12}>
                <div className="form-check-checkbox assigningcheckboxes">
                  <input className="form-check-input m-1" type="checkbox" id="defaultCheck1" defaultChecked />
                  <label className="m-1">
                    Consider this Claimant/Executant as Representative
                  </label>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="pageNextBtn">
              <button className="clear mb-2 m-1">
                Clear
              </button>
              <button className="next mb-2 m-4" onClick={handleClose2}>
                Done
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal show={show3} onHide={handleClose3} className="modal modal-xl">
          <Modal.Header closeButton>
            <Modal.Title>Edit Party Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Row>
                <Col lg={9} md={10} xs={10}>
                  <Row>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Select aria-label="Book No" id="floatingInputCustom" placeholder="ID Proof">
                        <option value="1">Passport</option>
                          <option value="1">Aadhar Card</option>
                          <option value="2">Pan Card</option>
                        </Form.Select>
                        <Form.Label htmlFor="floatingInputCustom">
                          Id Proof
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Number"
                          value="J8369854"
                        />
                        <label htmlFor="floatingInputCustom">
                          ID Number
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
                          placeholder="Name"
                          value="Ajay Kumar"
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
                          placeholder="Age"
                          value="30"
                        />
                        <label htmlFor="floatingInputCustom">
                          Age
                        </label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
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
                          <Form.Control id="floatingInputCustom" type="text" placeholder="Relation Name" value="Krishna" className="form-control" />
                          <Form.Label htmlFor="floatingInputCustom"> Relation Name </Form.Label>
                        </Form.Floating>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} md={12} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="address"
                          name="address"
                          value="Flat 120, Block C, Anjali Residency.."
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
                          name="phone number"
                          value="+91 98*******3"
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
                          placeholder="PAN Number"
                          name="pancardnumber"
                          value="CBAGK0769K"
                        />
                        <label htmlFor="floatingInputCustom">
                          PAN Number/Form 60/61
                        </label>
                      </Form.Floating>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3} md={4} xs={4}>
                  <div className="partydetails-image-card">
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col lg={8} md={10} xs={12}>
                <div className="form-check-checkbox assigningcheckboxes">
                  <input className="form-check-input m-1" type="checkbox" id="defaultCheck1" defaultChecked />
                  <label className="m-1">
                    Consider this Claimant/Executant as Representative
                  </label>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="pageNextBtn">
              <button className="clear mb-2 m-1">
                Clear
              </button>
              <button className="next mb-2 m-4" onClick={handleClose3}>
                Done
              </button>
            </div>
          </Modal.Footer>
        </Modal>
    </div></>
  );
};
export default partyDetailsScroll;
