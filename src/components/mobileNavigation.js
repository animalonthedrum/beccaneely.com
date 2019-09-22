import { Link } from "gatsby"
import React, { Component, Fragment } from 'react';
import Dropdown from "./dropdown"


export default class MobileNavigation extends Component {
  state = {
    show: false,
  };
  onClick = () => {
    document.body.classList.toggle('mobile-nav-open');
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    return (
      <Fragment>
        <button className="mobile-menu-toggle-button" onClick={this.onClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* <div className="mobile-nav"> */}
        {this.state.show ? [
          <div className="mobile-menu">
            <ul className='mobile-menu-items'>
              <Link to='/work' className='nav-item'>Work</Link>
              <Link to='/about' className='nav-item'>About</Link>
              <Dropdown
                title="Shop"
                pages={[
                  <Link to="/prints">Prints</Link>,
                  <Link to="/paintings">Paintings</Link>,
                ]}//end of pages
              />
              <Link to='/contact' className='nav-item'>Contact</Link>
            </ul>
          </div>,
        ] : null}
        {/* </div> */}
      </Fragment>
    )
  }
}