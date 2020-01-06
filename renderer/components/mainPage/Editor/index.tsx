import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import LeftPanel from './LeftPanel'
import { DndProvider } from 'react-dnd'
import RightPanel from './RightPanel'
import $style from './index.less'

export default function Editor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={$style.Editor}>
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </div>
    </DndProvider>
  )
}
