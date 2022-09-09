import React,{useState} from "react";
import Navbarcomp from "../../component/Navbar/navbar";
import SidebarComp from "../../component/Sidebar/Sidebar";
import ShopScreencomp from "../../component/Body/Shop/ShopScreenComp";
import Authscreen from "../AuthScreen/AuthScreen";


const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
const ShopScreen=()=>{
    const [IsDispalySidebar,SetDisplaySidebar] = useState(false);
    const [displayAuth,SetdisplayAuth] = useState("none");
    const Sidebarenabled=(data)=>{
        if (!IsDispalySidebar) {
            SetDisplaySidebar(data);
        }
    }
    const Sidebarclose=()=>{
        if (IsDispalySidebar) {
            SetDisplaySidebar(false);
        }
    };

    const showAuth=()=>{
        if (displayAuth=== "none") {
            SetdisplayAuth("block");
        }
    }
    const CloseAuth=()=>{
        if (displayAuth=== "block") {
            SetdisplayAuth("none");
        }
    }
    if (WindowWidth>=1280) {
        return(
            <>
                <Authscreen AuthShow ={displayAuth} closeauth={CloseAuth}></Authscreen>
                <Navbarcomp SidebarClicked ={Sidebarenabled} ></Navbarcomp>
                <SidebarComp Show = {IsDispalySidebar} SetLoginTrue={showAuth} handleClose ={Sidebarclose}></SidebarComp>
                
                <ShopScreencomp></ShopScreencomp>
                
            </>
        )
    }else{
        return(
            <>
                <Authscreen AuthShow ={displayAuth} closeauth={CloseAuth}></Authscreen>
                <Navbarcomp></Navbarcomp>
                <ShopScreencomp></ShopScreencomp>
            </>
        )
    }
}

export default ShopScreen;