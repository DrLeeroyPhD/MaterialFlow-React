import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="">
        <a className="mf-logo" href="#">
          <img alt="Brand" src="/img/graphic_logo_matflow.png" />
        </a>


        <ul className="hamburger">
          <li className="top"></li>
          <li className="middle"></li>
          <li className="bottom"></li>
        </ul>

        <form className="search">
          <input type="search" placeholder="Search" />
          <button>Go</button>
        </form>





        {/* Shopping Nav */}
        <ul className="head-nav">
            <li className="list-item"><a href="#" className="">1-800-338-1382</a></li>
            <li className="list-item"><a href="#" className="">Cart</a></li>
            <li className="list-item"><a href="#" className="">Quote</a></li>
            <li className="list-item"><a href="#" className="">Resources</a></li>
            <li className="list-item"><a href="#" className="">Contact Us</a></li>
        </ul>




    </div>
    );
  }
}



export default Header;
