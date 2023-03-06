import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Image from "next/image";
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
            <div className="pageMainWrap pt-4 innerpage">
                <div className="mainWrapper">
                    <div className="wrapperInner pt-0">
                        <div className="acknowledgement">
                            <Button className='active partyDetails'>EKYC Services</Button>
                        </div>
                        <Row className="mb-4 mt-3">
                            <Col lg={10} md={10} xs={12}></Col>
                            <Col lg={2} md={2} xs={12}><h4> Device Mantra</h4></Col></Row>
                        <Row className="p-4 ">
                            <Col lg={3} md={4} xs={12}>
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
                                <Form.Select aria-label="Default select example" id="floatingInputCustom">
                                    <option value="">Select option to capture</option>
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                    <option value="">option 3</option>
                                    <option value="">option 4</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='p-4'>
                            <Col lg={11} md={11} xs={11} className="mb-3">
                                <div className=" d-flex form-check-checkbox">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <h6>Consent:</h6>
                                    <Col style={{ marginLeft: "20px" }}>
                                        I, the holder of Aadhar Number, given by consent number to IGRS under ITE&C, Govt. of Andhra Pradesh, to obtain my Aadhar Number and Biometric/ OTP for authenticating wih UIDAI
                                    </Col>
                                </div>
                            </Col>

                            <Col lg={8} md={8} xs={8}>

                            </Col>
                        </Row>
                        <div className="pageNextBtn">
                            <Row>
                                <Col lg={7} md={7} xs={7}></Col>
                                <Col lg={2} md={2} xs={2}>
                                    <button className="whitebuttonclass">Reset</button></Col>
                                <Col lg={2} md={2} xs={2}>

                                    <button className="bluebuttonclass" data-bs-toggle="modal" data-bs-target="#popup" >Capture</button>
                                </Col>
                            </Row>
                            {/* <div className="modal fade" id="popup" role="dialog" aria-labelledby="popuplabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="popuplabel">Success Message</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <Image width={20} height={20} src="/images/popup-close.svg" />                                       
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <Row >
                                            <Col lg={5} md={5} xs={12}></Col>
                                          <Col lg={2} md={2} xs={12}><img src="/images/Success.svg" /></Col></Row>
                                        <Row className='justify-content-center mt-4 mb-4'>Youre EKYC has been successfully completed</Row>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="modal fade" id="popup" role="dialog" aria-labelledby="popuplabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="popuplabel">Failure</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <Image width={20} height={20} src="/images/popup-close.svg" />

                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <Row >
                                                <Col lg={5} md={5} xs={12}></Col>
                                                <Col lg={2} md={2} xs={12}><img src="/images/rejected.svg" /></Col></Row>
                                            <Row className='justify-content-center mt-3'>Couldn’t capture thumb impression</Row>
                                        </div>
                                        <div >
                                            <Row className="justify-content-center mb-5">
                                                <Col lg={3} md={3} xs={12}>
                                                    <button type="button" data-dismiss="modal" className="whitebuttonclass">Cancel</button></Col>
                                                <Col lg={3} md={3} xs={12}><button type="button" className="bluebuttonclass">Next</button></Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="modal fade" id="popup" role="dialog" aria-labelledby="popuplabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="popuplabel">Reasons for failed EKYC</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <Image width={20} height={20} src="/images/popup-close.svg" />

                                            </button>
                                        </div>
                                        <div className="modal-bodyekyc ">
                                            <Form>
                                                <div key="inline-radio" >
                                                    
                                                    <div className='mb-2'><Form.Check 
                                                        value="EKYC failure Reason One"
                                                        type="radio"
                                                        aria-label="EKYC failure Reason One"
                                                        name="inlineRadioOptions"
                                                        label="EKYC failure Reason One"
                                                    /></div>
                                                    <div className='mb-2'><Form.Check

                                                        label="EKYC failed due to incorrect biometric"
                                                        value="Executant"
                                                        type="radio"
                                                        aria-label="Executant"
                                                        name="inlineRadioOptions" />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <Form.Check
                                                            label="EKYC failure Reason Three"
                                                            value="Executant"
                                                            type="radio"
                                                            aria-label="Executant"
                                                            name="inlineRadioOptions" />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <Form.Check

                                                            label="EKYC failure Reason Four"
                                                            value="Executant"
                                                            type="radio"
                                                            aria-label="Executant"
                                                            name="inlineRadioOptions" />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <Form.Check
                                                            label="EKYC failure Reason Five"
                                                            value="Executant"
                                                            type="radio"
                                                            aria-label="Executant"
                                                            name="inlineRadioOptions" />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <Form.Check
                                                            label="EKYC failure Reason Six"
                                                            value="Executant"
                                                            type="radio"
                                                            aria-label="Executant"
                                                            name="inlineRadioOptions" /></div>
                                                </div>
                                                <Row className=''>
                                            <h6>NOTE: SRO is sole responsible for Identification of party</h6>
                                            </Row>
                                            </Form>
                                            
                                        </div>
                                        <Row>
                                        <Col className='text-center mb-3'>
                                                <Button className='next'>Submit</Button>
                                            </Col></Row>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="modal fade" id="popup" role="dialog" aria-labelledby="popuplabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="popuplabel">Success Message</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <Image width={20} height={20} src="/images/popup-close.svg" />
                                       
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <Row >
                                            <Col lg={5} md={5} xs={12}></Col>
                                          <Col lg={2} md={2} xs={12}><img src="/images/Success.svg" /></Col></Row>
                                        <Row className='text-center mt-4 mb-4'>
                                        EKYC Failure reason has been successfully submitted & allowed to proceed with manual aadhar entry details
                                        </Row>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div> </>
    )
}

export default Ekyc