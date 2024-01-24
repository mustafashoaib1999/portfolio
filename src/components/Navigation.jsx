import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div>
          <div>
        <nav>
          <div className="logo">
            <img src="/images/brand_logo.png" alt="" srcset="" />
          </div>
        
        <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#"> Contact </li>
        </ul>
        <button> Login </button>
        
        
        </nav>

      </div>
      </div>
    )
  }
}
