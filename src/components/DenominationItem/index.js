// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, changeState} = props
  const stateChange = () => {
    changeState(value)
  }

  return (
    <li>
      <button type="button" className="denominationBtn" onClick={stateChange}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
