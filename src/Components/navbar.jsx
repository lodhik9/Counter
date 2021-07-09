import React, { Component } from 'react';


const navBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              Navbar 
              <span
               className = "badge badge-pill badge-secondary">{totalCounters} 
               </span>
              </a>
        </div>
      </nav> 
       );
}
 
export default navBar;
