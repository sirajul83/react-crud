import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container,Row,Col,Table,Button } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import {Link } from "react-router-dom";
export default function View(){
    const [users, setUser] = useContext(UserContext); 
    const { id } = useParams();
    const user = users.filter((user) => user.id == id);

    return (
        <Container>
            <br />
            <Row>

                <Col xs={10}> 
                <Link to={"/"}>
                    <Button style={{float : "right"}} className="actionBtn" variant="secondary">
                    Back
                    </Button>
                </Link>
                    <Table striped bordered hover>
                        <thead>
                              <tr>
                                    <th>Sl</th>
                                    <th> Name</th>
                                    <th>Roll</th>
                                    <th>CLass</th>
                                </tr>
                        </thead>
                        <tbody>
                            
                        {users.map((user) => (
                                    <tr>
                                        <td> {user.id}</td>
                                        <td> {user.name}</td>
                                        <td> {user.roll}</td>
                                        <td> {user.class}</td>
                                     </tr>
                                 ))}
                                
                        </tbody>
                        </Table>
                        </Col>
                        </Row>
                        </Container>
    );
}