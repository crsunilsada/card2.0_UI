import React from 'react'
import { Container } from 'react-bootstrap'
import Image from "next/image";
export const LocalNetwork = () => {
    return (
        <div>
            <div className="pageMainWrap innerpage">
                <div className="mainWrapper">
                    <div className="otherMenuwrapperInner1">
                        <div className="acknowledgement">
                            <h4>Aadhar Verification</h4>
                        </div>
                        <Container>
                            <div className='text-center mt-5 mb-5'>
                                <Image width={500} height={370} src="/images/localnetwork.svg" />
                                <h1 className='error-name'>Cannot Connect to a Local Network</h1>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LocalNetwork