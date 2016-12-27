import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top bg-faded navbar-light container-fluid">
        <p className="navbar-brand">AK Flow</p>
        {/* Shopping Nav */}
        <ul className="nav navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">1-800-338-1382</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Cart</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Quote</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Resources</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
        </ul>
        {/* Search Bar */}
        
        
        <div className="main-menu nav-link navbar-right" id="main-menu">
            <nav className="navbar navbar-static-top" role="navigation">
                <div className="container pull-right">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    );
  }
}

export default Header;
