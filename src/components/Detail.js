import React, { Component } from 'react'

export default class Detail extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    console.log("detail view is",this.props.location.state);
    return (
      <div>
        dDetail loaded!
      </div>
    )
  }
}
