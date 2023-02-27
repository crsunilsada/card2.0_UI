import Head from 'next/head';
import React from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';

const CropImage = () => {
    return (
        <div>
            <div className="pageMainWrap">
                <Head>
                    <title>Cropimage - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div className="mainWrapper">
                    <div className="wrapperInner">
                        <div className="acknowledgement">
                            <button className="partyDetails">Party Details</button>
                            <button className="active imaging">Imaging</button>
                        </div>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col lg={7} md={8} xs={12}>
                                    <div className="ml-200 crop-image-text mx-auto">
                                        <Image
                                            width={23}
                                            height={23}
                                            src="/images/Crop.svg"
                                        /> &nbsp;
                                        Crop the below image and Proceed</div>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <Image className='crops-image'
                                            src={"/images/person.svg"}
                                            alt="Picture of the person"
                                            width={169}
                                            height={199}
                                        />
                                    </div>
                                    <div className='btn-image d-flex'>
                                        <div ><Button className="btn btn-light whitebuttonclass m-4">Retake</Button></div> &nbsp;&nbsp;
                                       <div ><Button className='bluebuttonclass btn btn-light m-4'>Done</Button></div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CropImage