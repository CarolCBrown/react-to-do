 import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
     	const ToDo = ({ description, id, isCompleted, toggleComplete, onDelete }) =>
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <button onClick={() => onDelete (id)}> Remove </button>
         <span>{ this.props.description }</span>
       </li>
            );
   }
 }
 
 export default ToDo; 