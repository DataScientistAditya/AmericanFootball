import React,{useState} from "react";
import { Card, Col, Row } from "react-bootstrap";


const FaqFormComp=()=>{
    const [displaycardOne,SetDisplayuCardOne] = useState("none");
    const [displaycardTwo,SetDisplayuCardTwo] = useState("none");
    const [displaycardThree,SetDisplayuCardThree] = useState("none");
    const [displaycardFour,SetDisplayuCardFour] = useState("none");
    const [displaycardFive,SetDisplayuCardFive] = useState("none");
    const [displaycardSix,SetDisplayuCardSix] = useState("none");

    const SetDisplayOne=()=>{
        if (displaycardOne==="block") {
            SetDisplayuCardOne("none");
        }else{
            SetDisplayuCardOne("block");
            SetDisplayuCardTwo("none");
            SetDisplayuCardThree("none");
            SetDisplayuCardFour("none");
            SetDisplayuCardFive("none");
            SetDisplayuCardSix("none");

        }
    };
    const SetDisplayTwo=()=>{
        if (displaycardTwo==="block") {
            SetDisplayuCardTwo("none");
        }else{
            SetDisplayuCardTwo("block");
            SetDisplayuCardOne("none");
            SetDisplayuCardThree("none");
            SetDisplayuCardFour("none");
            SetDisplayuCardFive("none");
            SetDisplayuCardSix("none");
        }
    };
    const SetDisplayThree=()=>{
        if (displaycardThree==="block") {
            SetDisplayuCardThree("none");
        }else{
            SetDisplayuCardThree("block");
            SetDisplayuCardTwo("none");
            SetDisplayuCardOne("none");
            SetDisplayuCardFour("none");
            SetDisplayuCardFive("none");
            SetDisplayuCardSix("none");
        }
    };
    const SetDisplayFour=()=>{
        if (displaycardFour==="block") {
            SetDisplayuCardFour("none");
        }else{
            SetDisplayuCardFour("block");
            SetDisplayuCardTwo("none");
            SetDisplayuCardThree("none");
            SetDisplayuCardOne("none");
            SetDisplayuCardFive("none");
            SetDisplayuCardSix("none");
        }
    };
    const SetDisplayFive=()=>{
        if (displaycardFive==="block") {
            SetDisplayuCardFive("none");
        }else{
            SetDisplayuCardFive("block");
            SetDisplayuCardTwo("none");
            SetDisplayuCardThree("none");
            SetDisplayuCardFour("none");
            SetDisplayuCardOne("none");
            SetDisplayuCardSix("none");
        }
    };
    const SetDisplaySix=()=>{
        if (displaycardSix==="block") {
            SetDisplayuCardSix("none");
        }else{
            SetDisplayuCardSix("block");
            SetDisplayuCardTwo("none");
            SetDisplayuCardThree("none");
            SetDisplayuCardFour("none");
            SetDisplayuCardFive("none");
            SetDisplayuCardOne("none");
        }
    };
    return(
        <>
            <Row className="justify-content-center" style={{backgroundColor:"#00538C",minHeight:500}}>
                <Col md={4} xxl lg="10" style={{marginTop:100,marginBottom:10}}>
                    <Card  style={{backgroundColor:"#00538C",borderWidth:1,borderColor:"#fff"}} variant="dark" className="shadow">
                        <Card.Title onClick={SetDisplayOne}>
                            <h1 style={{fontSize:30,fontWeight:"bold",color:"#fff",textAlign:"left", marginLeft:20}}>What's A Guaranteed Pick?</h1>
                        </Card.Title>
                        <Card.Body style={{display:displaycardOne}}>
                            <div className="ml-auto" style={{color:"#fff"}}>
                                <p>
                                    A Guaranteed Pick Is Not Literally Guaranteed. In The Betting World, A Guaranteed Pick Is Known As A Pick That Is Highly Recommended, With Lower Observed Risk Than A Straight Pick, Parlay, Etc.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} xxl lg="10" style={{marginTop:20,marginBottom:10}}>
                    <Card  style={{backgroundColor:"#00538C",borderWidth:1,borderColor:"#fff"}} variant="dark" className="shadow">
                        <Card.Title onClick={SetDisplayTwo}>
                            <h1 style={{fontSize:30,fontWeight:"bold",color:"#fff",textAlign:"left", marginLeft:20}}>WHAT'S A PARLAY?</h1>
                        </Card.Title>
                        <Card.Body style={{display:displaycardTwo}}>
                            <div className="ml-auto" style={{color:"#fff"}}>
                                <p>
                                    A Parlay Is A Selection Of 2 Or More Picks Rallied Into 1 Betting Card To Provide A Higher Payout. Although There Is An Increased Risk Since All Picks Are Required To Be Successful Opposed To Betting The Picks Individually.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} xxl lg="10" style={{marginTop:20,marginBottom:10}}>
                    <Card  style={{backgroundColor:"#00538C",borderWidth:1,borderColor:"#fff"}} variant="dark" className="shadow">
                        <Card.Title onClick={SetDisplayThree}>
                            <h1 style={{fontSize:30,fontWeight:"bold",color:"#fff",textAlign:"left", marginLeft:20}}>WHAT'S A STRAIGHT PICK?</h1>
                        </Card.Title>
                        <Card.Body style={{display:displaycardThree}}>
                            <div className="ml-auto" style={{color:"#fff"}}>
                                <p>
                                Straight Picks Are Intended To Be Bet On Individual Cards, Not Parlays.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} xxl lg="10" style={{marginTop:20,marginBottom:10}}>
                    <Card  style={{backgroundColor:"#00538C",borderWidth:1,borderColor:"#fff"}} variant="dark" className="shadow">
                        <Card.Title onClick={SetDisplayFour}>
                            <h1 style={{fontSize:30,fontWeight:"bold",color:"#fff",textAlign:"left", marginLeft:20}}>WHERE DO I PLACE A BET?</h1>
                        </Card.Title>
                        <Card.Body style={{display:displaycardFour}}>
                            <div className="ml-auto" style={{color:"#fff"}}>
                                <p>
                                    A Guaranteed Pick Is Not Literally Guaranteed. In The Betting World, A Guaranteed Pick Is Known As A Pick That Is Highly Recommended, With Lower Observed Risk Than A Straight Pick, Parlay, Etc.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} xxl lg="10" style={{marginTop:20,marginBottom:10}}>
                    <Card  style={{backgroundColor:"#00538C",borderWidth:1,borderColor:"#fff"}} variant="dark" className="shadow">
                        <Card.Title onClick={SetDisplayFive}>
                            <h1 style={{fontSize:30,fontWeight:"bold",color:"#fff",textAlign:"left", marginLeft:20}}>ARE YOU HIRING?</h1>
                        </Card.Title>
                        <Card.Body style={{display:displaycardFive}}>
                            <div className="ml-auto" style={{color:"#fff"}}>
                                <p>
                                    Not At The Moment. But When We Begin Hiring For New Roles, We'll Announce It On Our Instagram Account.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} xxl lg="10" style={{marginTop:20,marginBottom:100}}>
                    <Card  style={{backgroundColor:"#00538C",borderWidth:1,borderColor:"#fff"}} variant="dark" className="shadow">
                        <Card.Title onClick={SetDisplaySix}>
                            <h1 style={{fontSize:30,fontWeight:"bold",color:"#fff",textAlign:"left", marginLeft:20}}>DO YOU OFFER REFERRAL OR INFLUENCER PROGRAMS?</h1>
                        </Card.Title>
                        <Card.Body style={{display:displaycardSix}}>
                            <div className="ml-auto" style={{color:"#fff"}}>
                                <p>
                                If You Believe You Could Bring In New Business, We're Certainly Open To Discussing The Option Of You Becoming A Brand Ambassador For Duck Investments. As A Brand Ambassador, You'll Receive A Portion Of Your Acquired Members' Membership Fees As A Commission. For More Information, Please Contact Us.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default FaqFormComp;