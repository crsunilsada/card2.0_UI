import React from 'react';
import styles from "../styles/components/footer.module.scss";

import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className={styles.footer_body}>
            <Container>
                <Row>
                    <div className={styles.footer_content}>
                        <p>Copyright © All rights reserved with Registration & Stamps Department, Government of Andhra Pradesh.</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer