import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';
import '../styles/Navigation.css';
import {GETDATA} from '../actions/getDataAction';
import getDataAction from '../actions/getDataAction';

const Navigation = () => {
  
  const sourceData = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  // const [sourceData, setData] = useState({
  //   site: {},
  //   profile: {},
  //   data: {}}
  // );
  console.log("site data os", sourceData);
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
          // setData({site: myJson.site, profile: myJson.profile, data: myJson.data});
      dispatch({type: GETDATA, payload: myJson});

        // / return myJson;
       // }
      });
    
  }

  useEffect(() => {
    //let mounted = true;
    dispatch(getDataAction());
    
   // return () => mounted=false;
  }, [dispatch]);

  return (
    <div>
      <Navbar bg="light" expand="lg"> 
      {/* <Navbar.Brand as= {Link} to="/home" className="brand"><img src={sourceData.site.logoImage}></img></Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Item className="page-title">{sourceData.site.title}</Nav.Item>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto profile-link">
          <Nav.Item>
            <Link to={{pathname: '/profile', state: {profile: sourceData.profile}}} >Welcome {sourceData.profile.firstName}</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>  */}
      <Nav.Item className="brand">
        <Link to={{pathname: '/', state: {data: sourceData.data}}} >
          <img className="brand-image" src={sourceData.site.logoImage}></img>
        </Link></Nav.Item>
      <Nav.Item className="page-title">{sourceData.site.title}</Nav.Item>
      <Nav.Item className="profile-link"><Link to={{pathname: '/profile', state: {profile: sourceData.profile}}} >Welcome {sourceData.profile.firstName}</Link></Nav.Item>
    </Navbar>
    </div>
  )
}

export default Navigation;