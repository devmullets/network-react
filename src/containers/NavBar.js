import React, { Component } from 'react';
import { Menu, Image, Container, Grid, Input, Button, Icon, Divider, Responsive } from 'semantic-ui-react'
import NavBarMobile from '../components/NavBarMobile';
import NavBarDesktop from '../components/NavBarDesktop';



class NavBar extends Component {
  state = {
    menuDisplay: 'none',
  }
  
  handleToggleDropdownMenu = () => {
    if (this.state.menuDisplay === "none") {
      this.setState({menuDisplay: 'flex'})
    } else {
      this.setState({menuDisplay: 'none'})
    }
  }

  render() {

    return (
      <>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            // leftItems={leftItems}
            // onPusherClick={this.handlePusher}
            // onToggle={this.handleToggle}
            // rightItems={rightItems}
            // visible={visible}
          />
          {/* <NavBarChildren>{children}</NavBarChildren> */}
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop 
            // leftItems={leftItems}
            // rightItems={rightItems} 
          />
          {/* <NavBarChildren>{children}</NavBarChildren> */}
        </Responsive>


        {/* <Menu stackable inverted size='large'>
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
        </Menu> */}
      </>
    );
  }
}

export default NavBar;
