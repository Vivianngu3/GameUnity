import React from 'react'
import {Outlet} from 'react-router-dom'
import Heading from './component/text/Heading'
import logo from './res/images/logo.svg'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Heading type='section'>Section</Heading>
      <Heading type='title'>Title</Heading>
      <Heading type='section' allCaps={true}>Section</Heading>
      <Heading type='title' allCaps={true}>Sprout</Heading>
      <Outlet/>
    </div>
  );
}
