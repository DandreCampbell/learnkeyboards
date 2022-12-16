import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import './NavBar.css'

const Link = styled.span`
    padding: 15px;
    font-size: 20px;        
    font-weight: 575;
    color: black;
    &:hover {
        color: #F2681E;
    }
`;

const iconStyle = {
    fontSize: "24px",
    "&:hover": {
        color: "white"
    }
};

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="md" className="nav-style" variant="dark" style={{backgroundColor:"#728290"}}>  
            <Navbar.Toggle aria-controls="nav-burger-menu" className="ml-auto" style={iconStyle} />
            <Navbar.Collapse id="responsive-navbar" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px"           
            }}>
                <Nav>
                    <Nav.Link href="/"><Link>Home</Link></Nav.Link>
                    <Nav.Link href="/sizes"><Link>Sizes</Link></Nav.Link>
                    <Nav.Link href="/switches"><Link>Switches</Link></Nav.Link>                    
                    <Nav.Link href="/mods"><Link>Modifications</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}