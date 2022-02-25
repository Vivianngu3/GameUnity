import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import './theme/colors.css'
import './theme/fonts.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Heading from './component/text/Heading'
import Landing from './page/Landing/Landing'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
