
import React, { useState, useContext } from "react";
import { Container, Row,Col, Button,Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import {Link,useNavigate } from "react-router-dom";
import  "../styles/Home.css";
export default function Adduser(){
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [ClassName, setClass] = useState("");

    const navigate  = useNavigate ();

    const [users, setUser] = useContext(UserContext);

    const updateId = (e) => {
      setId(e.target.value);
      //console.log(id)
    };
    const updateName = (e) => {
        setName(e.target.value);
      };
      const updateRoll = (e) => {
        setRoll(e.target.value);
      };
      const updateClass = (e) => {
        setClass(e.target.value);
      };

      const addUser = (e) => {
        e.preventDefault();
        setUser([...users, {id:id, name:name, roll:roll, class:ClassName}]);
        navigate("/");
    }
      

    return (
        <Container>
            <br />
            <Row>
                <Col xs={10}> 
                <Form onSubmit={addUser}>
                        <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" name="id" value={id} onChange={updateId} placeholder="Enter ID"
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={updateName} placeholder="Enter Name"
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Roll</Form.Label>
                        <Form.Control type="text" name="roll" value={roll} onChange={updateRoll} placeholder="Enter Roll"
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Class</Form.Label>
                        <Form.Control type="text" name="ClassName" value={ClassName} onChange={updateClass} placeholder="Enter Class Name"
                        />
                        </Form.Group><br />
                        <Button className="actionBtn" variant="primary" type="submit">
                            Add User
                        </Button>
                        <Link to="/">
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