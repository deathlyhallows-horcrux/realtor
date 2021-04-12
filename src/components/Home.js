import React, { useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import Table from './Table';

const Home = () => {
 
  const data = useSelector(state => state.getData.data);

  console.log("home page" , data);

  return (  
    <div className="container-fluid">
  
    <div className="data-feature-table row justify-content-center">  
      {data  && data.features ? <Table data={data} ></Table> : null} 
      
    </div>
    {/* <div>
    {data&& data.features ? data.features.map((feature, index) => {
      console.log(JSON.stringify(feature.properties));
        return (
            <div key ={index}>{feature.properties.title} {"-"} {feature.properties.magType} {"-"} {feature.properties.}
            </div>
        )
      }) : null}
    </div> */}
  </div>
  );
  
}

export default Home;