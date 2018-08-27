
//***************
// context.js
//***************

import React, {Component} from 'react';
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
            case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };      
            case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
            }
        default:
            return state;
    }
};

export class Provider extends Component {
    // To create STATE for a Component you can either use:
    // 1) Constructor: constructor method used if you just want to immediately initialize values in your components.
    // 2) Without Constructor
    state = {
        contacts: [

        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    }    
    // Lifecycle method
    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({contacts: res.data})
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

