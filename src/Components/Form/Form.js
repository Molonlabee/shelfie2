import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state ={
            
        }
    }


    render() {
        return (
            <div>
               <h1>Form</h1> 
               <input />
               <input />
               <input />
               <button>Cancel</button>
               <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;