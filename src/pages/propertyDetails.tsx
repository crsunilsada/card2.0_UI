import Head from "next/head";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col, Table, Tab, Nav, Form } from "react-bootstrap";
import Stepper from '../components/Stepper'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const PropertyDetails = () => {
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
                        <div  className="float-end">
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
                  <div className="pageTableContainer mt-4">
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
                                  <Accordion.Header>Schedule Details</Accordion.Header>
                                  <Accordion.Body>
                                      <Row className="mb-4">
                                          <Col lg={3} md={4} xs={12}>
                                              <Form.Floating>
                                                  <Form.Select aria-label="localBody">
                                                      <option>Local Body</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </Form.Select>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={3} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Select aria-label="mapClaimants">
                                                      <option>Map Claimants</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </Form.Select>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={3} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Select aria-label="landUse">
                                                      <option>Land Use</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </Form.Select>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={3} md={4} xs={12}>
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Select aria-label="mapClaimants">
                                                      <option>Locality/ Habitation</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </Form.Select>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={2} md={3} xs={12} className="mb-3">
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
                                          <Col lg={2} md={3} xs={12} className="mb-3">
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
                                          <Col lg={2} md={3} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                      </Row>
                                      <Row className="mb-4">
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                      </Row>
                                      <Row className="mb-4">
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <button className="next">Next</button>
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="Total Extent/Undivided Share" />
                                                  <Form.Label htmlFor="floatingInputCustom">
                                                      Total Extent/Undivided Share
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
                                      <h4>Flat Boundaries</h4>
                                      <Row className="mb-4">
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                      <Row className="mb-4">
                                          <Col lg={4} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Select aria-label="units">
                                                      <option>Total Floors</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </Form.Select>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={4} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Select aria-label="units">
                                                      <option>Floor Number</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </Form.Select>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={4} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Select aria-label="units">
                                                      <option>Structure Type</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </Form.Select>
                                              </Form.Floating>
                                          </Col>
                                      </Row>
                                      <Row className="mb-4">
                                          <Col lg={4} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Select aria-label="units">
                                                      <option>Stage of Construction</option>
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
                                                      placeholder="Age" />
                                                  <Form.Label htmlFor="floatingInputCustom">
                                                      Age
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
                                      </Row>
                                      <div className="pageNextBtn">
                                          {/* <button className="next">Clear</button> */}
                                          <button className="next">Next</button>
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="Flat No" />
                                                  <Form.Label htmlFor="floatingInputCustom">
                                                      Flat No
                                                  </Form.Label>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                      <Row className="mb-4">
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="Flat No" />
                                                  <Form.Label htmlFor="floatingInputCustom">
                                                      Flat No
                                                  </Form.Label>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                      <Row className="mb-4">
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
                                                  <Form.Control
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
                                                  <Form.Select aria-label="units">
                                                      <option>Monthly/ Yearly</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                  </Form.Select>
                                              </Form.Floating>

                                          </Col>
                                          <Col lg={3} md={3} xs={12} className="mb-3">
                                              <div className="pageNextBtn" style={{ padding: 0 }}>
                                                  <button className="next"> + </button>
                                              </div>
                                          </Col>
                                      </Row>
                                      <div className="pageNextBtn">
                                          {/* <button className="next">Clear</button> */}
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
                                  <Accordion.Body>
                                      <Row className="mb-4">
                                          <Col lg={4} md={4} xs={12} className="mb-3">
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
                                          <Col lg={4} md={4} xs={12} className="mb-3">
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
                                          <Col lg={4} md={4} xs={12} className="mb-3">
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
                                      </Row>
                                      <Row className="mb-4">
                                          <Col lg={4} md={4} xs={12} className="mb-3">
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
                                          <Col lg={4} md={4} xs={12} className="mb-3">
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
                                          {/* <button className="next">Clear</button> */}
                                          <button className="next">Next</button>
                                      </div>
                                  </Accordion.Body>
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
                                                  id="inline-radio-1" />
                                              <Form.Check
                                                  inline
                                                  label="Post Manual Entry"
                                                  name="group1"
                                                  type="radio"
                                                  id="inline-radio-2" />
                                          </div>
                                      </Form>
                                      <Row className="mb-4">
                                          <Col lg={4} md={4} xs={12} className="mb-3">
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
                                          <Col lg={4} md={4} xs={12} className="mb-3">
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
                                          <Col lg={4} md={4} xs={12} className="mb-3">
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
                                      </Row>
                                      <Row className="mb-4">
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                      </Row>
                                      <div className="pageNextBtn">
                                          {/* <button className="next">Clear</button> */}
                                          <button className="next">Next</button>
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
                                              <Form.Floating>
                                                  <Form.Control
                                                      id="floatingInputCustom"
                                                      type="text"
                                                      placeholder="DSD Payable" />
                                                  <Form.Label htmlFor="floatingInputCustom">
                                                      DSD Payable
                                                  </Form.Label>
                                              </Form.Floating>
                                          </Col>
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
                                          <Col lg={3} md={4} xs={12} className="mb-3">
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
