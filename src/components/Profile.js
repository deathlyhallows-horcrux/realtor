import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Profile.css';

 const Profile = (props) => {
  const location = useLocation();
  const {profile} = location.state;

  //console.log("profile props are", profile);
  return (
    
    <div className="profile-view" >
      <h5>Profile</h5>
      <div className="profile-content d-flex">
        <div className="profile-image">
          <img src= {profile.avatarImage} width="200" ></img>
        </div>
        <div className="d-lg-table">
          <table className="profile-details">
            <thead></thead>
            <tbody>
            <tr>
              <th scope="row"> First name</th>
              <td>{profile.firstName}</td>
            </tr>
            <tr>
              <th scope="row"> Last name</th>
              <td>{profile.lastName}</td>
            </tr>
            <tr>
              <th scope="row"> Phone </th>
              <td>{profile.phone}</td>
            </tr>
            <tr>
              <th scope="row"> Email </th>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <th scope="row"> Bio </th>
              <td>{profile.bio}</td>
            </tr>
            </tbody>
          </table>
        
        </div>
      </div>
    </div>
  )

}

export default Profile;