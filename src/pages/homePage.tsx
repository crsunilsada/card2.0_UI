import React from 'react'
import Head from 'next/head';
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import Stepper from '../components/Stepper'

const Homepage = () => {
    return (
        <>
        <div>
                <div className="pageMainWrap homepage">
                    <Head>
                        <title>Homepage - CARD</title>
                        <meta name="description" content="login" />
                        <link rel="icon" href="/igrsfavicon.ico" />
                    </Head>
                    <div className='d-flex justify-content-md-center'>
                        <div className="card m-3 opacity-50 btn" style={{ width: "18rem" }}>
                            <div className="card-body text-center m-1">
                                <Image className='m-4'
                                    src={"/images/manual-entry.png"}
                                    alt="Manual entry"
                                    width={85}
                                    height={85} />
                                <h5 className="card-title text-center mb-3">Manual Entry</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" className ="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                        <div className="card m-3 btn" style={{ width: "18rem" }}>
                            <div className="card-body text-center m-1">
                                <Image className='m-4'
                                    src={"/images/OnlinePublicData.png"}
                                    alt="Online public data entry"
                                    width={85}
                                    height={85}
                                 />

                                <h5 className="card-title text-center mb-3">Online Public Data Entry Service</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" className ="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Homepage