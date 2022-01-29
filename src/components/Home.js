import { useContext } from "react";
import { Container, Row,Col, Button,Table } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import {Link } from "react-router-dom";
import  "../styles/Home.css";
export default function Home(){
    const [users, setUsers] = useContext(UserContext);
    
    return (
        <Container>
            <br />
            <Row>
                <Col xs={10}> 
                       <Link to="/adduser">
                            <Button className="AddBtn" variant="success">Add New </Button> <br />
                        </Link>
                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Sl</th>
                                    <th> Name</th>
                                    <th>Roll</th>
                                    <th>CLass</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {users.map((user) => (
                                    <tr>
                                        <td> {user.id}</td>
                                        <td> {user.name}</td>
                                        <td> {user.roll}</td>
                                        <td> {user.class}</td>
                                        <td className="ActionBtnTd">
                                        <Link to={"/view/"+user.id}>
                                            <Button className="actionBtn" variant="secondary">
                                            View
                                            </Button>
                                        </Link>
                                        <Link to={"/edit/"+user.id}>
                                            <Button className="actionBtn" variant="info">
                                            Edit
                                            </Button>
                                        </Link>
                                        <Link to={"/delete/"+user.id}>
                                            <Button className="actionBtn" variant="danger">
                                            Delete
                                            </Button>
                                        </Link>
                                        </td>
                                     </tr>
                                 ))}
                                
                                </tbody>
                            </Table>
                </Col>
                </Row>
        </Container>
    );
};