import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Header-btn">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="Header-title">
          Slack - 바닐라코딩
        </div>
      </header>
    );
  }
}

export default Header;