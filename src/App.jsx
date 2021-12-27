import {useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Leftbar from "./components/leftbar/Leftbar";
import Update from "./components/update/Update";
import "./app.css";


const App = () => {

  const [name , setName] = useState("john");
  return (
    <>
      <Navbar name={name} />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  
  );
};

export default App;

