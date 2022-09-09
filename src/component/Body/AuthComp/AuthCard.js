import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
import FormComp from "./Authform";
import LoginFormComp from "./Loginform";



const AuthCardComp=(props)=>{
    const [LoginClicked,SetLoginClicked] = useState(false);
    return(
        <Card bg="dark" className="shadow-lg p-1 mb-5 rounded">
            <Card.Header>
                {(LoginClicked)?
                <Card.Title style={{color:"#fff"}}>LOGIN</Card.Title>
                :<Card.Title style={{color:"#fff"}}>REGISTER</Card.Title>}
            </Card.Header>
            <Card.Body>
                {(LoginClicked)?<LoginFormComp></LoginFormComp>:<FormComp></FormComp>}
            </Card.Body>
            {(LoginClicked)?
            <Card.Footer className="justify-content-center">
                <p style={{textAlign:"center",color:"#fff"}}>Dont Have an Account?</p>
                <a onClick={()=>SetLoginClicked(false)} style={{textDecoration:"none"}}><p style={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"#fff"}}>Sign Up</p></a>
                </Card.Footer>
            :<Card.Footer className="justify-content-center">
            <p style={{textAlign:"center",color:"#fff"}}>Already an Existing Member?</p>
            <a onClick={()=>SetLoginClicked(true)} style={{textDecoration:"none"}}><p style={{textAlign:"center",fontWeight:"bold",fontSize:20,color:"#fff"}}>Sign In</p></a>
        </Card.Footer>}
        </Card>
    )
}

export default AuthCardComp;