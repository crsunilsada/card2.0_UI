import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import LoginBG from '../../../public/images/Login1-BG.png';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Alert!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex align-items-center flex-column">
                <AiOutlineCloseCircle size={35} color={"red"} />
                <p className="mt-2 text-center">
                    You are trying to access the application from an unauthorized IP Address
                </p>
            </Modal.Body>
        </Modal>
    );
}


const LoginPage = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="pageMainWrap innerpage">
            <Head>
                <title>Login - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div className="m-5">
                <div className="LoginPage mx-5 ">
                    <Row className='Login-rightGrd'>
                        <Col lg={7} md={7} xs={7}>
                            <Image src={LoginBG} alt="login-BG" height="780px" />
                        </Col>
                        <Col lg={5} md={5} xs={5}>
                            <Row className="my-3 mx-4">
                                <Col lg={12} md={12} xs={12}>
                                    <h5>Hi, Welcome Back!</h5>
                                </Col>
                            </Row>
                            <Row className="my-3 mx-4">
                                <Col lg={2} md={2} xs={2}>
                                    <div>
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />&nbsp;
                                        <label className="form-check-label" >IG</label>
                                    </div>
                                </Col>
                                <Col lg={2} md={2} xs={2}>
                                    <div>
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />&nbsp;
                                        <label className="form-check-label" >DIG</label>
                                    </div>
                                </Col>
                                <Col lg={2} md={2} xs={2}>
                                    <div>
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />&nbsp;
                                        <label className="form-check-label">DR</label>
                                    </div>
                                </Col>
                                <Col lg={2} md={2} xs={2}>
                                    <div>
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />&nbsp;
                                        <label className="form-check-label" >SRO</label>
                                    </div>
                                </Col>
                                <Col lg={2} md={3} xs={3}>
                                    <div>
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />&nbsp;
                                        <label className="form-check-label" >Staff</label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={10} md={10} xs={10}>
                                    <div className='searchBox my-2'>
                                        <input type="text" className='form-control searchInput' placeholder="Office/Location" />
                                        <Image width={20} height={20} className='searchIcon' src='/images/Search-icon.svg' alt="Search" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={10} md={10} xs={10}>
                                    <div className='searchBox my-2'>
                                        <input type="text" className='form-control searchInput' placeholder="Employee Id" />
                                        <Image width={20} height={20} className='searchIcon' src='/images/Search-icon.svg' alt="Search" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} xs={6}></Col>
                                <Col lg={4} md={4} xs={4}>
                                    <Button className="loginbuttonclass my-3" onClick={() => setModalShow(true)}><Link href={"/Login/LoginOtp"} >Next</Link></Button>
                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </Col>
                            </Row>
                            <Row className="my-5">
                                <Col lg={5} md={5} xs={5}></Col>
                                <Col lg={2} md={2} xs={2}>
                                    <div className="d-flex">
                                        <Image
                                            src="/images/Ellipse-55.svg"
                                            width={18}
                                            height={18}
                                            alt="Next-Tab"

                                        />&nbsp;
                                        <Image
                                            src="/images/Ellipse-54.svg"
                                            width={18}
                                            height={18}
                                            alt="Next-Tab"
                                        />
                                    </div>
                                </Col>
                                <Col lg={5} md={5} xs={5}></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div >
        </div >
    )
}
export default LoginPage;
