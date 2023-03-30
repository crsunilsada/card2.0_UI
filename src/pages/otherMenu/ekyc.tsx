import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Head from "next/head";
const Ekyc = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [select, setSelect] = React.useState("");
    const [text, setText] = React.useState("");
    const reset = () => {
        setSelect('')
        setText('')
    }
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            <div className="pageMainWrap innerpage">
            <Head>
                <title>Ekyc - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
                <div className="mainWrapper">
		  <div className="mainWrapper_a">
                    <div className="otherMenuwrapperInner1 pt-0">
                        <div className="acknowledgement">
                            <button className='active'>EKYC Services</button>
                        </div>
                        <Row className="p-4 pt-4">
                            <Col lg={8} md={8} xs={12}></Col>
                            <Col lg={4} md={4} xs={12} className="pe-0">
                                <div className="justifydata">
                                    <h4>Device Mantra</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="p-4 pt-5">
                                <Col lg={3} md={4} xs={12} className="pb-3 " >
                                    <Form.Floating>
                                        <Form.Control
                                            id="floatingInputCustom"
                                            type="text"
                                            placeholder="Book No." />
                                        <Form.Label htmlFor="floatingInputCustom">
                                            UID No.
                                        </Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col lg={3} md={4} xs={12} className="mb-3">
                                    <Form.Floating>
                                        <Form.Select placeholder="Select option to capture" aria-label="Default select example" id="floatingInputCustom">
                                            <option value="">Select Option</option>
                                            <option value="">OTP Based Aadhaar eKYC</option>
                                            <option value="">Biometric Based Aadhaar eKyc</option>
                                            <option value="">Register their mobile number</option>
                                            <option value="">EKYC verification </option>
                                        </Form.Select>
                                        <label className='form-label' >EKYC Options</label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                            <Row className='pt-2  m-auto'>
                                <Col lg={11} md={11} xs={11}>
                                    <div className=" d-flex form-check-checkbox">
                                        <div className='d-flex p-3 pt-0'>
                                            <Col lg={0.25} md={0.25} xs={0.25} className="pt-1">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            </Col>
                                            <Col lg={1} md={1} xs={1} ><h7>Consent:</h7></Col>
                                        </div>
                                        <div className='d-flex p-2 pt-0 '>
                                            <Col>
                                                    <span className='text-string'>I, the holder of Aadhar Number  , given by consent number to IGRS under ITE&C, Govt. of Andhra Pradesh, to obtain my Aadhar Number and Biometric/ OTP for authenticating wih UIDAI</span>
                                            </Col>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={8} md={8} xs={8}>
                                </Col>
                            </Row>
                            <div className='pt-4'>
                                <Row className='m-auto'>
                                    <Col lg={5} md={5} xs={12} className="p-0"></Col>
                                    <Col lg={3} md={3} xs={12} className="p-0"></Col>
                                    <Col lg={4} md={4} xs={12} className="pb-2 ">
                                        <div className="justyfy_b d-flex ">
                                            <button className="whitebuttonclass me-3">Reset</button>
                                            <button className="bluebuttonclass" onClick={handleShow}>Capture</button>
                                        </div>
                                    </Col>
                                </Row>
                                {/* <Modal show={show} >
                                    <Modal.Header closeButton onHide={handleClose}>
                                        <Modal.Title>Success Message</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row className='justify-content-center'>
                                            <Image width={60} height={60} src="/images/successmark.svg" />
                                        </Row>
                                        <Row className='justify-content-center pt-3 pb-5'>
                                            Youre EKYC has been successfully completed
                                        </Row>
                                    </Modal.Body>
                                </Modal> */}
                                {/* <Modal show={show} >
                                    <Modal.Header closeButton onHide={handleClose}>
                                        <Modal.Title>Failure</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <Row className='justify-content-center'>
                                            <Image width={60} height={60} src="/images/rejected.svg" />
                                            </Row>
                                            <Row className='justify-content-center pt-3'>
                                            Couldn’t capture thumb impression</Row>
                                    </Modal.Body>
                                    <Modal.Footer className='justify-content-center pb-5'>
                                        <Button  onClick={handleClose} className="whitebuttonclass">
                                           Cancel
                                        </Button>
                                        <Button  onClick={handleClose} className="bluebuttonclass">
                                           Next
                                        </Button>
                                    </Modal.Footer>
                                </Modal> */}
                                {/* <Modal show={show} >
                                    <Modal.Header closeButton onHide={handleClose}>
                                        <Modal.Title>Success Message</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row className='justify-content-center pb-3'>
                                            <Image width={60} height={60}
                                                src={"/images/successmark.svg"} />
                                        </Row>
                                        <Row className='justify-content-center pb-5'>
                                            EKYC Failure reason has been successfully submitted & allowed to
                                            proceed with manual aadhar entry details
                                        </Row>
                                    </Modal.Body>
                                </Modal> */}
                                <Modal show={show} className="justify-content-center ">
                                    <Modal.Header closeButton onHide={handleClose}>
                                        <Modal.Title>Reasons for failed EKYC</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="modelform modeldairy">
                                        <Form>
                                            <fieldset>
                                                <div className='mb-2'>
                                                    <input type="radio" id="louie" name="drone" value="louie" />
                                                    <label className="px-2 ash-blow">EKYC failure Reason One</label>
                                                </div>
                                                <div className='mb-2'>
                                                    <input type="radio" id="louie" name="drone" value="louie" />
                                                    <label className="px-2 ash-blow">EKYC failed due to incorrect biometric</label>
                                                </div>
                                                <div className='mb-2'>
                                                    <input type="radio" id="louie" name="drone" value="louie" />
                                                    <label className="px-2 ash-blow">EKYC failure Reason Three</label>
                                                </div>
                                                <div className='mb-2'>
                                                    <input type="radio" id="louie" name="drone" value="louie" />
                                                    <label className="px-2 ash-blow"> EKYC failure Reason Four</label>
                                                </div>
                                                <div className='mb-2'>
                                                    <input type="radio" id="louie" name="drone" value="louie" />
                                                    <label className="px-2 ash-blow"> EKYC failure Reason Five</label>
                                                </div>
                                                <div className='mb-2'>
                                                    <input type="radio" id="louie" name="drone" value="louie" className='p-2' />
                                                    <label className="px-2 ash-blow"> EKYC failure Reason Six</label>
                                                </div>
                                            </fieldset>
                                        </Form>
                                        <Row>
                                            <span className="notetext pt-3">NOTE: SRO is sole responsible for Identification of party</span>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer className='modelfooter'>
                                        <Button className="bluebuttonclass" variant="primary" onClick={handleClose}>
                                            Submit
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div> </>
    )
}
export default Ekyc
