// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {minusFunction, value, id} = this.props
    const onclicked = uniqueId => {
      minusFunction(uniqueId)
      console.log('Hello')
    }
    return (
      <button onClick={onclicked(id)} type="button" className="btn">
        {value}
      </button>
    )
  }
}

export default DenominationItem
