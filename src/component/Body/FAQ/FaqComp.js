import React from "react";
import HeaderLogo from "../../HeaderLogo/HeaderLogo";
import FooterComp from "../../Footer/Footer";
import Container from "react-bootstrap/esm/Container";
import FaqFormComp from "./FaqFormcomp";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
const FaqScreenComp=()=>{
    return(
        <>
            <HeaderLogo></HeaderLogo>
            <Container className="container-fluid" style={{minHeight:"100%",maxWidth:"100%", background:"#00538C"}}>
                <Row className="justify-content-center" >
                        <div style={{position:"relative",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"}}></div>
                        <div className="text-center" style={{fontFamily:"Roboto",backgroundColor:"rgba(0,0,0,0.5)", width:"100%",height:(WindowWidth>=1280)?350:180,position:"relative",top:0,left:0}}>
                            <h1 style={{marginTop:(WindowWidth>=1024)?"15rem":"8rem",color:"#fff", fontSize:(WindowWidth>=1280)?64:50}}>FREQUENTLY ASKED QUESTIONS</h1>
                        </div>
                </Row>
                <FaqFormComp></FaqFormComp>
                <FooterComp></FooterComp>
            </Container>
        </>
    )
}

export default FaqScreenComp;