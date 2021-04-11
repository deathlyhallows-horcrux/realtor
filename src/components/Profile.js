import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props){
    super(props);
   
  }


  render() {
    
    console.log("profile props are",this.props);
    return (
      
      <div>
        Profile loaded!
      </div>
    )
  }
}
