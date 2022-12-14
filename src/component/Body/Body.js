import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {DiGoogleAnalytics,DiBingSmall} from "react-icons/di";
import {FaYahoo} from "react-icons/fa";
import FooterComp from "../Footer/Footer";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import {useNavigate} from "react-router-dom"
import TestimonialComp from "../Testimonial/Testimonial";
import "./Body.css";

const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null;
const HeaderImage = require("./BodyImage.jpg");
const ImageMiddle = require("./football.png");
const FooterImage = require("./footerImage.png");
const LogoImage = require("../Navbar/logo-New.png");
<<<<<<< Updated upstream
const Video = require("../../static/videos/video2.mp4");
=======
const Video = require("../../static/videos/video.mp4");
>>>>>>> Stashed changes


const nflimage=require("../../static/images/image1.jpg");
const nflimage2=require("../../static/images/image2.jpg");
const nflimage3=require("../../static/images/image3.jpg");
const nflimage4=require("../../static/images/image4.jpg");
const nflimage5=require("../../static/images/image5.jpg");
const nflimage6=require("../../static/images/image6.jpg")
const nflimage7=require("../../static/images/image7.jpg");
const nflimage8=require("../../static/images/image8.png");
const nflimage9=require("../../static/images/image9.jpg");



const nflimage10=require("../../static/images/image10.jpeg");
const nflimage11=require("../../static/images/image11.jpeg");
const nflimage12=require("../../static/images/image12.jpeg");
const nflimage13=require("../../static/images/image13.jpeg");

