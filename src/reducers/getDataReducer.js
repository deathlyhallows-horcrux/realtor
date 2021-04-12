import {GETDATA} from  '../actions/getDataAction';

const initialState = {
  site: {},
  profile: {},
  data: {}
}

const getDataReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch(action.type){
    case GETDATA: 
      return {
        ...state,
        site: action.payload.site,
        profile: action.payload.profile,
        data: action.payload.data
      }
    default:
      return state;
  }
}

export default getDataReducer;