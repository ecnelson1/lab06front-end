import React, { Component } from 'react'
import request from 'superagent'

export default class CastDetailsPage extends Component {
    state = {
        memberDetails: {},

    }
    componentDidMount= async() => {
            const castMembers = await request.get(`https://luciferlist.herokuapp.com/cast/${this.props.match.params.id}`);
            console.log(castMembers)
            this.setState({
                memberDetails: castMembers.body
              });
          }
    render() {
        return (
            <div>
                <h2>Here are {this.state.memberDetails.name}'s Stats!</h2>
               {
                <div className = 'poke-details' key = {this.state.memberDetails.id}> 
                    <p>Name: {this.state.memberDetails.name}</p>
                    <p>Type: {this.state.memberDetails.type}</p>
                    <p>Has Divinity: {this.state.memberDetails.is_divine}</p>
                    <p>Seasons: {this.state.memberDetails.seasons}</p>
                </div>
                }
            </div>
        )
    }
}