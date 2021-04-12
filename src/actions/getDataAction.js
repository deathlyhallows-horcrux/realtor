import axios from 'axios';

export const GETDATA = "GET_DATA_JSON";

const  getDataAction = () => dispatch =>{
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