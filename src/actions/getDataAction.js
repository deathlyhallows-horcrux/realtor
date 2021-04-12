import axios from 'axios';
import {useDispatch} from 'react-redux';

export const GETDATA = "GET_DATA_JSON";


const  getDataAction = () => dispatch =>{
  console.log("action is being called");
 // const dispatch = useDispatch()
  //getting data
  axios.get('data.json')
  .then(response => {
    if(response.data){
      dispatch({
        type: GETDATA,
        payload: response.data
      })
    }
  })
  .catch (error => console.log(error));
}

export default getDataAction;