import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFacebook} from "react-icons/bs";
import {FaInstagramSquare, FaTwitter} from "react-icons/fa";
import {BsGripVertical} from "react-icons/bs";
const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
const FooterComp=()=>{
    return(
        <Row className="justify-content-center" style={{backgroundColor:"#212529",maxHeight:"20%"}}>
                           {/* <Col xs lg="2" style={{marginTop:20}}>
                                <Card bg="dark" variant="dark" >
                                    <Card.Body>
                                        <Card.Title>
                                            <div className="text-center">
                                            <BsFacebook style={{color:"#fff",fontSize:40,textAlign:"center"}}></BsFacebook>
                                            </div>
                                        </Card.Title>

                                    </Card.Body>
                                    
                               </Card>
                                
                            </Col>
                            <Col xs lg="2" style={{marginTop:20}}>
                                <Card bg="dark" variant="dark" >
                                    <Card.Body>
                                        <Card.Title>
                                        <h1 style={{color:"#fff", fontSize:30, fontWeight:"bold",textAlign:"center"}}>|</h1>
                                        </Card.Title>

                                    </Card.Body>
                                        
                                </Card>
                              
                            </Col>
                            <Col xs lg="2" style={{marginTop:20}}>
                                <Card bg="dark" variant="dark" >
                                <Card.Body>
                                    <Card.Title>
                                    <div className="text-center">
                                        <FaInstagramSquare style={{color:"#fff",fontSize:40,textAlign:"center"}}></FaInstagramSquare>
                                    </div>
                                    </Card.Title>

                                </Card.Body>
                                    
                               </Card>
                                
                            </Col> */}
                            <div className="justify-content-center" style={{marginTop:60,position:"relative",width:"80%",display:"flex"}}>
                                <BsFacebook style={{color:"#fff",fontSize:40,textAlign:"center",marginRight:10}}></BsFacebook>
                                <BsGripVertical style={{color:"#fff",fontSize:40,textAlign:"center"}}></BsGripVertical>
                                <FaInstagramSquare style={{color:"#fff",fontSize:40,textAlign:"center"}}></FaInstagramSquare>
                            </div>
                        
                           <Row className="justify-content-center" style={{marginTop:60,position:"relative",width:"80%"}}>
                                <Col xs lg="1" style={{marginTop:10}}>
                                <p style={{color:"#FFCE06", fontSize:(WindowWidth>=1280)?16:12}}>Privecy</p>
                                </Col>
                                <Col xs lg="1" style={{marginTop:10}}>
                                <h1 style={{color:"#fff", fontSize:30, fontWeight:"bold"}}>|</h1>
                                </Col>
                                <Col xs lg="2" style={{marginTop:10}}>
                                <p style={{color:"#FFCE06", fontSize:(WindowWidth>=1280)?16:12}}>Terms & Service</p>
                                </Col>
                                <Col xs lg="1" style={{marginTop:10}}>
                                <h1 style={{color:"#fff", fontSize:30, fontWeight:"bold"}}>|</h1>
                                </Col>
                                <Col xs lg="1" style={{marginTop:10}}>
                                <p style={{color:"#FFCE06", fontSize:(WindowWidth>=1280)?16:12}}>Articles</p>
                                </Col>
                           </Row>
                        
                    
                </Row>
    )
}

export default FooterComp;