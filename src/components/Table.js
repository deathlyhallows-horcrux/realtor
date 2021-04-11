import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import './Table.css';

const Table = (props) => {
  const {data} = props;
  const {features, requestSort, sortColumn} = useSortableData(props.data.features);

  const getClassNamesFor = (name) => {
    if (!sortColumn) {
      return;
    }
    return sortColumn.key === name ? sortColumn.direction : undefined;
  };
 

    //console.log("field to be sorted", sortColumn);
  return (
    <table id="features-table">
      <caption>{data.metadata.title}</caption>
      <thead>
        <tr>
          <th><button className="column-button" type="button" onClick={() => requestSort('title')} className={getClassNamesFor('title')}> Title </button></th>
          <th><button className="column-button" type="button" onClick={() => requestSort('mag')} className={getClassNamesFor('mag')}> Magnitude </button></th>
          <th><button className="column-button" type="button" onClick={() => requestSort('time')} className={getClassNamesFor('time')}> Time </button></th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature,index) => (
          <tr key={index}>
            <td>{feature.properties.title}</td>
            <td>{feature.properties.mag}</td>
            <td>{feature.properties.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const useSortableData = (features, column = null) => {
  const [sortColumn, setSortColumn] = useState(column);

  //sorting the table 
  const sortedFeatures = React.useMemo(() => {
    let sortedFeatures = [...features];
    if(sortColumn !== null){
      sortedFeatures.sort((a,b) => {
        if (a[sortColumn.key] < b[sortColumn.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortColumn.key] > b[sortColumn.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;;
        }
        return 0;
      }); 
    }
    return sortedFeatures;
  }, [features, sortColumn]);
   
    const requestSort = key => {
      let direction = 'ascending';
      if (sortColumn.key === key && sortColumn.direction === 'ascending') {
        direction = 'descending';
      }
      setSortColumn({ key, direction });
    }
    return { features: sortedFeatures, requestSort };
  };

export default Table;