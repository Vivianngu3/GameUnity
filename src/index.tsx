import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './theme/colors.css'
import './theme/fonts.css'
import './res/constants/z-indices.css'
import styles from './theme/animation-durations'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <App style={styles} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
