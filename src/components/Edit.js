
import React, { useState, useContext } from "react";
import { Container, Row,Col, Button,Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import {Link,useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import  "../styles/Home.css";
export default function Edit(){

    const [users, setUser] = useContext(UserContext);
    const { id } = useParams();
    const user = users.filter((user) => user.id == id);

    const [name, setName] = useState(user[0].name);
    const [roll, setRoll] = useState(user[0].roll);
    const [ClassName, setClass] = useState(user[0].class);
    
   // const navigate  = useNavigate ();

    const editName = (e) => {
      setName(e.target.value);
      const edited_name = name;
      user[0].name = edited_name;
    };
  
    const editRoll = (e) => {
      setRoll(e.target.value);
      const edited_roll = roll;
      user[0].roll   = edited_roll;
    };
  
    const editClass = (e) => {
      setClass(e.target.value);
      const edited_class = ClassName;
      user[0].class = edited_class;
    };
  
    const editUser = (e) => {
      e.preventDefault();
      setUser([...users]);
      //navigate("/");
     
    };
      
    return (
        <Container>
            <br />
            <Row>
                <Col xs={10}> 
                <Form>
                       <Form.Group>
                        <Form.Label>
                            <h1>ID NO: {user[0].id}</h1>
                        </Form.Label>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={editName} placeholder={user[0].name}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Roll</Form.Label>
                        <Form.Control type="text" name="roll" value={roll} onChange={editRoll} placeholder={user[0].roll}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Class</Form.Label>
                        <Form.Control type="text" name="editCLads" value={ClassName} onChange={editClass} placeholder={user[0].class}
                        />
                        </Form.Group><br />
                        <Link to="/">
                             <Button onSubmit={()=>editUser} variant="primary" type="submit">
                            Edit User
                        </Button>
                       
                        <Button className="actionBtn" variant="secondary">
                            Back
                        </Button>
                        </Link>
                    </Form>
                </Col>
                </Row>
        </Container>
    );
};