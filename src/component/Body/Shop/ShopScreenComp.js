import React,{useState, useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FooterComp from "../../Footer/Footer";
import HeaderLogo from "../../HeaderLogo/HeaderLogo";

const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null

const nflimage=require("../../../static/images/image1.jpg");
const nflimage2=require("../../../static/images/image2.jpg");
const nflimage3=require("../../../static/images/image3.jpg");
const nflimage4=require("../../../static/images/image4.jpg");
const nflimage5=require("../../../static/images/image5.jpg");
const nflimage6=require("../../../static/images/image6.jpg")
const nflimage7=require("../../../static/images/image7.jpg");
const nflimage8=require("../../../static/images/image8.png");
const nflimage9=require("../../../static/images/image9.jpg");



const nflimage10=require("../../../static/images/image10.jpeg");
const nflimage11=require("../../../static/images/image11.jpeg");
const nflimage12=require("../../../static/images/image12.jpeg");
const nflimage13=require("../../../static/images/image13.jpeg");

const ShopScreencomp=()=>{
    return(
        <>
             <HeaderLogo></HeaderLogo>
             <Container className="container-fluid" style={{minHeight:"100%",maxWidth:"100%", background:"#00538C"}}>
                <Row className="justify-content-center" >
                        <div style={{position:"relative",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"}}></div>
                        <div className="text-center" style={{fontFamily:"monospace",backgroundColor:"rgba(0,0,0,0.5)", width:"100%",height:(WindowWidth>=1280)?350:180,position:"relative",top:0,left:0}}>
                            
                            {/* <img style={{position:"relative",width:"100%",height:"100%"}} src={Banner}></img> */}
                                <h1 style={{marginTop:(WindowWidth>=1024)?"12rem":"8rem",color:"#fff", fontSize:(WindowWidth>=1280)?64:50}}>SHOP</h1>
                        </div>
                </Row>
                <Row className="justify-content-center" style={{position:"relative",backgroundColor:"#00538C",maxHeight:"20%"}}>
                    <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C", minHeight:500,height:520, maxHeight:550}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img 
                                        style={{width:200, height:200,position:"relative"}} 
                                        src={nflimage2}></img>
                                     <h1 
                                            style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:28, fontWeight:"bolder",marginTop:20}}>
                                                MAJOR LEAGUE BASEBALL
                                    </h1>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"Roboto", fontSize:16,marginTop:10}}>
                                    MAJOR LEAGUE BASEBALL MONTHLY. 30 DAYS*
                                    </p>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24,marginTop:10,fontWeight:"bold"}}>$1299</h4>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>ADD TO CART</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:500,height:520, maxHeight:550}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={nflimage3}></img>
                                   
                                   <h1 
                                            style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:28, fontWeight:"bolder",marginTop:20}}>
                                                NBA MONTHLY
                                    </h1>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"Roboto", fontSize:16,marginTop:10}}>
                                    NFL PLAYS FOR 1 MONTH. 30 DAYS*
                                    </p>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24,marginTop:10,fontWeight:"bold"}}>$1799</h4>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>ADD TO CART</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:500,height:520, maxHeight:550}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={nflimage4}></img>
                                  
                                    <h1 
                                            style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:28, fontWeight:"bolder",marginTop:20}}>
                                                SUNDAY NIGHT FOOTBALL
                                    </h1>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"Roboto", fontSize:16,marginTop:10}}>
                                        WEEK 1. CHARGERS VS CHIEFS 7PM EST* $49.95
                                    </p>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24,marginTop:10,fontWeight:"bold"}}>$599</h4>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>ADD TO CART</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:500,height:520, maxHeight:550}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                    src={nflimage5}></img>
                                    <h1 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:28, fontWeight:"bolder",marginTop:20}}>THURSDAY NIGHT FOOTBALL</h1>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"Roboto", fontSize:16,marginTop:10}}>WEEK 1. CHARGERS VS CHIEFS 7PM EST* $49.95</p>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24,marginTop:10, fontWeight:"bold"}}>$299</h4>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>ADD TO CART</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>   
                    
                </Row>
                <Row className="justify-content-center" style={{position:"relative",backgroundColor:"#00538C",maxHeight:"20%"}}>
                    <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:500,height:520, maxHeight:550}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                    src={nflimage10}></img>
                                  
                                  <h1 
                                            style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:28, fontWeight:"bolder",marginTop:20}}>
                                                WEEKLY ALL SPORTS
                                    </h1>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"Roboto", fontSize:16,marginTop:10}}>
                                        ALL SPORT PRICE *
                                    </p>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24,marginTop:10,fontWeight:"bold"}}>$499</h4>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>ADD TO CART</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:500,height:520, maxHeight:550}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={nflimage11}></img>
                                  
                                  <h1 
                                            style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:28, fontWeight:"bolder",marginTop:20}}>
                                                LOCK OF THE DAY
                                    </h1>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"Roboto", fontSize:16,marginTop:10}}>
                                        WGUARANTEED WINNER OR WE REFUND YOUR PURCHASE PRICE
                                    </p>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24,marginTop:10,fontWeight:"bold"}}>$999</h4>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>ADD TO CART</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:500,height:520, maxHeight:550}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={nflimage8}></img>
                                   
                                     <h1 
                                            style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:28, fontWeight:"bolder",marginTop:20}}>
                                                NBA MONTHLY
                                    </h1>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"Roboto", fontSize:16,marginTop:10}}>
                                    NFL PLAYS FOR 1 MONTH. 30 DAYS*
                                    </p>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24,marginTop:10,fontWeight:"bold"}}>$2099</h4>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>ADD TO CART</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:500,height:520, maxHeight:550}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                    src={nflimage12}></img>
                                   
                                   <h1 
                                            style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:28, fontWeight:"bolder",marginTop:20}}>
                                                WEEKLY TENIS
                                    </h1>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"Roboto", fontSize:16,marginTop:10}}>
                                    TENISS PLAYS FOR 1 WEEK, 7 DAYS*
                                    </p>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24,marginTop:10,fontWeight:"bold"}}>$1799</h4>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>ADD TO CART</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>   
                    
                </Row>
                
                <FooterComp></FooterComp>
            </Container>
        </>
    )
}

export default ShopScreencomp;