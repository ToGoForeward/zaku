import useDrag from '../useDrag'
import Input from './components/Input'
import Button from './components/Button'
import DatePicker from './components/DatePicker'
import './index.less'

const ComponentsPanel: React.FC = function() {
  const [item, dragRef] = useDrag({ type: 'input', text: 'a' })
  const [item2, dragRef2] = useDrag({ type: 'button', text: 'a' })
  const [item3, dragRef3] = useDrag({ type: 'datePicker', text: 'a' })

  return (
    <div className='ComponentsPanel'>
      <div ref={dragRef}>
        <Input></Input>
      </div>
      <div ref={dragRef2}>
        <Button></Button>
      </div>
      <div ref={dragRef3}>
        <DatePicker></DatePicker>
      </div>
    </div>
  )
}

export default ComponentsPanel
