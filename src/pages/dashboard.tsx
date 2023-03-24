import React from 'react'
import Head from "next/head";

const Dashboard = () => {

    return (
        <div className='pageMainWrap innerpage'>
            <Head>
                <title>Dashboard - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div className="mainWrapper dashboardWidth">
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <p>DASHBOARD COMING SOON...</p>
                <img src='/images/dashboard.svg' width="588px" height="450px"/></div>
            </div>
        </div>
    )
}

export default Dashboard;
