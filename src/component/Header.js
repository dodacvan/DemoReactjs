import React, { Component } from 'react';

    class Header extends Component {

        render() {
          var name = "My Name"
            return ( 
            			<nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <a className="navbar-brand" href="#">Logo</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{ name}</a>
          </li>
        </ul>
      </nav>
            );
        }
    }
    export default Header;