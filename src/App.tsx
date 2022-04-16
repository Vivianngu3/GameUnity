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
import Recap from './page/Recap/Recap'
import About from './page/About/About'
import TimeLapse from './page/TimeLapse/TimeLapse'
import NewSprout from './page/NewSprout/NewSprout'


export default function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path={urls.WITH_PERIPHERALS} element={<WithPeripherals />}>
          <Route index element={<Landing/>} />
          <Route path={urls.ABOUT_US} element={<About/>} />
          <Route path={urls.RECAP} element={<Recap/>} />
        </Route>
        <Route path={urls.GAME} element={<Outlet />} >
          <Route index element={<GameStart />} />
          <Route path={urls.GAME_WELCOME} element={<Welcome />} />
          <Route path={urls.INTRODUCE_SEED} element={<Heading type={'section'}>Here's Your Seed!</Heading>} />
          <Route path={urls.CHOOSE_PLOT} element={<Heading type={'section'}>Choose Plot</Heading>} />
          {/*
          The onboarding and nurturing pages will have many different states to accommodate the
          steps that make up each of these user flows.
          */}
          <Route path={urls.ONBOARDING} element={<Heading type={'section'}>Onboarding</Heading>} />
          <Route path={urls.NURTURING} element={<Nurturing />} />
          <Route path={urls.TIME_LAPSE} element={<TimeLapse />} />
          <Route path={urls.NEW_SPROUT} element={<NewSprout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
