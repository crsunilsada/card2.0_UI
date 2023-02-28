import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/components/header.module.scss";
import { Navbar, NavDropdown, Container, Col, Row, Nav } from "react-bootstrap";
import banner from 'images/Header1.png'

const Header = () => {
  const router = useRouter();
  return (
    <><div className="fixed-top "><img src={"/images/Header1.png"} className="header-image"></img><header className={styles.header_body}>
      <Navbar className="navigation bg-primary" bg="light" expand="lg">
        <Container className="headerNavContainer homepageheader">
          <div className="header-main-nav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="headerNavList navbar-nav">
                <Nav.Link
                  className={router.pathname == "/" ? "active homeMenu" : "homeMenu"}
                  href="/"
                >
                  <Image width={25} height={20} src="/images/Home.svg" />
                </Nav.Link>
                <Nav.Link
                  className={router.pathname == "/registration" ? "active" : "active"}
                  href="/registration"
                >
                  REGISTRATION
                </Nav.Link>
                <Nav.Link
                  className={router.pathname == "/sro" ? "active" : ""}
                  href="/sro"
                >
                  SRO
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
    </div>
    <div className="header-space"></div>
    </>
  );
};

export default Header;
