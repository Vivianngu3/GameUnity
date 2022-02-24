import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import './theme/colors.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Heading from './component/text/Heading'
import Landing from './page/Landing/Landing'

/* <React.StrictMode>*/
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App/>}>
          <Route index element={<Heading type={'title'}>Root</Heading>}/>
          <Route path={'Landing'} element={<Landing/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
