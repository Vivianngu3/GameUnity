import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Heading from './component/text/Heading'
import './App.css'
import Landing from './page/Landing/Landing'
import WithPeripherals from './page/WithPeripherals/WithPeripherals'

export default function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<WithPeripherals/>}>
          <Route index element={<Landing/>} />
          <Route path={'about'} element={<Heading type={'title'}>About us!</Heading>} />
        </Route>
        <Route path={'game'} element={<Heading type={'section'}>Game Page!</Heading>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
