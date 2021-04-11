import React, { useState, useEffect} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './Home.css';
import {Link} from 'react-router-dom';
import Table from './Table';

const Home = () => {
 
  const [sourceData, setData] = useState({
    site: {},
    profile: {},
    data: {}}
  );
  // const [data , setData] = useState(() => {
  //   const initialState = getData();
  //   return initialState;
  // });
  
  const getData = () => {
    
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
      .then(myJson => {
        //if(mounted){
          setData({site: myJson.site, profile: myJson.profile, data: myJson.data});
          
       // }
      });
    
  }

  useEffect(() => {
    let mounted = true;
    getData();
   // return () => mounted=false;
  }, []);

  //const {site, profile} =this.state;

  return (  
    <div className="container-fluid">
      {console.log(sourceData.data)}
   
    <Navbar bg="light" expand="lg"> 
      <Navbar.Brand to="" className="brand"><img src={sourceData.site.logoImage}></img></Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Item className="page-title">{sourceData.site.title}</Nav.Item>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill className="mr-auto profile-link">
          <Nav.Item>
            <Link to={{pathname: '/profile', state: {profile: sourceData.profile}}} >Welcome {sourceData.profile.firstName}</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="data-feature-table row justify-content-center">  
      {sourceData && sourceData.data && sourceData.data.features ? <Table data={sourceData.data} ></Table> : null}
      {/* {sourceData && sourceData.data && sourceData.data.features ? sourceData.data.features.map((feature, index) => {
        return (
          <Link to={{pathname: '/detail', state: {feature: feature}}}>
            {feature.properties.title} 
            </Link>
        )
      }) : null} */}
    </div>
  </div>
  );
  
}

export default Home;