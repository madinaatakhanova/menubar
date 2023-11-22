import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/modal/Modal";
import Generation from './components/Generation/Generation'

function App() {
  
  return (
    <React.Fragment>

      <Navbar/>
      <Modal/>
      <Generation/>

      </React.Fragment>
    )
}

export default App;
