import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/components/header.module.scss";
import { Navbar, NavDropdown, Container, Col, Row, Nav } from "react-bootstrap";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header_body}>
      <Navbar className="navigation bg-primary" bg="light" expand="lg">
        <Container className="headerNavContainer">
          <div className="header-main-nav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="headerNavList navbar-nav">
                <Nav.Link
                  className={
                    router.pathname == "/" ? "active homeMenu" : "homeMenu"
                  }
                  href="/"
                >
                  <Image width={40} height={34} src="/images/Home.svg" />
                </Nav.Link>
                <Nav.Link
                  className={router.pathname == "/registration" ? "active" : ""}
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
  );
};

export default Header;
