import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import LoginBG from '../../../public/images/Login1-BG.png';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { TbRefresh } from "react-icons/tb";
import Link from "next/link";
import Head from "next/head";

const LoginOtp = () => {
    return (
        <div className="pageMainWrap innerpage">
            <Head>
                <title>Login - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>

            <div className="m-5">
                <div className="LoginPage mx-5">
                    <Row className='Login-rightGrd'>
                        <Col lg={7} md={7} xs={7}>
                            <Image src={LoginBG} alt="login-BG" height="676px"/>
                        </Col>
                        <Col lg={5} md={5} xs={5}>
                            <Row className="my-3">
                                <Col lg={1} md={1} xs={1}>
                                    <MdOutlineKeyboardBackspace size={30} />
                                </Col>
                                <Col lg={11} md={11} xs={11}>
                                    <Link href="/LoginPage">
                                        <u>Back</u>
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} xs={12}>
                                    <h4>OTP Verification</h4>
                                    <p>Please enter the OTP which we sent to your Aadhar registered
                                        mobile number</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} xs={12} className="my-4">
                                    {/* <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} /> */}
                                    <div id="otp" className="inputs d-flex flex-row">
                                        <input className="m-2 text-center form-control rounded" type="text" id="first" />
                                        <input className="m-2 text-center form-control rounded" type="text" id="second" />
                                        <input className="m-2 text-center form-control rounded" type="text" id="third" />
                                        <input className="m-2 text-center form-control rounded" type="text" id="fourth" />
                                        <input className="m-2 text-center form-control rounded" type="text" id="fifth" />
                                        <input className="m-2 text-center form-control rounded" type="text" id="sixth" />
                                    </div>
                                    <p>&nbsp;&nbsp;OTP Expires in 02:00s</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} xs={12}>
                                    <div className="d-flex h-75 d-inline-block">
                                    <div className="card">
                                        <div className="card-body d-flex align-content-center">
                                            <img src="/images/Captcha.svg" alt="captcha" width={120} height={15} />&nbsp;
                                            <TbRefresh color="#274C77"/>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Enter Captcha" /></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={5} md={5} xs={5}></Col>
                                <Col lg={4} md={4} xs={4}>
                                    <Link href={"/Login/WelcomePage"}><Button className="loginbuttonclass my-3">Submit</Button></Link>
                                </Col>
                            </Row>
                            <Row className="my-5">
                                <Col lg={5} md={5} xs={5}></Col>
                                <Col lg={2} md={2} xs={2}>
                                    <div className="d-flex">
                                        <Image
                                            src="/images/Ellipse-54.svg"
                                            width={18}
                                            height={18}
                                            alt="Next-Tab"
                                        />&nbsp;
                                        <Image
                                            src="/images/Ellipse-55.svg"
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
            </div>
        </div>
    )
}
export default LoginOtp;
