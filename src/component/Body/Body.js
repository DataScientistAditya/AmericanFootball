import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {DiGoogleAnalytics,DiBingSmall} from "react-icons/di";
import {FaYahoo} from "react-icons/fa";
import { BsFacebook} from "react-icons/bs";
import {FaInstagramSquare, FaTwitter} from "react-icons/fa";
import Authscreen from "../../screens/AuthScreen/AuthScreen";
import FooterComp from "../Footer/Footer";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import {useNavigate} from "react-router-dom"
import TestimonialComp from "../Testimonial/Testimonial";

const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null;
const HeaderImage = require("./BodyImage.jpg");
const ImageMiddle = require("./football.png");
const FooterImage = require("./footerImage.png");
const LogoImage = require("../Navbar/logo-New.png");
const Video = require("./vids.mp4");

const LandingBodyComp=()=>{
    const nav = useNavigate();
    return(
        <>
            <HeaderLogo></HeaderLogo>
            <Container className="container-fluid" style={{minHeight:"100%",maxWidth:"100%",position:"absolute",top:0,zIndex:-1}}>
           
                <Row className="justify-content-center">
                <div className="ml-auto" style={{backgroundColor:"rgba(0,0,0,0.5)", width:"100%",height:(WindowWidth>=1280)?700:300,position:"absolute",top:0,left:0,zIndex:-1}}></div>
                    <div className="ml-auto" style={{width:"100%",height:(WindowWidth>=1280)?600:200,overflow:"hidden",zIndex:-2}}>
                        <video autoPlay={true} muted loop={true} style={{width:"100%", resize:"cover"}}>
                            <source type="video/mp4"  src={Video}></source>
                        </video>
                        
                    </div>
                    
                    <div className="text-center" style={{position:"absolute",marginTop:"20%", zIndex:5}}>
                        <h1 style={{color:"#fff", fontSize:(WindowWidth>=1280)?64:40}}>BET PRO</h1>
                        <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?35:20}}>BRING YOURSELF A CHANCE TO BE A HERO</h4>

                        
                        {(WindowWidth>=1024)?
                        <Button variant="primary" onClick={()=>nav("/membership")} size="lg" style={{marginTop:80,height:80,minWidth:300}} className="outline-warning">LETS GO</Button>:
                        <div></div>}
                    
                </div>
                    
                </Row>
                {/* Upper Middle */}
                <Row className="justify-content-center" style={{backgroundColor:"#00538C",maxHeight:"40%"}}>
                    <div className="ml-auto" style={{marginTop:80}}>
                        <Col md={4} xxl lg="6">
                            <div className="text-center">
                                <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?74:45,fontWeight:(WindowWidth>=1280)?"bolder":600}}>BUILD TEAM</h4>
                            </div>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }} xxl lg="6">
                            <div className="text-center">
                                <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?74:45, fontWeight:(WindowWidth>=1280)?"bolder":600}}>BET SMART</h4>
                            </div>
                        </Col>
                    </div>
                    <div className="ml-auto" style={{width:"50%",height:(WindowWidth>=1280)?400:200,overflow:"hidden",marginLeft:(WindowWidth>=1280)?250:0}}>
                        <img src={ImageMiddle} style={{width:"100%", resize:"cover"}}></img>
                    </div>
                    
                    <div className="text-center" style={{marginTop:30}}>
                        <Button variant="primary" onClick={()=>nav("/membership")} size="lg" style={{minWidth:300,height:80}} className="outline-warning">GET STARTED</Button>
                    </div>

                    <div className="text-center" style={{marginTop:30}}>
                        <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?35:22}}>As See On</h4>
                    </div>
                    <Col  xs lg={(WindowWidth>=1280)?"2":"1"} md={{span:4}} style={{marginTop:30}}>
                        <div className="text-center" >
                            <DiGoogleAnalytics  style={{fontSize:100,color:"#fff"}}></DiGoogleAnalytics>
                        </div>
                    </Col>
                    <Col xs lg={(WindowWidth>=1280)?"2":"1"} md={{span:4}} style={{marginTop:30}} >
                        <div className="text-center" >
                            <DiBingSmall style={{fontSize:100,color:"#fff"}}></DiBingSmall>
                        </div>
                    </Col>
                    <Col xs lg={(WindowWidth>=1280)?"2":"1"} md={{span:4}} style={{marginTop:30}}>
                        <div className="text-center" >
                            <FaYahoo style={{fontSize:100,color:"#fff"}}></FaYahoo>
                        </div>
                    </Col>
                    <hr style={{color:"#fff",marginTop:10}}></hr>
                </Row >
                {/* Middle */}
                {(WindowWidth>=1248)?
                <Row className="justify-content-center" style={{backgroundColor:"#00538C",maxHeight:"40%"}}>
                <Row className="justify-content-center">
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body >
                                <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    </div>
                            </Card.Body>
                            
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body>
                                    <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    </div>

                            </Card.Body>
                            
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body>
                                <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    </div>

                            </Card.Body>
                            
                       </Card>
                        
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body>
                            <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    </div>

                            </Card.Body>
                           
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body>
                                <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                </div>

                            </Card.Body>
                          
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body>
                                <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    </div>

                            </Card.Body>
                           
                       </Card>
                        
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body>
                                
                                    <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    </div>
                            </Card.Body>
                            
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body>
                                        <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                        </div>
                            </Card.Body>
                         
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" style={{width:180,height:180}}>
                            <Card.Body>
                                    <div className="text-center">
                                            <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    </div>

                            </Card.Body>
                            
                       </Card>
                        
                    </Col>
                </Row>
                <div className="text-center" style={{marginTop:30}}>
                    <Button variant="primary" onClick={()=>nav("/shop")} size="lg" style={{minWidth:300,height:80}} className="outline-warning">NEW OFFERS</Button>
                </div>
                <hr style={{color:"#fff",marginTop:10}}></hr>
                </Row>:
                <Row className="justify-content-center" style={{backgroundColor:"#00538C",maxHeight:"40%"}}>
                    <Row className="justify-content-center">
                        <Col  xs lg="3"  style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark">
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                        <Col  xs lg="3"  style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark"  >
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                        <Col  xs lg="3"  style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark"  >
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col  xs lg="3"  style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark"  >
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                        <Col  xs lg="3"  style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark" >
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                        <Col  xs lg="3"  style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark"  >
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col  xs lg="3"  style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark" >
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                        <Col  xs lg="3" style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark" >
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                        <Col  xs lg="3"  style={{overflow:"hidden",marginTop:30}}>
                        <Card bg="dark" variant="dark"  >
                                <Card.Body>
                                    <Card.Title>
                                        <h1 style={{fontSize:40,fontWeight:"bold",color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                    </Card.Title>

                                </Card.Body>
                                <Card.Footer>
                                    <h2 style={{fontSize:20,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2>
                                    
                                </Card.Footer>
                        </Card>
                            
                        </Col>
                    </Row>
                    <div className="text-center" style={{marginTop:30}}>
                        <Button onClick={()=>nav("/picks")} variant="primary" size="lg" style={{minWidth:300,height:80}} className="outline-warning">LATEST PICKS</Button>
                    </div>
                    <hr style={{color:"#fff",marginTop:10}}></hr>
                </Row>}
                <TestimonialComp></TestimonialComp>
                {/* Lower Middle */}
                <Row className="justify-content-center" style={{backgroundColor:"#00538C",maxHeight:"40%"}}>
                    <div className="ml-auto" style={{marginTop:80}}>
                        <Col md={4} xxl lg="6">
                            <div className="text-center">
                                <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?54:45,fontWeight:(WindowWidth>=1280)?"bolder":600}}>LIVE YOUR DREAM</h4>
                            </div>
                        </Col>
                        <div className="text-center" style={{width:"100%",height:(WindowWidth>=1280)?700:200,overflow:"hidden"}}>
                            <img src={FooterImage} style={{width:"100%", resize:"cover"}}></img>
                        </div>
                        <Col md={{ span: 4, offset: 4}} xxl lg="6">
                            <div className="text-center">
                                <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?45:30, fontWeight:(WindowWidth>=1280)?"bolder":600}}>FOLLOW US ON TWITTER</h4>
                            </div>
                        </Col>
                    </div>
                   
                    
                    <div className="text-center" style={{marginTop:30,marginBottom:10}}>
                        <Button onClick={()=>nav("/picks")}  variant="primary" size="lg" style={{minWidth:300,height:80}} className="outline-warning">BE A HERO</Button>
                    </div>

                    
                    
                </Row >
                {/* Footer */}
                <FooterComp></FooterComp>
            </Container>
            
        </>
        
    )
}

export default LandingBodyComp;