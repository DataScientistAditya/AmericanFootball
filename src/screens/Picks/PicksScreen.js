import React,{useState} from "react";
import Navbarcomp from "../../component/Navbar/navbar";
import SidebarComp from "../../component/Sidebar/Sidebar";
import PickComp from "../../component/Body/Picks/Pics";
import Authscreen from "../AuthScreen/AuthScreen";


const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
const PicksScreen=()=>{
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
                
                <PickComp></PickComp>
                
            </>
        )
    }else{
        return(
            <>
                <Authscreen AuthShow ={displayAuth} closeauth={CloseAuth}></Authscreen>
                <Navbarcomp></Navbarcomp>
                <PickComp></PickComp>
            </>
        )
    }
}

export default PicksScreen;