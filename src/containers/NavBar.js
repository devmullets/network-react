import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import mainLogo from '../images/msg-networks-logo.png'


class NavBar extends Component {
  
  render() {

    return (
      <>
        <Menu stackable inverted size='massive'>
          <Menu.Item>
            <img src={mainLogo} />
          </Menu.Item>

          <Menu.Item
            name='features'
            // active={activeItem === 'features'}
            // onClick={this.handleItemClick}
          >
            Features
          </Menu.Item>

          <Menu.Item
            name='testimonials'
            // active={activeItem === 'testimonials'}
            // onClick={this.handleItemClick}
          >
            Testimonials
          </Menu.Item>

          <Menu.Item
            name='sign-in'
            // active={activeItem === 'sign-in'}
            // onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default NavBar;
