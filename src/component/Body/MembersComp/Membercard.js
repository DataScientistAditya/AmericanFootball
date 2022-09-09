import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FooterComp from "../../Footer/Footer";
import HeaderLogo from "../../HeaderLogo/HeaderLogo";

const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null

const Banner = require("./Americanfootball.jpg");
const Membershipcomp=()=>{
    return(
        <>
             <HeaderLogo></HeaderLogo>
             <Container className="container-fluid" style={{minHeight:"100%",maxWidth:"100%", background:"#00538C"}}>
                <Row className="justify-content-center" >
                        <div style={{position:"relative",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"}}></div>
                        <div className="text-center" style={{fontFamily:"monospace",backgroundColor:"rgba(0,0,0,0.5)", width:"100%",height:(WindowWidth>=1280)?400:200,position:"relative",top:0,left:0}}>
                            
                            {/* <img style={{position:"relative",width:"100%",height:"100%"}} src={Banner}></img> */}
                                <h1 style={{marginTop:(WindowWidth>=1024)?"15rem":"8rem",color:"#fff", fontSize:(WindowWidth>=1280)?64:50}}>MEMBERSHIP</h1>
                        </div>
                </Row>
                <Row className="justify-content-center" style={{position:"relative",overflow:"hidden",backgroundColor:"#00538C",maxHeight:"40%"}}>
                        
                        <Col md={4} xxl lg="10" style={{marginTop:"5rem", marginBottom:"5rem"}}>
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:54}}>
                                    NFL SEASON DEAL
                                    </Card.Title>
                                    <p style={{textAlign:"center",color:"#fff",fontFamily:"monospace", fontSize:20}}>NFL Season Pass</p>
                                </Card.Header>
                                <Card.Body>
                                    <div className="text-center">
                                        <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45}}>$799</h4>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <p className="text-center" style={{color:"#E3E3E3",fontFamily:"roboto",fontSize:14}}>
                                    Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays For The Whole NFL Season (6 Months).
                                        Only Available For The Rest Of The Month Of August!
                                                (This Package Is For All Sporting Events NOT JUST NFL FOOTBALL)
                                    </p>
                                    <div className="text-center">
                                        <Button variant="primary" size="lg" style={{marginTop:20,minWidth:"100%",fontFamily:"roboto"}}>PURCHASE</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    
                </Row>
                <Row className="justify-content-center" style={{position:"relative",backgroundColor:"#00538C",maxHeight:"20%"}}>
                        <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"center",color:"#F79500",fontFamily:"sans-serif", fontSize:24}}>
                                        <button style={{color:"white",backgroundColor:"#F79500",fontFamily:"Roboto",border:"none",borderRadius:5}}>No Save</button>
                                    </Card.Title>
                                </Card.Header>
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
                            </Card>
                        </Col>
                        <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"center",color:"#22F700",fontFamily:"sans-serif", fontSize:24}}>
                                        <button style={{color:"white",backgroundColor:"#5DB350",fontFamily:"Roboto",border:"none",borderRadius:5}}>Save 33%</button>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="text-center">
                                        <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45}}>$599</h4>
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
                            </Card>
                        </Col>
                        <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24}}>
                                    <button style={{color:"white",backgroundColor:"#5DB350",fontFamily:"Roboto",border:"none",borderRadius:5}}>Save 50%</button>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="text-center">
                                        <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45}}>$799</h4>
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
                            </Card>
                        </Col>
                        <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
                            <Card className="shadow-lg" style={{backgroundColor:"#393939"}}>
                                <Card.Header>
                                    <Card.Title style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:24}}>
                                    <button style={{color:"white",backgroundColor:"#5DB350",fontFamily:"Roboto",border:"none",borderRadius:5}}>Save 60%</button>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="text-center">
                                        <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45}}>$999</h4>
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
                            </Card>
                        </Col>
                    
                </Row>
                <Row className="text-center" style={{position:"relative",backgroundColor:"#00538C",marginBottom:"3rem",marginTop:"3rem",maxHeight:"20%",maxWidth:"90%",left:"5%"}}>
                        <p style={{color:"#fff",fontSize:12,fontFamily:"Roboto"}}>
                            By Making A Purchase On This Website, You Are Hereby Agreeing That Duck Investments Aka Www.Duckinvestments.Com Aka @Duckinvestments Shall Not Be Liable For Any Direct, Indirect, Incidental, Special, Consequential, Or Exemplary Damages, Include But Not Limited To Damages For Loss Of Profits. Duck Investments Is Not A Gambling Site And Does Not Accept Or Place Wagers Of Any Type. This Website Does Not Endorse Or Encourage Illegal Gambling. All Information Provided By This Website Is For News And Entertainment Purposes Only. Any Use Of This Information In Violation Of Federal, State, Provincial, Or Local Laws Is Strictly Prohibited.</p>
                    
                </Row>
                <FooterComp></FooterComp>
            </Container>
        </>
    )
}

export default Membershipcomp;