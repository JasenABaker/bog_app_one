import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import EditCreatureForm from './EditCreatureForm'


class SingleCreature extends Component {
    state = {
        creature: {},
        creatureToUpdate: {},
        showEditForm: false,
        redirectToCreatues: false
    }

    componentWillMount() {
        this.getCreature()
    }

    getCreature = async ()=>{
        const res = await axios.get(`/api/creatures/${this.props.match.params.id}`)
        this.setState({creature: res.data})

    }

    toggleShowEditForm = () =>{
        this.setState({showEditForm: !this.state.showEditForm})
    }

    handleDelete = async () => {
        const res = axios.delete(`/api/creatures/${this.props.match.params.id}`)
        this.setState({redirectToCreatues: true})
    }
    handleChange = (event) => {
        const updateCreature = {...this.state.creature}
        const name = event.target.name
        const attr = event.target.value
        updateCreature[name] = updateCreature.attr
        this.setState({creatureToUpdate: updateCreature})
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        
        await axios.patch(`/api/creatures/${this.props.match.params.id}`, this.state.updateCreature)
        this.componentWillMount()
    }


    render() {
        const creature = this.state.creature
        {this.state.redirectToCreatues ? <Redirect to={"/creatures"}/> : null}
        return (
            <div>
                <h1>One Creature</h1>
                <h2>Name: {creature.name}</h2>
                <p>Description: {creature.description}</p>
                <button onClick={this.toggleShowEditForm}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            {this.state.showEditForm ? <EditCreatureForm creature={this.state.creature}creatureId={this.state.creature}
            handleChange={this.handleChange} handleSubmit={this.handleSubmit} />: null}
            </div>
        )
    }

}

export default SingleCreature