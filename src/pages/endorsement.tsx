import { Container, Col, Row, Form, Button, Modal } from "react-bootstrap"
import Head from "next/head";
import Stepper from '../components/Stepper'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Endorsement = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <><div><Stepper showReason1={true} /></div>
            <Stepper showReason={false} />
            <div className="pageMainWrap innerpage">
                <Head>
                    <title>Endorsement - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div>
                    <div className="mainWrapper">
                        <div className="wrapperInner">
                            <div className="pageTableContainer">
                                <div className="acknowledgement">
                                    <button className="partyDetails">Assigning</button>
                                    <button className="active imaging px-2">Endorsement</button>
                                </div>
                                <div>
                                    <Row className="mb-3">
                                        <Col lg={12} md={12} xs={12}></Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col lg={12} md={12} xs={12}></Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="CS Number" />
                                                <label htmlFor="floatingInputCustom">
                                                    CS Number
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="CS Number" />
                                                <label htmlFor="floatingInputCustom">
                                                    Document Year
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="Nominee Name" />
                                                <label htmlFor="floatingInputCustom">
                                                    Book No.
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="Reg Year" />
                                                <label htmlFor="floatingInputCustom">
                                                    Reg Year
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder=" Presentant Name" />
                                                <label htmlFor="floatingInputCustom">
                                                    Presentant Name
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="Nominee Name" />
                                                <label htmlFor="floatingInputCustom">
                                                    Nature of Document.
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="Reg Year" />
                                                <label htmlFor="floatingInputCustom">
                                                    Document No.
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={12} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Select aria-label="Sub Registrar Name" id="floatingInputCustom" placeholder="Sub Registrar Name" style={{ color: "red", borderColor: "red" }}>
                                                    <option value="0">Please Select</option>
                                                    <option value="1">Sub Registrar Name</option>
                                                    <option value="2">Sub Registrar Name</option>
                                                </Form.Select>
                                                <Form.Label htmlFor="floatingInputCustom">Sub Registrar Name</Form.Label>
                                            </Form.Floating>
                                            <span style={{ color: "red" }}> Sub Registrar Name mismatched</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} md={6} xs={12} className="mb-3">
                                        </Col>
                                        <Col lg={2} md={2} xs={12} className="mb-3">
                                        </Col>
                                        <Col lg={4} md={4} xs={12} className="mb-3">
                                            <div className="pageNextBtn">
                                                <button className=" clear m-3">
                                                    Exit
                                                </button>
                                                <Button variant="primary" className="next  m-3" onClick={handleShow}>
                                                    View
                                                </Button>
                                                <Modal show={show} onHide={handleClose} className="modal fade modal-lg align-items-center justify-content-center show">
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Endorsement</Modal.Title>
                                                    </Modal.Header>
                                                    <Container className="scrollable">
                                                        <Modal.Body className="justify-content-center text-center">
                                                            <Row>
                                                                <Col lg={12} md={12} xs={12}>
                                                                    <Image width={700} height={1100} src="/images/endrosementprint.svg" />
                                                                </Col>
                                                            </Row>
                                                            <Row className="text-center  ">
                                                                <Col lg={12} md={12} xs={12}>
                                                                    <Image width={700} height={1100} src="/images/endrosementprint.svg" />
                                                                </Col>
                                                            </Row>
                                                        </Modal.Body>
                                                        <Modal.Footer className="justify-content-center ">
                                                            <Link href={"/assigningVerification"}>
                                                                <Button className="bluebuttonclass" onClick={handleClose}>
                                                                    Save
                                                                </Button>
                                                            </Link>
                                                        </Modal.Footer>
                                                    </Container>
                                                </Modal>
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
export default Endorsement;