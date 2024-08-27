// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {value} = this.props
    return (
      <button type="button" className="btn">
        {value}
      </button>
    )
  }
}

export default DenominationItem
