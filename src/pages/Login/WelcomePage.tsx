import Head from "next/head";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import WaveGif from '../../../public/images/wave.gif';

const LoginOtp = () => {
    return (
        <div className="pageMainWrap innerpage">
            <Head>
                <title>Login - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>

            <div className="mt-5 WelcomePage">
                <div className="LoginPage">
                    <Row>
                        <Col lg={12} md={12} xs={12} className="d-flex justify-content-center align-items-center flex-column welcomePage-image">
                            <Image src={WaveGif} alt="wave-gif" width={80} height={80} />
                            <h6 className="text-center">Hi, Praveen kumar! <br />Welcome Back</h6>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default LoginOtp;

