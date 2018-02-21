import React, { Component } from 'react'
import axios from 'axios'


class EditCreatureForm extends Component {


   

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input onChange={this.props.handleChange} type="text" name="name" value={this.props.creature.name}/>
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input onChange={this.props.handleChange} type="text" name="description" value={this.props.creature.description}/>
            </div>
            <button>Submit</button>
            </form>
        )
    }
}

export default EditCreatureForm