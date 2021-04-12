
export const GETVIEWEDLINKS = "GET_LINKS_VIEWED";

const setViewedLinksAction = (viewedLink) => dispatch =>{
  return  dispatch({
    type: GETVIEWEDLINKS,
    payload: viewedLink
  });
 
}

export default setViewedLinksAction;