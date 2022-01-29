import {BrowserRouter , Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from "./contexts/UserContext";
import Home from "./components/Home";
import Adduser from "./components/Adduser";
import Delete from "./components/Delete/Delete";
import View from "./components/View";
import Edit from "./components/Edit";


function App() {
  return (
    <BrowserRouter>
        <UserProvider>
            <Routes >
                <Route  path="/" element={<Home />} />
                <Route  path="adduser" element={<Adduser />} />
                <Route path="delete/:id" element={<Delete/>} />
                <Route path="edit/:id" element={<Edit/>} />
                <Route path="view/:id" element={<View/>} />
            </Routes >
        </UserProvider>    
    </BrowserRouter>
  );
}

export default App;
