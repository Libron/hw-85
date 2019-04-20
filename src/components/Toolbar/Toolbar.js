import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const Toolbar = () => {
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={RouterNavLink} to="/">My Music</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/" exact >Artists</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    );
};

export default Toolbar;