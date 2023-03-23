import { Container, Col, Row, Form, Button, Modal } from "react-bootstrap"
import Head from "next/head";
import Stepper from '../components/Stepper'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Bundling = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <><div><Stepper showReason1={true} /></div>
            <Stepper showReason={false} />
            <div className="pageMainWrap innerpage">
                <Head>
                    <title>Bundling - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div>
                    <div className="mainWrapper">
                        <div className="wrapperInner">
                            <div className="pageTableContainer">
                                <div className="acknowledgement">
                                    <button className="active imaging">Bundling</button>
                                    <button className=" partyDetails">Digital Sign</button>
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
                                                    placeholder="CS Number" value="3453" />
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
                                                    placeholder="CS Number" value="2023" />
                                                <label htmlFor="floatingInputCustom">
                                                    CS Year
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="CS Number" value="56345" />
                                                <label htmlFor="floatingInputCustom">
                                                    Ack No.
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
                                                    placeholder="CS Number" value="2023" />
                                                <label htmlFor="floatingInputCustom">
                                                    Ack Year
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="CS Number" value="117" />
                                                <label htmlFor="floatingInputCustom">
                                                    Book No
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                        <Col lg={3} md={3} xs={12} className="mb-3">
                                            <Form.Floating>
                                                <Form.Control
                                                    id="floatingInputCustom"
                                                    type="text"
                                                    placeholder="CS Number" value="2812384" />
                                                <label htmlFor="floatingInputCustom">
                                                    Reg Document No.
                                                </label>
                                            </Form.Floating>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={8} md={8} xs={12} className="mb-3">
                                        </Col>
                                        <Col lg={4} md={4} xs={12} className="pageNextBtn">
                                            <Row className="m-2">
                                                <Col lg={6} md={12} xs={12} className="mb-3">
                                                    <button type="button" className="next p-2 " onClick={handleShow}>Start Bundling</button>
                                                </Col>
                                                <Col lg={4} md={12} xs={12}>
                                                    <button type="button" className="clear "> Clear</button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    {/* <Modal show={show} onHide={handleClose} className="modal fade modal-lg align-items-center justify-content-center show">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Bundling</Modal.Title>
                                        </Modal.Header>
                                         <Container className="scrollable">
                                            <Modal.Body className="justify-content-center text-center">
                                                <Row className="text-center">
                                                    <Image src="/images/Load.svg" width={550} height={32} ></Image>
                                                </Row>
                                                <Row className="text-center  ">
                                                    <Col lg={12} md={10} xs={12}>
                                                        <Image width={200} height={300} src="/images/Bundling1.svg" />
                                                    </Col>
                                                </Row>
                                                <Row className="text-center">
                                                    <Col lg={12} md={12} xs={12}>
                                                        <Image width={200} height={300} src="/images/Bundling.svg" />
                                                    </Col>
                                                </Row>
                                        </Modal.Body>
                                        <Modal.Footer className="justify-content-center ">
                                            <Link href={"/ScanningUpload"}>
                                                <Button className="bluebuttonclass" aria-disabled="true" disabled onClick={handleClose}>
                                                    Save
                                                </Button>
                                            </Link>
                                        </Modal.Footer>
                                        </Container>
                                    </Modal> */}
                                    <Modal show={show} onHide={handleClose} className="modal fade modal-lg align-items-center justify-content-center show">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Bundling</Modal.Title>
                                        </Modal.Header>
                                        <Container className="scrollable">
                                            <Modal.Body className="justify-content-center text-center">
                                                <Row className="text-center  ">
                                                    <Col lg={12} md={10} xs={12}>
                                                        <Image width={200} height={300} src="/images/Bundling1.svg" />
                                                    </Col>
                                                </Row>
                                                <Row className="text-center">
                                                    <Col lg={12} md={12} xs={12}>
                                                        <Image width={200} height={300} src="/images/Bundling.svg" />
                                                    </Col>
                                                </Row>
                                            </Modal.Body>
                                            <Modal.Footer className="justify-content-center ">
                                                <Link href={"/scanningUpload"}>
                                                    <Button className="bluebuttonclass" onClick={handleClose}>
                                                        Save
                                                    </Button>
                                                </Link>
                                            </Modal.Footer>
                                        </Container>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
};
export default Bundling;
