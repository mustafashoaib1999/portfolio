import React, { Component } from 'react'
import "./App.css"; 
import Navigation from './components/Navigation';
import { Hero } from './components/Hero.Jsx';
export default class App extends Component {
  render() {
    return (
      <>
      <Navigation/>
      <Hero/>
      
      
      </>

    )
  }
}
