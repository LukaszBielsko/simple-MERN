import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container} from 'reactstrap';


class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render(){

        return(
            <Navbar color='dark' dark expand='sm' className='mb-5'>
                <Container>
                    <NavbarBrand href='/'>ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            {/* {isAuthenticated ? authLinks : guestLinks} */}
                            <NavLink> some navlink</NavLink>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )

    }
}   

export default AppNavbar ;