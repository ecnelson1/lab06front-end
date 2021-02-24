import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CharacterItem extends Component {
    
    render() {
        return ( <Link to = {`${this.props.member.id}`} key = {this.props.member.id}>
        <section className = "character-info">
        <p>Name: {this.props.member.name}</p>
        </section>
    </Link>
 )}
}