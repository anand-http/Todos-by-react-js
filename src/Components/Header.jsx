import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';



function Header(props) {
    return (
        <>
            <Navbar bg="danger" expand="lg"  >
                <Container fluid >
                    <Navbar.Brand href="/">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contactus">Contact Us</Nav.Link>
                          
                    
                        </Nav>
                        { props.searchBar? <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> : ""}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}


export default Header;

Header.propTypes ={
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
    
Header.defaultProps = {
    title:"mai title hoo",
    searchBar:false
}