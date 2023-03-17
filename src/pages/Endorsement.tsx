import { Container, Col, Row, Form, Button } from "react-bootstrap"
import Head from "next/head";
import Stepper from '../components/Stepper'
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
const Endorsement = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <><div><Stepper showReason1={true} /></div>
        <Stepper showReason={false} />
        <div className="pageMainWrap innerpage">
            <Head>
                <title>Digital Sign - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div>
                <div className="mainWrapper">
                    <div className="wrapperInner">
                        <div className="pageTableContainer">
                            <div className="acknowledgement">
                                <button className="partyDetails">Assigning</button>
                                <button className="active imaging">Endorement</button>
                            </div>
                            <div>
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
                                        {/* <Form.Select aria-label="Default select example" style={{color:"red"}}  >
<option value="Sub Registrar Name" ></option>
<option value="AADHAR">AADHAR</option>
<option value="REPRESENT/SEC 88">REPRESENT/SEC 88</option>
<option value="NRI">NRI</option>
</Form.Select><span style={{color:"red"}}  > Sub Registrar Name mismatched</span> */}
                                        <Form.Select aria-label="Default select example" style={{ color: "red", borderColor: "red" }}>
                                            <option value="Sub Registrar Name"></option>
                                            <option value="Sub Registrar Name">Sub Registrar Name</option>
                                            <option value="Sub Registrar Name">Sub Registrar Name</option>
                                            <option value="Sub Registrar Name">Sub Registrar Name</option>
                                        </Form.Select><span style={{ color: "red" }}> Sub Registrar Name mismatched</span>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} xs={12} className="mb-3">

                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">

                                    </Col>
                                    <Col lg={4} md={4} xs={4} className="mb-3">
                                        <div className="pageNextBtn">
                                            <button className=" clear">
                                                Exit
                                            </button>
                                            {/* <Link href={"/ScanningUpload"}> */}
                                            <button className="next" data-bs-toggle="modal" data-bs-target="#alert">Print</button>
                                            {/* </Link> */}
                                            <div >
                                                <Container >
                                                    <div className="modal" id="alert" aria-labelledby="alertLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered modal-md">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="alertLabel">Endorsement Print </h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                                        <Image width={20} height={20} src="/images/popup-close.svg" />
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <Container className="scrollable">
                                                                        <Row className="text-center  ">
                                                                            <Col lg={12} md={12} xs={12}>
                                                                                <Image width={700} height={1100} src="/images/endrosementprint.svg" />
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className="text-center  ">
                                                                            <Col lg={12} md={12} xs={12}>
                                                                                <Image width={700} height={1100} src="/images/endrosementprint.svg" />
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className="text-center">
                                                                            <Col lg={9} md={9} xs={12}>
                                                                            <Link href={"/ScanningUpload"}>
                                                                            <button type="button" className="bluebuttonclass">Print</button>
                                                                            </Link>
                                                                            </Col>
                                                                        </Row>
                                                                    </Container>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Container>
                                            </div>
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
