import React from "react";
import { Button, Form } from "react-bootstrap";


const LoginFormComp=()=>{
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{color:"#fff"}}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{color:"#fff"}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button style={{alignSelf:"center"}} variant="outline-primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default LoginFormComp;