import React,{useState} from "react";
import Container from "react-bootstrap/esm/Container";
import { CloseButton, Col, Row} from "react-bootstrap";
import AuthCardComp from "../../component/Body/AuthComp/AuthCard";

const Authscreen=(props)=>{
    let displayAuth = props.AuthShow
    return(
        <Container  style={{display:displayAuth,position:"fixed",zIndex:20,minWidth:"100%",backgroundColor:"rgba(0,0,0,0.5)",minHeight:"100%",marginBottom:"5rem"}}>
            <CloseButton onClick={()=>props.closeauth(true)} style={{backgroundColor:"#fff",float:"right",marginTop:"2rem"}}></CloseButton>
            <Row className="justify-content-center p-2 mb-5" style={{marginTop:"4rem"}}>
                <Col xs lg="4">
                    <AuthCardComp></AuthCardComp>
                </Col>
            </Row>
        </Container>
    )
};

export default Authscreen