import {GETDATA} from  '../actions/getDataAction';
import { GETVIEWEDLINKS } from '../actions/setViewedLinksAction';

const initialState = {
  site: {},
  profile: {},
  data: {},
  viewedLinks: []
}

const getDataReducer = (state = initialState, action) => {

  switch(action.type){
    case GETDATA: 
      return {
        ...state,
        site: action.payload.site,
        profile: action.payload.profile,
        data: action.payload.data
      }
      case GETVIEWEDLINKS: 
        return{
          ...state,
          viewedLinks: state.viewedLinks.concat(action.payload)
        }
    default:
      return state;
  }
}

export default getDataReducer;