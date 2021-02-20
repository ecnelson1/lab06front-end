import React, { Component } from 'react';
import request from 'superagent';
import CastList from './castlist.js';

export default class SearchPage extends Component {
    state = {
        castMembers: [],
        }
      componentDidMount = async () => {
          await this.hireCast();
        }
      
      hireCast = async () => {
          const castMembers = await request.get(`https://serene-bayou-70686.herokuapp.com/characters`);
          this.setState({
              castMembers: castMembers.body,
            });
        }
                render() {
                return (
            <div className = "page-display">
                <h1>Cast Page </h1>
                 <div className = "poke-list">
                <CastList castMembers = {this.state.castMembers}/>
                </div>
                </div>
                );
            }
        }