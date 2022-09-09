import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FooterComp from "../../Footer/Footer";
import Blur from 'react-css-blur';
import HeaderLogo from "../../HeaderLogo/HeaderLogo";

const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
const LogoImage = require("../../Navbar/logo-New.png");

const PickComp=()=>{

    const current = new Date();
    let longMonth = current.toLocaleString('en-us', { month: 'long' });
    const date = `${longMonth} ${current.getDate()} , ${current.getFullYear()}`;
    
    return(
        <>  

            <HeaderLogo></HeaderLogo>
             <Container className="container-fluid" style={{minHeight:"100%",maxWidth:"100%", background:"#00538C"}}>
                <Row className="justify-content-center" >
                        
                        <div style={{position:"relative",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"}}></div>
                        <div className="ms-auto" style={{display:"block",fontFamily:"Roboto",backgroundColor:"rgba(0,0,0,0.5)", width:"100%",height:(WindowWidth>=1280)?300:150,top:0,left:0}}>
                            <h1 style={{marginTop:(WindowWidth>=1024)?"12rem":"8rem",marginLeft:10,float:"left",color:"#fff", fontSize:(WindowWidth>=1280)?64:50}}>{(date !== undefined)?date:<p></p>}</h1>
                        </div>
                        
                </Row>
                <Row className="justify-content-center" style={{position:"relative",backgroundColor:"#00538C",maxHeight:"20%"}}>
                    <div className="ml-auto">
                        <p style={{marginTop:"1rem",marginLeft:10,float:"left",color:"#C8CCC7", fontSize:(WindowWidth>=1280)?20:12}}>{(date !== undefined)?date:<p></p>}</p>
                    </div>
                    <div className="ml-auto">
                    <p style={{marginLeft:10,float:"left",color:"#C8CCC7", fontSize:(WindowWidth>=1280)?14:10}}>
                        Day Cards Are Released At 11:00AM EST (When Applicable) And Night Cards Are Released Between 4:30PM – 5:00PM EST. We Highly Recommend You Subscribe To Story Notifications On Our Instagram To Stay Up To Date

                    </p>
                    </div>
                    <div className="ml-auto">
                        <Button 
                            style={{marginLeft:10,minWidth:100}}
                            variant="outline-light">Today's Pick
                         </Button>
                         <Button 
                            style={{marginLeft:10, minWidth:100}}
                            variant="outline-light">About
                         </Button>
                    </div>
                    
                </Row>
                <Row className="justify-content-center" style={{marginTop:"4rem", marginBottom:"2rem"}}>
                    <div className="ml-auto">
                        <p style={{marginLeft:10,float:"left",color:"#fff", fontSize:(WindowWidth>=1280)?10:8}}> Recommended Betting Sites:</p>
                    </div>
                    <Col md={4} xxl lg="6" >
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"left",color:"#F79500",fontFamily:"sans-serif", fontSize:24}}>
                                        <h4 style={{color:"white",fontFamily:"Roboto",border:"none",borderRadius:5}}>Guaranteed Picks</h4>
                                    </Card.Title>
                                </Card.Header>
                                <Blur radius={'5px'}>
                                     <Card.Body>
                                    <div className="text-center">
                                        <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45}}>$299</h4>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <p className="text-center" style={{color:"#E3E3E3",fontFamily:"roboto",fontSize:14}}>
                                    Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.
                                    </p>
                                    <div className="text-center">
                                        <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>PURCHASE</Button>
                                    </div>
                                </Card.Footer>
                                </Blur>
                               
                            </Card>
                    </Col>
                    <Col md={4} xxl lg="6" >
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"left",color:"#22F700",fontFamily:"sans-serif", fontSize:24}}>
                                        <h4 style={{color:"white",fontFamily:"Roboto",border:"none",borderRadius:5}}>Straight Pics</h4>
                                    </Card.Title>
                                </Card.Header>
                                
                                <Card.Body>
                                    <Blur radius={'5px'}>
                                      <div className="text-center">
                                        <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45}}>$599</h4>
                                    </div>
                                    </Blur>
                                  
                                </Card.Body>
                                <Card.Footer>
                                    <Blur radius={'5px'}>
                                     <p className="text-center" style={{color:"#E3E3E3",fontFamily:"roboto",fontSize:14}}>
                                    Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.
                                    </p>
                                    <div className="text-center">
                                        <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>PURCHASE</Button>
                                    </div>
                                    </Blur>
                                   
                                </Card.Footer>
                            </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    
                    <Col md={4} xxl lg="6" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"left",color:"#F79500",fontFamily:"sans-serif", fontSize:24}}>
                                        <h4 style={{color:"white",fontFamily:"Roboto",border:"none",borderRadius:5}}>Pralay</h4>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body >
                                    <Blur radius={'5px'}>
                                         <div className="text-center">
                                            <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45}}>$299</h4>
                                            
                                        </div>
                                        <div className="text-center">
                                        <p className="text-center" style={{color:"#E3E3E3",fontFamily:"roboto",fontSize:14}}>
                                        Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.
                                        </p>
                                            
                                        </div>
                                    </Blur>
                                    
                                </Card.Body>
                                {/* <Card.Footer>
                                    <p className="text-center" style={{color:"#E3E3E3",fontFamily:"roboto",fontSize:14}}>
                                    Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.
                                    </p>
                                    <div className="text-center">
                                        <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>PURCHASE</Button>
                                    </div>
                                </Card.Footer> */}
                            </Card>
                    </Col>
                    <Col md={4} xxl lg="6" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"left",color:"#22F700",fontFamily:"sans-serif", fontSize:24}}>
                                        <h4 style={{color:"white",fontFamily:"Roboto",border:"none",borderRadius:5}}>Pralay</h4>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                <Blur radius={'5px'}>
                                     <div className="text-center">
                                        <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45}}>$599</h4>
                                    </div>
                                    <div className="text-center">
                                    <p className="text-center" style={{color:"#E3E3E3",fontFamily:"roboto",fontSize:14}}>
                                    Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.
                                    </p>
                                    </div>
                                </Blur>
                                   
                                </Card.Body>
                                {/* <Card.Footer>
                                    <p className="text-center" style={{color:"#E3E3E3",fontFamily:"roboto",fontSize:14}}>
                                    Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.
                                    </p>
                                    <div className="text-center">
                                        <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>PURCHASE</Button>
                                    </div>
                                </Card.Footer> */}
                            </Card>
                    </Col>
                </Row>
                <FooterComp></FooterComp>
            </Container>
        </>
    )
}

export default PickComp;