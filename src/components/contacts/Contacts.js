
//################
// Contacts.js
//################

import React, { Component } from 'react';
import Contact from './Contact'

// Import the Consumer
import {Consumer} from '../../context';

export default class Contacts extends Component {
    render() {
    return (
        <Consumer>
            {value => {
                const {contacts} = value;
                return (
                <div>
                <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
                {contacts.map(contact => 
                    /* <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} /> */
                        <Contact key={contact.id} contact={contact}></Contact>
                )}
                </div>
                )
            }}
        </Consumer>
    )
  }
}
