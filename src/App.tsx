import React from 'react'
import './App.css'
import {WITH_PERIPHERALS, ABOUT_US, GAME, RECAP} from './res/constants/url-endpoints'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Heading from './component/text/Heading'
import Landing from './page/Landing/Landing'
import WithPeripherals from './page/WithPeripherals/WithPeripherals'

export default function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path={WITH_PERIPHERALS} element={<WithPeripherals/>}>
          <Route index element={<Landing/>} />
          <Route path={ABOUT_US} element={<Heading type={'section'}>About us!</Heading>} />
          <Route path={RECAP} element={<Heading type={'section'}>Recap!</Heading>} />
        </Route>
        <Route path={GAME} element={<Heading type={'section'}>Game Page!</Heading>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
