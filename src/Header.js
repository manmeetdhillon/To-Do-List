import React from 'react';
import './index.css';
import images from './Images/OIP.jpeg'


const Header = () => {
  return(
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <img src={require('./Images/OIP.jpeg')} alt="To-do-List" style={{ width: '200px', marginLeft:'2px' }} />
    <h1 className="headerStyles focus:outline-none focus:shadow-outline ">Welcome to my To-Do-List</h1>
  </div>)
};

export default Header;
