//############
// Contact.js
//############

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import axios from "axios";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  }
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({type: 'DELETE_CONTACT', payload: id});      
    } catch (error) {
      dispatch({type: 'DELETE_CONTACT', payload: id});  
    }
  }

  render() {
    // Destructuring
    const { id, name, email, phone } = this.props.contact;     
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          // pulling out dispatch from value as it is used below in the onDeleteClick.bind()
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
            <h4>{name}{' '} 
            <i style={{ cursor: "pointer" }} onClick={this.onShowClick} className="fas fa-sort-down"></i>
            <i className="fas fa-times" style={{ cursor: "pointer", float: "right", color: "red"}} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
            <Link to={`contact/edit/${id}`}>
              <i className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
              ></i>
            </Link>
            </h4>
            {showContactInfo ? (        <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>) : null}
          </div>            
          )
        }}
      </Consumer>
    );
  }
}

Contact.proptypes = {
    contact: PropTypes.object.isRequired
};