const LandingBodyComp=()=>{


  
    const [colorButton,setColorButton] = useState("primary");

    const [button1RadiusColor,setButton1RadiusColor] = useState("none");
    const [button2RadiusColor,setButton2RadiusColor] = useState("none");
    const [button3RadiusColor,setButton3RadiusColor] = useState("none");
    const [button4RadiusColor,setButton4RadiusColor] = useState("none");
    const [button5RadiusColor,setButton5RadiusColor] = useState("none");
    const [button6RadiusColor,setButton6RadiusColor] = useState("none");
    const [button7RadiusColor,setButton7RadiusColor] = useState("none");
    const [button8RadiusColor,setButton8RadiusColor] = useState("none");
    const [button9RadiusColor,setButton9RadiusColor] = useState("none");
    const nav = useNavigate();
    return(
        <>
            <HeaderLogo></HeaderLogo>
            <Container className="container-fluid" style={{minHeight:"100%",maxWidth:"100%",position:"absolute",top:0,zIndex:-1}}>
           
                <Row className="justify-content-center">
                {/* <div className="ml-auto" style={{backgroundColor:"rgba(0,0,0,0.5)", width:"100%",height:(WindowWidth>=1280)?700:300,position:"absolute",top:0,left:0,zIndex:-1}}></div> */}
                    <div className="ml-auto" style={{width:"100%",height:(WindowWidth>=1280)?600:(WindowWidth>=1550)?800:200,overflow:"hidden"}}>
                        <video  autoPlay={true} loop={true}  style={{width:"100%", resize:"cover"}}>
                            <source src={Video} type="video/mp4"/>
                            
                        </video>
                        
                    </div>
                    
                    <div className="text-center" style={{position:"absolute",marginTop:"20%", zIndex:5}}>
                        <h1 style={{color:"#fff", fontSize:(WindowWidth>=1280)?64:40}}>BET PRO</h1>
                        <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?35:20}}>BRING YOURSELF A CHANCE TO BE A HERO</h4>

                        
                        {(WindowWidth>=1024)?
                        <Button 
                                onMouseEnter={()=>setColorButton("secondary")} 
                                onMouseOut={()=>setColorButton("primary")}
                                variant={colorButton} onClick={()=>nav("/membership")} 
                                size="lg" 
                                style={{marginTop:80,height:80,minWidth:300,cursor:"pointer"} } 
                                className="outline-warning"> LETS GO </Button>:
                        <div></div>}
                    
                </div>
                    
                </Row>
                {/* Upper Middle */}
                <Row className="justify-content-center" style={{backgroundColor:"#00538C",maxHeight:"40%",position:"relative"}}>
                    <div className="ml-auto" style={{marginTop:80}}>
                        {/* <Col md={4} xxl lg="6">
                            <div className="text-center">
                                <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?74:45,fontWeight:(WindowWidth>=1280)?"bolder":600}}>BUILD TEAM</h4>
                            </div>
                        </Col> */}
                        {/* <Col md={{ span: 4, offset: 1 }} xxl lg="6">
                            <div className="text-center">
                                <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?74:45, fontWeight:(WindowWidth>=1280)?"bolder":600}}>BET SMART</h4>
                            </div>
                        </Col> */}
                    </div>
                    {/* <div className="ml-auto" style={{width:"50%",height:(WindowWidth>=1280)?400:200,overflow:"hidden",marginLeft:(WindowWidth>=1280)?250:0}}>
                        <img src={ImageMiddle} style={{width:"100%", resize:"cover"}}></img>
                    </div> */}

                    <div className="text-center" >
                        <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?45:22}}>As See On</h4>
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
                    <div className="text-center" style={{marginTop:30}}>
                        <Button
                         onMouseEnter={()=>setColorButton("secondary")} 
                         onMouseOut={()=>setColorButton("primary")}
                         variant={colorButton} onClick={()=>nav("/membership")} size="lg" style={{minWidth:300,height:80,cursor:"pointer"}} className="outline-warning">GET STARTED</Button>

                    </div>
                    <hr style={{color:"#fff",marginTop:10}}></hr>
                </Row >
                {/* Middle */}
                {(WindowWidth>=700)?

                // larger screen view
                <Row className="justify-content-center" style={{backgroundColor:"#00538C",maxHeight:"40%"}}>
                    <Row className="justify-content-center">
                        <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>

                        <Card bg="dark" variant="dark" className="rounded-circle shadow" 
                                style={{
                                    width:(WindowWidth>=1550)?250:180,
                                    height:(WindowWidth>=1550)?250:180,
                                    overflow:"hidden",
                                    borderWidth:4,
                                    borderStyle:"solid"}} 
                                    onClick={()=>nav("/shop")}
                                    onMouseEnter={()=>setButton1RadiusColor("block")} 
                                    onMouseOut={()=>setButton1RadiusColor("none")}>


                            
                                    <div className="ms-auto"
                                        
                                        style={{position:"relative",
                                                width:(WindowWidth>=1550)?250:180,
                                                height:(WindowWidth>=1550)?250:180,
                                                cursor:"pointer",
                                                }}>


                                               {(button1RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}

                                         {/* <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                        <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2> */}
                                        <img  style={{position:"relative",width:(WindowWidth>=1550)?250:180,height:(WindowWidth>=1550)?250:180,objectfit:"fill",zIndex:-1}} src={nflimage}></img>
                                    </div>

                            
                                
                        </Card>
                            
                        </Col>
                        <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>

                    
                                

                        <Card bg="dark" variant="dark" className="rounded-circle shadow" 
                            style={{
                                width:(WindowWidth>=1550)?250:180,
                                height:(WindowWidth>=1550)?250:180,
                                overflow:"hidden",
                                borderWidth:4,
                                borderStyle:"solid"}} 
                                onClick={()=>nav("/shop")}
                                onMouseEnter={()=>setButton2RadiusColor("block")} 
                                onMouseOut={()=>setButton2RadiusColor("none")}>

                                
                                <div className="ms-auto" 
                                        style={{
                                            position:"relative",
                                            width:(WindowWidth>=1550)?250:180,
                                            height:(WindowWidth>=1550)?250:180,
                                            cursor:"pointer"}} >


                                            {(button2RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}

                                        {/* <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                        <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2> */}
                                        <img  style={{position:"relative",width:(WindowWidth>=1550)?250:180,height:(WindowWidth>=1550)?250:180,objectfit:"fill",zIndex:-1}} src={nflimage2}></img>
                                </div>
                        </Card>
                            
                        </Col>
                        <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>

                            

                            <Card bg="dark" variant="dark" className="rounded-circle shadow" 
                                 style={{
                                    width:(WindowWidth>=1550)?250:180,
                                    height:(WindowWidth>=1550)?250:180,
                                    overflow:"hidden",
                                    borderWidth:4,
                                    borderStyle:"solid"}} 
                                    onClick={()=>nav("/shop")}
                                    onMouseEnter={()=>setButton3RadiusColor("block")} 
                                    onMouseOut={()=>setButton3RadiusColor("none")}
                                >
                                    
                                    <div className="ms-auto"  
                                                style={{
                                                    position:"relative",
                                                    width:(WindowWidth>=1550)?250:180,
                                                    height:(WindowWidth>=1550)?250:180,
                                                    cursor:"pointer"}} >

                                              {(button3RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}


                                                {/* <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                                <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2> */}
                                                    <img  style={{position:"relative",width:(WindowWidth>=1550)?250:180,height:(WindowWidth>=1550)?250:180,objectfit:"fill",zIndex:-1}} src={nflimage3}></img>
                                    </div>

                                    
                            </Card>
                            
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        {/* made the changes here =>>>> */}
                        <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>

                        <Card bg="dark" variant="dark" className="rounded-circle shadow" 
                             style={{
                                width:(WindowWidth>=1550)?250:180,
                                height:(WindowWidth>=1550)?250:180,
                                overflow:"hidden",
                                borderWidth:4,
                                borderStyle:"solid",
                                zIndex:5}} 
                                onClick={()=>nav("/shop")}
                                onMouseEnter={()=>setButton4RadiusColor("block")} 
                                onMouseOut={()=>setButton4RadiusColor("none")}
                            >
                            
                                <div className="ms-auto" 
                                    
                                    style={{
                                        position:"relative",
                                        width:(WindowWidth>=1550)?250:180,
                                        height:(WindowWidth>=1550)?250:180,
                                        cursor:"pointer"}}>
                                           {(button4RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}
                                        <img  style={
                                            {position:"absolute",
                                            width:(WindowWidth>=1550)?250:180,
                                            height:(WindowWidth>=1550)?250:180,
                                            objectfit:"fill",
                                        zIndex:-1}} 

                                            src={nflimage12}></img>
                                </div>


                                
                            
                        </Card>
                            
                        </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>

                       <Card bg="dark" variant="dark" className="rounded-circle shadow" 
                             style={{
                                width:(WindowWidth>=1550)?250:180,
                                height:(WindowWidth>=1550)?250:180,
                                overflow:"hidden",
                                borderWidth:4,
                                borderStyle:"solid"}} 
                                onClick={()=>nav("/shop")}
                                onMouseEnter={()=>setButton5RadiusColor("block")} 
                                onMouseOut={()=>setButton5RadiusColor("none")}
                            >
                               
                                <div className="ms-auto" 
                                        style={{
                                            position:"relative",
                                            width:(WindowWidth>=1550)?250:180,
                                            height:(WindowWidth>=1550)?250:180,
                                            cursor:"pointer"
                                        }}>

                                              {(button5RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}

                                            {/* <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2> */}
                                              <img  style={{position:"relative",width:(WindowWidth>=1550)?250:180,height:(WindowWidth>=1550)?250:180,objectfit:"fill",zIndex:-1}} src={nflimage11}></img>

                                </div>

                         
                          
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>

                     
                        
                       <Card bg="dark" variant="dark" className="rounded-circle shadow" 
                             style={{
                                width:(WindowWidth>=1550)?250:180,
                                height:(WindowWidth>=1550)?250:180,
                                overflow:"hidden",
                                borderWidth:4,
                                borderStyle:"solid"}} 
                                onClick={()=>nav("/shop")}
                                onMouseEnter={()=>setButton6RadiusColor("block")} 
                                onMouseOut={()=>setButton6RadiusColor("none")}
                            >
                               
                                
                                     <div className="ms-auto"  
                                        style={{
                                            position:"relative",
                                            width:(WindowWidth>=1550)?250:180,
                                            height:(WindowWidth>=1550)?250:180,
                                            cursor:"pointer"}}>

                                         {(button6RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}

                                            {/* <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2> */}
                                              <img  style={{position:"relative",width:(WindowWidth>=1550)?250:180,height:(WindowWidth>=1550)?250:180,objectfit:"fill",zIndex:-1}} src={nflimage13}></img>

                                    </div>

                            
                           
                       </Card>
                        
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow-sm" 
                             style={{
                                width:(WindowWidth>=1550)?250:180,
                                height:(WindowWidth>=1550)?250:180,
                                overflow:"hidden",
                                borderWidth:4,
                                borderStyle:"solid"}} 
                                onClick={()=>nav("/shop")}
                                onMouseEnter={()=>setButton7RadiusColor("block")} 
                                onMouseOut={()=>setButton7RadiusColor("none")}
                            >
                            
                                
                                    <div className="ms-auto" 
                                        style={{position:"relative",
                                                width:(WindowWidth>=1550)?250:180,
                                                height:(WindowWidth>=1550)?250:180,
                                                cursor:"pointer"}}>

                                           {(button7RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}

                                            {/* <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2> */}
                                            <img  style={{position:"relative",width:180,height:180,objectfit:"fill",zIndex:-1}} src={nflimage7}></img>
                                    </div>
                            
                            
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow-sm" 
                         style={{
                            width:(WindowWidth>=1550)?250:180,
                            height:(WindowWidth>=1550)?250:180,
                            overflow:"hidden",
                            borderWidth:4,
                            borderStyle:"solid"}} 
                            onClick={()=>nav("/shop")}
                            onMouseEnter={()=>setButton8RadiusColor("block")} 
                            onMouseOut={()=>setButton8RadiusColor("none")}
                        >
                            
                                        <div className="ms-auto" 
                                            style={{
                                                position:"relative",
                                                width:(WindowWidth>=1550)?250:180,
                                                height:(WindowWidth>=1550)?250:180,
                                                cursor:"pointer"}}>

                                            {(button8RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}

                                            {/* <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2> */}
                                             <img  style={{position:"relative",width:180,height:180,objectfit:"fill",zIndex:-1}} src={nflimage8}></img>
                                        </div>
                            
                         
                       </Card>
                        
                    </Col>
                    <Col  xs lg="3" className="ms-auto" style={{marginTop:30}}>
                       <Card bg="dark" variant="dark" className="rounded-circle shadow-sm" 
                             style={{
                                width:(WindowWidth>=1550)?250:180,
                                height:(WindowWidth>=1550)?250:180,
                                overflow:"hidden",
                                borderWidth:4,
                                borderStyle:"solid"}} 
                                onClick={()=>nav("/shop")}
                                onMouseEnter={()=>setButton9RadiusColor("block")} 
                                onMouseOut={()=>setButton9RadiusColor("none")}
                            >
                            
                                    <div className="ms-auto"  
                                        style={{
                                            position:"relative",
                                            width:(WindowWidth>=1550)?250:180,
                                            height:(WindowWidth>=1550)?250:180,
                                            cursor:"pointer"}}>

                                           {(button9RadiusColor==="block")?
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                        backgroundColor:"rgba(0,0,0,0.5)"
                                                    }}>

                                                </div>:
                                                <div className="ms-auto"
                                                    style={{
                                                        position:"absolute",
                                                        width:"100%",
                                                        height:"100%",
                                                    }}>

                                                </div>}

                                            {/* <h1 style={{fontSize:40,fontWeight:"bold",marginTop:30,color:"#fff",textAlign:"center"}}>2.5 M</h1>
                                            <h2 style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"#fff",textAlign:"center"}}>Subscribers</h2> */}
                                            <img  style={{position:"relative",width:180,height:180,objectfit:"fill",zIndex:-1}} src={nflimage9}></img>
                                    </div>
                        </Card>
                        
                    </Col>
                </Row>
                <div className="text-center" style={{marginTop:30}}>
                    <Button
                     onMouseEnter={()=>setColorButton("secondary")} 
                     onMouseOut={()=>setColorButton("primary")}
                     variant={colorButton} onClick={()=>nav("/shop")} size="lg" style={{minWidth:300,height:80,cursor:"pointer"}} className="outline-warning">NEW OFFERS</Button>
                </div>
                <hr style={{color:"#fff",marginTop:10}}></hr>
                </Row>:


                // mobile view
                <Row className="justify-content-center" style={{backgroundColor:"#00538C",maxHeight:"40%"}}>
                  
                        <Col xs lg ="3">
                            <div className="rounded-circle"  
                                style={{
                                    position:"relative",width:140,height:140, overflow:"hidden", marginTop:20
                                    }}
                                    onClick={()=>{return nav("/shop"),setButton1RadiusColor("block")}}
                                  
                                    >
                                <img  style={{position:"absolute",width:140,height:140,objectfit:"fill"}} src={nflimage}></img>
                            </div>
                            <div className="rounded-circle"  
                                style={{
                                    position:"relative",width:140,height:140, overflow:"hidden", marginTop:20
                                    }}
                                    onClick={()=>{return nav("/shop"),setButton2RadiusColor("block")}}>
                                <img  style={{position:"absolute",width:140,height:140,objectfit:"fill"}} src={nflimage3}></img>
                            </div>
                            <div className="rounded-circle"  
                                style={{
                                    position:"relative",width:140,height:140, overflow:"hidden", marginTop:20}}
                                    onClick={()=>{return nav("/shop"),setButton3RadiusColor("block")}}>
                                <img style={{position:"absolute",width:140,height:140,objectfit:"fill"}} src={nflimage12}></img>
                            </div>
                        </Col>
                        <Col xs lg ="3">
                            <div className="rounded-circle"  
                                style={{
                                    position:"relative",width:140,height:140, overflow:"hidden", marginTop:20}}
                                    onClick={()=>{return nav("/shop"),setButton3RadiusColor("block")}}>
                                <img  style={{position:"absolute",width:140,height:140,objectfit:"fill"}} src={nflimage13}></img>
                            </div>
                            <div className="rounded-circle"  
                                style={{
                                    position:"relative",width:140,height:140, overflow:"hidden", marginTop:20}}
                                    onClick={()=>{return nav("/shop"),setButton4RadiusColor("block")}}>
                                <img  style={{position:"absolute",width:140,height:140,objectfit:"fill"}} src={nflimage11}></img>
                            </div>
                            <div className="rounded-circle"  
                                style={{
                                    position:"relative",width:140,height:140, overflow:"hidden", marginTop:20}}
                                    onClick={()=>{return nav("/shop"),setButton5RadiusColor("block")}}>
                                <img  style={{position:"absolute",width:140,height:140,objectfit:"fill"}} src={nflimage10}></img>
                            </div>
                        </Col>
                        
                        
                    
                    <div className="text-center" style={{marginTop:30}}>
                        <Button onClick={()=>nav("/picks")} 
                         onMouseEnter={()=>setColorButton("secondary")} 
                         onMouseOut={()=>setColorButton("primary")}
                        variant={colorButton} size="lg" style={{minWidth:300,height:80,cursor:"pointer"}} className="outline-warning">LATEST PICKS</Button>
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
                        <Button onClick={()=>nav("/picks")} 
                         onMouseEnter={()=>setColorButton("secondary")} 
                         onMouseOut={()=>setColorButton("primary")}
                         variant={colorButton} size="lg" style={{minWidth:300,height:80,cursor:"pointer"}} className="outline-warning">BE A HERO</Button>
                    </div>

                    
                    
                </Row >
                {/* Footer */}
                <FooterComp></FooterComp>
            </Container>
            
        </>
        
    )
}

export default LandingBodyComp;