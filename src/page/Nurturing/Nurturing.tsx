import React from 'react'
import Plot from '../../component/container/Plot/Plot'
import Tool from '../../component/modal/Tool/Tool'
import Definition from '../../component/modal/Definition/Definition'
import Timmy from '../../component/static/Timmy/Timmy'

export default function Nurturing() {
  // has a mediator
  return (
    <>
      <Plot />
      <Timmy>Hey I'm Timmy</Timmy>
      <Definition hide={() => {}} definition={'definition'} />
      {/*<Tool*/}

      {/*/>*/}
    </>
    // <ToolBox />
  )
}