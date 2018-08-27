import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    // const {name} = this.props;
    return (
      <div>
        <h1>{this.props.name}</h1>
        {/* <h1>{name}</h1> */}
      </div>
    )
  }
}
