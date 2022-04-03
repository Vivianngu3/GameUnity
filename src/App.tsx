import React from 'react'
import './App.css'
import * as urls from './res/constants/url-endpoints'
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom'
import Heading from './component/text/Heading'
import Landing from './page/Landing/Landing'
import WithPeripherals from './page/WithPeripherals/WithPeripherals'
import GameStart from './page/GameStart/GameStart'
import Nurturing from './page/Nurturing/Nurturing'
import Welcome from './page/Welcome/Welcome'

export default function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path={urls.WITH_PERIPHERALS} element={<WithPeripherals />}>
          <Route index element={<Landing/>} />
          <Route path={urls.ABOUT_US} element={<Heading type={'section'}>About us!</Heading>} />
          <Route path={urls.RECAP} element={<Heading type={'section'}>Recap!</Heading>} />
        </Route>
        <Route path={urls.GAME} element={<Outlet />} >
          <Route index element={<GameStart />} />
          <Route path={urls.GAME_WELCOME} element={<Welcome />} />
          {/* Choosing a seed may be out of scope */}
          {/*<Route path={urls.CHOOSE_SEED} element={<Heading type={'section'}>Choose Seed</Heading>} />*/}
          <Route path={urls.CHOOSE_PLOT} element={<Heading type={'section'}>Choose Plot</Heading>} />
          {/*
          The onboarding and nurturing pages will have many different states to accommodate the
          steps that make up each of these user flows.
          */}
          <Route path={urls.ONBOARDING} element={<Heading type={'section'}>Onboarding</Heading>} />
          <Route path={urls.NURTURING} element={<Nurturing />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
