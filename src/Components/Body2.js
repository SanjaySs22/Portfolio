import './Body2style.css';

import React, { Component } from 'react'

export default class Body2 extends Component {
  render() {
    return (
        <div className='body2' >
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>

        </div>
        
    </div>
    )
  }
}
