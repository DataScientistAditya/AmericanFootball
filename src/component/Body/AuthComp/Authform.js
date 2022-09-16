import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const FormComp=()=>{
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    const HandleRegistration=async(e)=>{
        e.preventDefault();
        const registrationData = {
            "email":email,
            "username":username,
            "password":password
        }

        console.log(registrationData)
        // try{
        //     const Resp = await axios.post("https://lmsbackendapis.herokuapp.com/lms/CreateClass/",registrationData);
        //     const Data = Resp.data;
        //     console.log(Data);
        //     SetMessege(Data.msg)
        //     e.target.reset();
        // }
        // catch(err){
        //     if (err.response) {
        //         // ✅ log status code here
        //         console.log(err.response.status);
        //         console.log(err.message);
        //         console.log(err.response.headers); // 👉️ {... response headers here}
        //         console.log(err.response.data); // 👉️ {... response data here}
        //         SetMessege(err.message);
        //         e.target.reset();
        //       }
        // }

    }

    return(
        <Form onSubmit={HandleRegistration}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{color:"#fff"}}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{color:"#fff"}}>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{color:"#fff"}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button style={{alignSelf:"center"}} variant="outline-primary" type="submit">
                Register
            </Button>
        </Form>
    )
}

export default FormComp;