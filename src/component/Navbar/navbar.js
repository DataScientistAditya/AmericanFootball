import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {BiMenu, BiHome, BiRegistered} from "react-icons/bi"
import {BsCart2} from "react-icons/bs";
import {ImEnter} from "react-icons/im";
import {MdOutlineCardMembership} from "react-icons/md";
import React,{useState} from "react";


const Logo = require("./logo-New.png");
const Navbarcomp=(props)=>{

    const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
    console.log(WindowWidth);
   if (WindowWidth>=1024) {
    return(
        <Navbar bg="primary" expand="lg" variant="dark" style={{backgroundImage:"#0084C6"}}>
            <Container>
                <Navbar.Brand style={{zIndex:40}} onClick={()=>props.SidebarClicked(true)} className="justify-content-center"><BiMenu></BiMenu></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item style={{zIndex:40}}>
                        <Navbar.Brand><BsCart2></BsCart2></Navbar.Brand>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
   }else{
    return(
        <Navbar bg="primary" expand="lg" variant="dark" style={{backgroundImage:"#0084C6"}}>
            <Container>
                <Navbar.Brand className="justify-content-center" href="/">
                        <img width={40} height={40} src={Logo} ></img>
                </Navbar.Brand>
                {/* <NavDropdownProps></NavDropdownProps> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-center">
                        <Nav.Item className="ms-auto p-1">
                            <BiHome></BiHome><span style={{color:"#fff", marginLeft:10}}>Home</span>
                        </Nav.Item>
                        <Nav.Item className="ms-auto p-1">
                            <MdOutlineCardMembership></MdOutlineCardMembership><span style={{color:"#fff",marginLeft:10}}>Membarship</span>
                        </Nav.Item>
                        <Nav.Item className="ms-auto p-1">
                            <BiRegistered></BiRegistered><span style={{color:"#fff",marginLeft:10}}>Register</span>
                        </Nav.Item>
                        <Nav.Item className="ms-auto p-1">
                            <ImEnter></ImEnter><span style={{color:"#fff",marginLeft:10}}>Login</span>
                        </Nav.Item>
                        <Nav.Item className="ms-auto p-1">
                            <BsCart2></BsCart2><span style={{color:"#fff",marginLeft:10}}>Cart</span>
                        </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
   }
}

export default Navbarcomp;