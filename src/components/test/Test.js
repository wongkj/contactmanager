
//#################
// Test.js
//#################

import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        title: '',
        body: ''
    };
    // Generally you will want to put all your Ajax calls in componentDidMount
    // as this is where you would extract data if you wanted to input it into the
    // component
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(data => this.setState({
            title: data.title,
            body: ''
        }));
    }
/*     componentWillMount() {
        console.log('componentWillMount...');
    } 
    componentDidUpdate() {
        console.log('componentDidUpdate');
    } 
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }         
    // This will run when your component receives new properties.
    // Usually used with Redux.
    componentWillReceiveProps(nextProps, nextState) {
        console.log('componentWillReceiveProps...')
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate...');
    } */
  render() {
      const { title, body } =this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}
