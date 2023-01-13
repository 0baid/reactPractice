import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js'
import Modal from './components/Modal/Modal';

function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
  <>
  <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    <Router>
      <Navbar setOpenModal={setOpenModal}/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
