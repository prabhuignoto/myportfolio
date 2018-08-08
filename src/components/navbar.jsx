import React, { Component } from 'react';

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      background: '#13293D',
      color: '#fff',
    };
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <i className="brand-logo" />
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                {'Home'}
              </div>
              <div className="navbar-item">
                {'My Projects'}
              </div>
              <div className="navbar-item">
                {'Contact'}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
