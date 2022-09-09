import React from "react";
import { Offcanvas } from "react-bootstrap";
import {BiMenu, BiHome, BiRegistered} from "react-icons/bi"
import {BsCart2, BsFacebook} from "react-icons/bs";
import {FaInstagramSquare, FaTwitter,FaQuestion} from "react-icons/fa";
import {ImEnter} from "react-icons/im";
import {MdOutlineCardMembership} from "react-icons/md";
import {useNavigate} from "react-router-dom"
import {GiLockpicks} from "react-icons/gi";
import {AiFillShopping} from "react-icons/ai";



const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null;
const Logo  = require("../Navbar/logo-New.png");
const SidebarComp=(props)=>{

    const nav = useNavigate();
    return(
        <Offcanvas show={props.Show} scroll onHide={()=>props.handleClose(true)} style={{width:250,backgroundColor:"rgb(86, 86, 86,0.8)"}} >
            <Offcanvas.Header closeButton style={{backgroundColor:"#046DB5"}} >
                <div className="justify-content-center" style={{display:"flex"}}>
                    <img width={40} height={40} src={Logo} ></img><span style={{marginLeft:10, fontSize:(WindowWidth>1360)?30:20,fontWeight:"bold",color:"#fff"}}>BET PRO</span>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body > 
                <div className="justify-content-center" style={{marginTop:(WindowWidth>1360)?100:80}}>
                    <div className="ml-auto" onClick={()=>nav("/")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <BiHome style={{width:(WindowWidth>1360)?35:20,height:(WindowWidth>1360)?35:20, color:"#EAEAEA"}}></BiHome>
                        <h2 style={{color:"#EAEAEA", marginLeft:10,fontSize:(WindowWidth>1360)?30:20, cursor:"pointer"}}>Home</h2>
                    </div>
                    <hr style={{color:"#EAEAEA"}}></hr>
                    <div className="ml-auto" onClick={()=>nav("/membership")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <MdOutlineCardMembership style={{width:(WindowWidth>1360)?35:20,height:(WindowWidth>1360)?35:20, color:"#EAEAEA"}}></MdOutlineCardMembership>
                        <h2 style={{color:"#EAEAEA", marginLeft:10,fontSize:(WindowWidth>1360)?30:20,cursor:"pointer"}}>Member</h2>
                    </div>
                    <hr style={{color:"#EAEAEA"}}></hr>
                    <div onClick={()=>props.SetLoginTrue(true)} className="ml-auto" style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <BiRegistered  style={{width:(WindowWidth>1360)?35:20,height:(WindowWidth>1360)?35:20, color:"#EAEAEA"}}></BiRegistered>
                        <h2 style={{color:"#EAEAEA", marginLeft:10,fontSize:(WindowWidth>1360)?30:20,cursor:"pointer"}}>Register</h2>
                    </div>
                    <hr style={{color:"#EAEAEA"}}></hr>
                    <div className="ml-auto" onClick={()=>nav("/picks")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <GiLockpicks style={{width:(WindowWidth>1360)?35:20,height:(WindowWidth>1360)?35:20, color:"#EAEAEA"}}></GiLockpicks>
                        <h2 style={{color:"#EAEAEA", marginLeft:10,fontSize:(WindowWidth>1360)?30:20,cursor:"pointer"}}>Picks</h2>
                    </div>
                    <hr style={{color:"#EAEAEA"}}></hr>
                    <div className="ml-auto" onClick={()=>nav("/shop")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <AiFillShopping style={{width:(WindowWidth>1360)?35:20,height:(WindowWidth>1360)?35:20, color:"#EAEAEA"}}></AiFillShopping>
                        <h2 style={{color:"#EAEAEA", marginLeft:10,fontSize:(WindowWidth>1360)?30:20,cursor:"pointer"}}>Shop</h2>
                    </div>
                    <hr style={{color:"#EAEAEA"}}></hr>
                    <div className="ml-auto" onClick={()=>nav("/FAQ")} style={{display:"flex",marginLeft:10,marginBottom:5}}>
                        <FaQuestion style={{width:(WindowWidth>1360)?35:20,height:(WindowWidth>1360)?35:20, color:"#EAEAEA"}}></FaQuestion>
                        <h2 style={{color:"#EAEAEA", marginLeft:10,fontSize:(WindowWidth>1360)?30:20,cursor:"pointer"}}>FAQ</h2>
                    </div>
                    <hr style={{color:"#EAEAEA"}}></hr>
                    
                </div>
                {/* <div className="justify-content-center" style={{marginTop:50,height:100}}>
                   
                        <BsFacebook style={{width:40,height:40, marginRight:35,marginTop:40,color:"#fff"}}></BsFacebook>
                        <FaInstagramSquare style={{width:40,height:40, marginRight:35,marginTop:40, color:"#fff"}}></FaInstagramSquare>
                        <FaTwitter style={{width:40,height:40,marginTop:40,color:"#fff"}}></FaTwitter>
                </div> */}
            </Offcanvas.Body>
            
        </Offcanvas>
    )
}

export default SidebarComp;