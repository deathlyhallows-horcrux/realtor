import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import '../styles/Table.css';
import moment from 'moment';

const Table = (props) => {
  const {data} = props;
  const {features} = data;
  const history = useHistory();
  //get sorted data 
  const {sortedFeatures, setSort, sortedColumn} = useSortedData(features);
  
  const getClassNamesFor = (name) => {
    if (!sortedColumn) {
      return;
    }
    return sortedColumn.key === name ? sortedColumn.direction : undefined;
  };
  
  const toDetailView = (feature) => {
    history.push('/detail', {feature})
  }

  return (
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
          <tr key={index} onClick={() => toDetailView({feature})}>
            {/* <Link to={{pathname: '/detail', state: {feature: feature}}}> */}
            <td className="feature-title">{feature.properties.title}</td>
            <td className="feature-mag">{feature.properties.mag}</td>
            <td className="feature-time">{moment(feature.properties.time).format("lll") }</td>
            {/* </Link> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


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