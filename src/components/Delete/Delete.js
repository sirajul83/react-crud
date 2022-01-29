
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Modal,Button } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import {Link } from "react-router-dom";

export default function Delete(){
    const [users, setUser] = useContext(UserContext); 
    const { id } = useParams();

    const deleteUser = (id) => {
        const user = users.filter((user) => user.id != id);
        setUser([...user]);
      };
    
    return (
        <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure? </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="deleteBtn" variant="danger">Cancel</Button>
            <Button onClick={() => deleteUser(id)} variant="primary">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    );
}