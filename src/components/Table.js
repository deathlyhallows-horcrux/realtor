import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import '../styles/Table.css';
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import setViewedLinksAction from '../actions/setViewedLinksAction';

const Table = (props) => {
  const {data, viewed} = props;
  const {features} = data;
  const dispatch = useDispatch();

  //get sorted data 
  const {sortedFeatures, setSort, sortedColumn} = useSortedData(features);
  
  const getClassNamesFor = (name) => {
    if (!sortedColumn) {
      return;
    }
    return sortedColumn.key === name ? sortedColumn.direction : undefined;
  };

  return (
    <div>
    <table className="features-table">
      <caption>{data.metadata.title}</caption>
      <thead>
        <tr>
          <th><button  type="button" onClick={() => setSort('title')} className={getClassNamesFor('title')}> Title </button></th>
          <th><button type="button" onClick={() => setSort('mag')} className={getClassNamesFor('mag')}> Magnitude </button></th>        
          <th><button type="button" onClick={() => setSort('time')} className={getClassNamesFor('time')}> Time </button></th>
        </tr>
      </thead>
      <tbody>
        {sortedFeatures.map((feature,index) => (
          <tr key={index} >
            <td  className="feature-title"  >
              <NavLink to={{pathname: '/detail', state: {feature: feature}}}  onClick={() => dispatch(setViewedLinksAction(feature.id))} className={`feature-link ${viewed.find(id => id === feature.id) ? "visited": ""} `} >{feature.properties.title}</NavLink>
              </td>
            <td className="feature-mag">{feature.properties.mag}</td>
            <td className="feature-time">{moment(feature.properties.time).format("lll") }</td>
          </tr>
        ))}
      </tbody>
    </table>
     </div>
  );
};

//sort function 
const useSortedData = (features, selectedColumn = {key: '', direction: ''}) => {
  // sort table data based on the column selected and its current sort order
  const [sortedColumn, setSortedColumn] = useState(selectedColumn);

  const sortedFeatures = React.useMemo(() => {
    const sortedFeatures = [...features];
    if(sortedColumn !== null){
      sortedFeatures.sort((a, b) =>{
        if (a.properties[sortedColumn.key] < b.properties[sortedColumn.key]) {
          return sortedColumn.direction === 'ascending' ? -1 : 1;
        }
        if (a.properties[sortedColumn.key] > b.properties[sortedColumn.key]) {
          return sortedColumn.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedFeatures;
  }, [features, sortedColumn]);

  //set sort order on click 
  const setSort = key => {
    let sortDirection = 'ascending';
    if( sortedColumn.key === key && sortedColumn.direction === 'ascending'){
      sortDirection = 'descending';
    }
    
    setSortedColumn({key: key, direction: sortDirection});
  }
  return { sortedFeatures: sortedFeatures, setSort, sortedColumn}
};

export default Table;