import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewCreatureFrom from './NewCreatureForm'

class Creatures extends Component {
    state = {
        creatures: [],
        showNewForm: false
    }
    componentWillMount() {
        this.getAllCreatures()
    
        
    }

    getAllCreatures = async () => {
        const res = await axios.get('/api/creatures')
        console.log(res.data)
        this.setState({creatures: res.data })
    }

    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    render() {
        return (
            <div>
                <h1>Welcome to The Bog</h1>
                {this.state.creatures.map(creature => (
                    <Link key={creature._id} to={`/${creature.id}`}>
                        <h3>Name: {creature.name}</h3>
                        <p>Description: {creature.description}</p>
                    </Link>
                ))}
                <button onClick={this.toggleShowNewForm}>Create New</button>


                {this.state.showNewForm ? <NewCreatureFrom getAllCreatures={this.getAllCreatures} /> : null}



            </div>
        )
    }
}

export default Creatures