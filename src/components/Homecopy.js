import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './Home.css';
import {Link} from 'react-router-dom';

export default class Homecopy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: {},
      profile: {},
      data: {}
    };
  }

  componentWillMount(){
    //this._isMounted = true;
    this.getData();
  }

  componentWillUnmount(){
   // this._isMounted = false;
  }

  getData(){
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    }
    )
      .then( response => {
        return response.json();
      })
      .then(jsonData => {
        //console.log(jsonData);
        this.setState({site: jsonData.site, profile: jsonData.profile, data: jsonData.data});
      //  console.log(" the new state is ", this.state);
      });
  
  }

  render() {
    const {site, profile} = this.state;
    console.log("site is", site);

    return (
      <div className="container-fluid">
        <Navbar bg="light" expand="lg"> 
          <Navbar.Brand to="" className="brand"><img src={site.logoImage}></img></Navbar.Brand> 
          {/* "https://www.realtor.com/realtor-com.png" */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Item className="page-title">Earthquake Zen Garden</Nav.Item>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav fill className="mr-auto profile-link">
              <Nav.Item>
                <Link to={{pathname: '/profile', state: {profile: profile}}} >Welcome {profile.firstName}</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
