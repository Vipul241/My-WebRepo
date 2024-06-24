// App.js

import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Simple App</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Container className="mt-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
