// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {functiondecrease, value} = this.props
    const onclicked = () => {
      functiondecrease(value)
    }
    return (
      <li>
        <button onClick={onclicked} type="button" className="btn">
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
