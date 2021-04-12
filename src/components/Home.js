import React from 'react';
import {useSelector} from 'react-redux';

import Table from './Table';

const Home = () => {
 
  const data = useSelector(state => state.getData.data);
  const viewedLinks = useSelector(state => state.getData.viewedLinks);

  return (  
    <div className="container-fluid">
    <div className="data-feature-table row justify-content-center">  
      {data  && data.features ? <Table data={data} viewed={viewedLinks}></Table> : null} 
      
    </div>
  </div>
  );
  
}

export default Home;