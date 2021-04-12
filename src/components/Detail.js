import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Detail.css';
import moment from 'moment';

const Detail = () => {
  const location = useLocation();
  const {feature} = location.state

  console.log("detail is" , feature);
  return (
    <div className="container">
      <table className="detail-view-table">
        <colgroup>
        <col className="column-width" ></col></colgroup>
        <caption>{feature.properties.title}</caption>
        <thead></thead>
        <tbody>
          <tr>
            <th  scope="row">Title</th>
            <td>{feature.properties.title}</td>
          </tr>
          <tr>
            <th  scope="row">Magnitude</th>
            <td>{feature.properties.mag}</td>
          </tr>
          <tr>
            <th  scope="row">Time</th>
            <td>{moment(feature.properties.time).format("lll") }</td>
          </tr>
          <tr>
            <th  scope="row">Status</th>
            <td>{feature.properties.status}</td>
          </tr>
          <tr>
            <th  scope="row">Tsunami</th>
            <td>{feature.properties.tsunami}</td>
          </tr>
          <tr>
            <th  scope="row">Type</th>
            <td>{feature.properties.type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;