import React, { Component } from 'react'
import CharacterItem from './chacterItem.js';

export default class CastList extends Component {
    render() {
        return this.props.castMembers.map(member => <CharacterItem member={member}  key = {member.id}/>)
    }
}