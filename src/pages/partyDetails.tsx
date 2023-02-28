import { Container, Col, Row, Form, Button } from "react-bootstrap"
import Head from "next/head";
import Stepper from '../components/Stepper'
const partyDetails = () => {
    return (
        <><Stepper /><div className="pageMainWrap innerpage">
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
                            <div>
                                <div className="mb-4 d-flex assigningcheckboxes">
                                    <Form.Check
                                        value="Executant"
                                        type="radio"
                                        aria-label="Executant"
                                        label="Executant" />
                                    <Form.Check
                                        value="Claimant"
                                        type="radio"
                                        aria-label="Claimant"
                                        label="Claimant" />
                                </div>
                                <Row>
                                    <Col lg={4} md={4} xs={12} className="mb-3">
                                        <Form.Select aria-label="Default select example">

                                            <option value="">ID Proof</option>
                                            <option value="10">Chairman</option>
                                            <option value="20">AP Registrar Head</option>
                                            <option value="30">Document Writer</option>

                                        </Form.Select>
                                    </Col>
                                    <Col lg={4} md={4} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="ID Number" />
                                            <label htmlFor="floatingInputCustom">
                                                ID Number
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={4} md={4} xs={12} className="mb-3">
                                        <div className="emptyBox"></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Name" />
                                            <label htmlFor="floatingInputCustom">
                                                Name
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={1} md={1} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Nominee Name" />
                                            <label htmlFor="floatingInputCustom">
                                                Age
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={4} md={4} xs={12} className="mb-3">

                                        <Form.Select aria-label="Default select example">
                                            <option value="">S / o</option>
                                            <option value="">S/o</option>
                                            <option value="">D/o</option>
                                            <option value="">W/o</option>
                                        </Form.Select>

                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="RelationName" />
                                            <label htmlFor="floatingInputCustom">
                                                Relation Name
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
                                                placeholder="Phone Number"
                                                name="phonenumber" />
                                            <label htmlFor="floatingInputCustom">
                                                Phone Number
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={4} md={4} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Address" />
                                            <label htmlFor="floatingInputCustom">
                                                Address
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                        <div className="emptyBox"></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4} md={4} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Phone Number"
                                                name="pannumber" />
                                            <label htmlFor="floatingInputCustom">
                                                PAN Number/Form 6061
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={4} md={4} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="PAN Card Number"
                                                name="pancardnumber" />
                                            <label htmlFor="floatingInputCustom">
                                                PAN Card Number
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} xs={12} className="mb-3">
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                    </Col>
                                    <Col lg={4} md={4} xs={4} className="mb-3">
                                        <div className="pageNextBtn">
                                            <button className="clear">
                                                Exit
                                            </button>
                                            <button className="next">
                                                Print
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    );
};
export default partyDetails;
