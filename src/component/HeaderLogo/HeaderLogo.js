import React from "react";

const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null;
const LogoImage = require("../Navbar/logo-New.png");


const HeaderLogo=()=>{
    if (WindowWidth>=1024) {
        return(
            <div className="text-center" style={{zIndex:10,position:"absolute",top:10,zIndex:10,width:"100%"}} >
                        <img className="shadow-5" style={{width:150,height:150,position:"relative"}} src={LogoImage}></img>
                    </div>
        )
    }
    else{
        return(
            <div style={{zIndex:-1}}></div>
        )
    }
    
}

export default HeaderLogo;