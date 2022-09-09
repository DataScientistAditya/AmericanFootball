import React,{useState, useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FooterComp from "../../Footer/Footer";
import HeaderLogo from "../../HeaderLogo/HeaderLogo";

const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null

const BlackJacket = require("./Images/BlackJackets.png");
const WhiteJacket = require("./Images/WhiteJacket.png");
const OrangeJacket = require("./Images/OrangeJacket.png");

const BlackCap = require("./Images/BalckCap.png");
const WhiteCap = require("./Images/WhiteCap.png");
const RedCap = require("./Images/RedCap.png");

const BlueBag = require("./Images/BagBlue.png");
const Graybag = require("./Images/YellowBag.png");

const BlackTShirt = require("./Images/BlackTshirt.png");
const WhiteTShirt = require("./Images/WhiteTshirt.png");
const RedTShirt = require("./Images/RedTShirt.png");

const ShopScreencomp=()=>{
    const [JacketSlectValue,SetJacketSelectValue] = useState("Black");
    const [CapSlectValue,SetCapSelectValue] = useState("Black");
    const [TshirtSlectValue,SetTshirtSelectValue] = useState("Black");
    const [BagSlectValue,SetBagSelectValue] = useState("Blue");

    const [jacket,SetJacket] = useState(BlackJacket);
    const [cap,SetCap] = useState(BlackCap);
    const [bag,SetBag] = useState(BlueBag);
    const [Tshirt,SetTshirt] = useState(BlackTShirt)


    const ChangeJacketImage=()=>{
        if (JacketSlectValue === "Black") {
            SetJacket(BlackJacket);
        }else if (JacketSlectValue === "White") {
            SetJacket(WhiteJacket)
        }else{
            SetJacket(OrangeJacket)
        }
    };
    const ChangeCap=()=>{
        if (CapSlectValue === "Black") {
            SetCap(BlackCap);
        }else if (CapSlectValue === "White") {
            SetCap(WhiteCap)
        }else{
            SetCap(RedCap)
        }
    };
    const ChangeBag=()=>{
        if (BagSlectValue === "Blue") {
            SetBag(BlueBag);
        }else{
            SetBag(Graybag)
        }
    };
    const ChangeTShirtImage=()=>{
        if (TshirtSlectValue === "Black") {
            SetTshirt(BlackTShirt);
        }else if (TshirtSlectValue === "White") {
            SetTshirt(WhiteTShirt)
        }else{
            SetTshirt(RedTShirt)
        }
    };
    useEffect(()=>{
        ChangeJacketImage()
    },[JacketSlectValue]) 
    
    useEffect(()=>{
        ChangeCap()
    },[CapSlectValue]) 
    useEffect(()=>{
        ChangeBag()
    },[BagSlectValue]) 

    useEffect(()=>{
        ChangeTShirtImage()
    },[TshirtSlectValue]) 
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} src={jacket}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} onChange={(e)=>SetJacketSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Orange">Orange</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:300}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={cap}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetCapSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Red">Red</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:300}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={bag}></img>
                                    <select defaultValue="blue" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetBagSelectValue(e.target.value)}>
                                        <option value="Black">Blue</option>
                                        <option value="White">Yellow</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                    src={Tshirt}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetTshirtSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Orange">Red</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} src={jacket}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} onChange={(e)=>SetJacketSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Orange">Orange</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:300}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={cap}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetCapSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Red">Red</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:300}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={bag}></img>
                                    <select defaultValue="blue" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetBagSelectValue(e.target.value)}>
                                        <option value="Black">Blue</option>
                                        <option value="White">Yellow</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                    src={Tshirt}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetTshirtSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Orange">Red</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} src={jacket}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} onChange={(e)=>SetJacketSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Orange">Orange</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:300}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={cap}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetCapSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Red">Red</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C",minHeight:300}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                        src={bag}></img>
                                    <select defaultValue="blue" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetBagSelectValue(e.target.value)}>
                                        <option value="Black">Blue</option>
                                        <option value="White">Yellow</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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
                        <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                            
                            <Card.Body >
                                <div className="text-center">
                                    <img style={{width:200, height:200,position:"relative"}} 
                                    src={Tshirt}></img>
                                    <select defaultValue="balck" style={{color:"white",backgroundColor:"black",marginTop:10}} 
                                        onChange={(e)=>SetTshirtSelectValue(e.target.value)}>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                        <option value="Orange">Red</option>
                                    </select>
                                    <h4 style={{textAlign:"center",color:"#fff",fontFamily:"sans-serif", fontSize:45,marginTop:10}}>$299</h4>
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