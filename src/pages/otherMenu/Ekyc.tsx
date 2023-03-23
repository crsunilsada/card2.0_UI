import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Image from "next/image";
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
                        <Row className="p-4 pt-5">
                            <Col lg={8} md={8} xs={12}></Col>
                            <Col lg={4} md={4} xs={12} className="pe-0">
                                <div className="justifydata">
                                    <h4>Device Mantra</h4>
                                </div>
                            </Col>
                        </Row>
                        <Row className="p-4 pt-1">
                            <Col lg={3} md={4} xs={12} className="pb-2" >
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
                        <Row className='pt-2 m'>
                            <Col lg={11} md={11} xs={11}>
                                <div className=" d-flex form-check-checkbox">
                                    <div className='d-flex p-2 pt-0'>
                                        <Col lg={0.25} md={0.25} xs={0.25}>
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        </Col>
                                        <Col lg={1} md={1} xs={1}><h6>Consent:</h6></Col></div>
                                    <Col>
                                        I, the holder of Aadhar Number  , given by consent number to IGRS under ITE&C, Govt. of Andhra Pradesh, to obtain my Aadhar Number and Biometric/ OTP for authenticating wih UIDAI
                                    </Col>
                                </div>
                            </Col>

                            <Col lg={8} md={8} xs={8}>

                            </Col>
                        </Row>
                        <div className='pt-4'>
                            <Row className='m-auto'>
                                <Col lg={5} md={5   } xs={12}></Col>
                                <Col lg={3} md={3} xs={12}></Col>
                                <Col lg={4} md={4} xs={12} className="pb-2 ">
                                     
                                    <div className="justyfy_b d-flex">
                                        <button className="whitebuttonclass me-3">Reset</button><button className="bluebuttonclass" data-bs-toggle="modal" data-bs-target="#popup"
                                    >Capture</button>
                                    </div>
                                    
                                </Col>

                                {/* <Col lg={1} md={1} sm={12} className="pb-2" > */}
                                    
                                {/* </Col> */}
                            </Row>

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
                                                <Col lg={2} md={2} xs={12}><img src="/images/rejected.svg"/></Col></Row>
                                            <Row className='justify-content-center mt-3'>Couldn’t capture thumb impression</Row>
                                        </div>
                                        <div>
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
                        <div style={{height: '102px'}}></div>
			</div>
                    </div>
                </div>
            </div> </>
    )
}

export default Ekyc