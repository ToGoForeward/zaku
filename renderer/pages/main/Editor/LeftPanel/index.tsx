import { useDrop, DropTargetMonitor } from 'react-dnd'
import { useState } from 'react'
import { Button, Input, DatePicker } from 'antd'
import './index.less'

function withHover(component) {
  return <div style={{ width: '100px' }}>{component}</div>
}

export default function RightPanel() {
  const [components, setComponents] = useState([])
  const [collectedProps, drop] = useDrop({
    accept: ['input', 'button', 'datePicker'],
    drop: (item, monitor) => {
      console.log(item, monitor)

      let component = null

      if (item.type === 'button') {
        component = <Button>按钮</Button>
      } else if (item.type === 'datePicker') {
        component = <DatePicker />
      } else if (item.type === 'input') {
        component = withHover(<Input />)
      }

      if (!component) return

      setComponents([...components, component])
    },
    collect: (minoter: DropTargetMonitor) => {
      const isOver = minoter.isOver()

      return {
        isOver
      }
    }
  })

  return (
    <div className='LeftPanel' ref={drop}>
      {components}
    </div>
  )
}
