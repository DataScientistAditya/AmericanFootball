import React from "react";
import { Card, Col, Row } from "react-bootstrap";


const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
const TestimonialComp=()=>{
    return(
        <Row className="justify-content-center" style={{position:"relative",backgroundColor:"#00538C",maxHeight:"20%"}}>
            
        <div className="text-center">
            <h4 style={{color:"#fff", fontSize:(WindowWidth>=1280)?54:45,fontWeight:(WindowWidth>=1280)?"bolder":600}}>PROOF OF PUDDING</h4>
        </div>
        <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
            <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                
                <Card.Body >
                    <div className="text-center">
                        <img style={{width:"100%", height:"100%",position:"relative"}} src="https://img.buzzfeed.com/buzzfeed-static/static/2019-06/4/13/asset/buzzfeed-prod-web-02/sub-buzz-5858-1559670956-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto"></img>
                    </div>
                </Card.Body>
                
            </Card>
        </Col>
        <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
            <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                
                <Card.Body >
                    <div className="text-center">
                        <img style={{width:"100%", height:"100%",position:"relative"}} src="https://img.buzzfeed.com/buzzfeed-static/static/2019-06/4/13/asset/buzzfeed-prod-web-02/sub-buzz-5858-1559670956-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto"></img>
                    </div>
                </Card.Body>
                
            </Card>
        </Col>
        <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
            <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                
                <Card.Body >
                    <div className="text-center">
                        <img style={{width:"100%", height:"100%",position:"relative"}} src="https://img.buzzfeed.com/buzzfeed-static/static/2019-06/4/13/asset/buzzfeed-prod-web-02/sub-buzz-5858-1559670956-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto"></img>
                    </div>
                </Card.Body>
                
            </Card>
        </Col>
        <Col md={4} xxl lg="3" style={{marginTop:"2rem", marginBottom:"2rem"}}>
            <Card className="shadow-lg" style={{backgroundColor:"#00538C"}}>
                
                <Card.Body >
                    <div className="text-center">
                        <img style={{width:"100%", height:"100%",position:"relative"}} src="https://img.buzzfeed.com/buzzfeed-static/static/2019-06/4/13/asset/buzzfeed-prod-web-02/sub-buzz-5858-1559670956-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto"></img>
                    </div>
                </Card.Body>
                
            </Card>
        </Col>
        
    </Row>
    )
}
export default TestimonialComp;