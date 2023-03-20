import Head from "next/head";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import WaveGif from '../../../public/images/wave.gif';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WelcomePage = () => {
    const router = useRouter();

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        router.push('/');
      },10000);

      return () => {
        clearTimeout(timeoutId);
      };
    }, []);

    return (
        <div className="pageMainWrap innerpage">
            <Head>
                <title>Login - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            {/* <div style={{height: '72px'}}></div> */}

            {/* <div className="mt-5 WelcomePage"> */}
            <div className="LoginMargin">
                <div className="LoginPage">
                    <Row>
                        <Col lg={12} md={12} xs={12} className="d-flex justify-content-center align-items-center flex-column welcomePage-image">
                            <Image src={WaveGif} alt="wave-gif" width={140} height={140} />
                            <h3 className="text-center">Hi, Praveen kumar! <br />Welcome Back</h3>
                        </Col>
                    </Row>
                </div>
            </div>
            </div>
        // </div>
    )
}
export default WelcomePage;

