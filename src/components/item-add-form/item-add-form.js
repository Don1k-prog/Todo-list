import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }
    render() {
        const { onItemAdded } = this.props;
        return(
            <form className="item-add-form d-flex mt-3"
                  onSubmit={ this.onSubmit }>
                <input type="text" className="form-control" 
                        placeholder="What needs to be done" 
                        onChange={ this.onLabelChange } 
                        value={ this.state.label } />
                <button type="button" className="btn btn-outline-secondary btn-sm" 
                onClick={ () => onItemAdded('Hello World') }>
                    Add Item
                </button>
            </form>
        )
    }
} 