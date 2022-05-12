import React, {CSSProperties, Dispatch, SetStateAction} from 'react'
import './App.css'
import * as urls from './res/constants/url-endpoints'
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import Landing from './page/Landing/Landing'
import GameStart from './page/GameStart/GameStart'
import Nurturing from './page/Nurturing/Nurturing'
import Welcome from './page/Welcome/Welcome'
import Recap from './page/Recap/Recap'
import About from './page/About/About'
import TimeLapse from './page/TimeLapse/TimeLapse'
import NewSprout from './page/NewSprout/NewSprout'
import Kitchen from './page/Kitchen/Kitchen'
import TimmySelect from './page/TimmySelect/TimmySelect'
import PlotChoice from './page/PlotChoice/PlotChoice'
import Onboarding from './page/Onboarding/Onboarding'
import {WhichTimmy} from './component/static/Timmy/Timmy'

export interface Timmy {
  whichTimmy: WhichTimmy
  setContext: (timmy: Timmy) => void
}
const defaultTimmy: Timmy = {whichTimmy: 1, setContext: () => {}}
export const TimmyContext = React.createContext<Timmy>(defaultTimmy)

export default function App(props: {style: CSSProperties}) {
  const [timmyContext, setTimmyContext] = React.useState({
    whichTimmy: defaultTimmy.whichTimmy,
    setContext: (timmy: Timmy) => {setTimmyContext(timmy)}
  })

  return (
    <div style={props.style} className="App">
      <TimmyContext.Provider value={timmyContext}>
        <BrowserRouter>
          <Routes>
            <Route path={urls.LANDING} element={<Landing/>} />
            <Route path={urls.ABOUT_US} element={<About/>} />
            <Route path={urls.RECAP} element={<Recap/>} />
            <Route path={urls.GAME} element={<Outlet />} >
              <Route index element={<GameStart />} />
              <Route path={urls.TIMMY_SELECT} element={<TimmySelect />} />
              <Route path={urls.GAME_WELCOME} element={<Welcome />} />
              <Route path={urls.PLOT_CHOICE} element={<PlotChoice />} />
              <Route path={urls.ONBOARDING} element={<Onboarding />} />
              <Route path={urls.NURTURING} element={<Nurturing />} />
              <Route path={urls.TIME_LAPSE} element={<TimeLapse />} />
              <Route path={urls.NEW_SPROUT} element={<NewSprout />} />
              <Route path={urls.KITCHEN} element={<Kitchen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TimmyContext.Provider>
    </div>
  );
}
