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

            <div className="m-5">
                <div className="LoginPage mx-5" >
                    <Row>
                        <Col lg={12} md={12} xs={12} className="d-flex justify-content-center align-items-center flex-column min-vh-100">
                            <Image src={WaveGif} alt="wave-gif" width={130} height={130} />
                            <h5>Hi, Praveen kumar! <br />Welcome Back</h5>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default LoginOtp;

