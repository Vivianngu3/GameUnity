import React from 'react';

import scissors from '../../../res/images/scissors.svg'

interface Tool {
  name: string
  onClick: () => {}
  icon: any
}

export default function ToolBox() {
  let tools = [
    {name: 'scissors', onClick: () => {}, icon: scissors}
  ]

  tools.map(tool => {
    return (
      <div>

      </div>
    )})

  return (
    <></>
  )
}
