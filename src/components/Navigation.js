import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Navigation.css';
import getDataAction from '../actions/getDataAction';

const Navigation = () => {
  
  const sourceData = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);

  return (
    <div>
      <Navbar bg="light" expand="lg"> 
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