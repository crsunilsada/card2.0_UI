import React from 'react'
import Head from 'next/head';
import { Image } from 'react-bootstrap';
import Stepper from '../components/Stepper'
import Link from 'next/link';
const Homepage = () => {
    return (
        <><Stepper showReason={false} />
            <div className="pageMainWrap innerpage">
            <div className="pageMainWrap homepage">
                <Head>
                    <title>Homepage - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div style={{height: '220px'}}></div>
                <div className='d-flex justify-content-md-center'>
                    <div className="card m-4 mt-5" style={{ width: "18rem",height:"23rem" }}>
                        <div className="card-body text-center m-1">
                            <Image className='m-4'
                                src={"/images/manual-entry.png"}
                                alt="Manual entry"
                                width={85}
                                height={85}/>
                            <h5 className="card-title text-center mb-3 opacity-25">Manual Entry</h5>
                            <p className="opacity-25">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <Link href="/pdeScrutinyList">
                    <div className="card m-4 mt-5" style={{ width: "18rem" }}>
                        <div className="card-body text-center m-1">
                            <Image className='m-4'
                                src={"/images/OnlinePublicData.png"}
                                alt="Online public data entry"
                                width={85}
                                height={85} />
                            <h5 className="card-title text-center mb-3">Online Public Data Entry Service</h5>
                            <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div></>
    )
}
export default Homepage