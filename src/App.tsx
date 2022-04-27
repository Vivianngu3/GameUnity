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
import Kitchen from './page/Kitchen/Kitchen'
import TimmySelect from "./page/TimmySelect/TimmySelect"
import PlotChoice from './page/PlotChoice/PlotChoice'
import Onboarding from './page/Onboarding/Onboarding'


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
          <Route path={urls.TIMMY_SELECT} element={<TimmySelect />} />
          <Route path={urls.GAME_WELCOME} element={<Welcome />} />
          <Route path={urls.PLOT_CHOICE} element={<PlotChoice />} />
          {/*
          The onboarding and nurturing pages will have many different states to accommodate the
          steps that make up each of these user flows.
          */}
          <Route path={urls.ONBOARDING} element={<Onboarding />} />
          <Route path={urls.NURTURING} element={<Nurturing />} />
          <Route path={urls.TIME_LAPSE} element={<TimeLapse />} />
          <Route path={urls.NEW_SPROUT} element={<NewSprout />} />
          <Route path={urls.KITCHEN} element={<Kitchen />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
