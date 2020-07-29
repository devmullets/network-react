import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react'
import mainLogo from '../images/msg-networks-logo.png'

const NavBarDesktop = () => {
  return (
    <>
      <Menu stackable inverted size='large'>
        <Container>
          <Menu.Item>
            <Image src={mainLogo} size='small' />
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
        </Container>
      </Menu>
    </>
  );
}

export default NavBarDesktop;
