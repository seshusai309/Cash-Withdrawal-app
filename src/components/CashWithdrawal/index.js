import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {value: 2000}

  decrease = num => {
    this.setState(prevState => {
      if (prevState.value - num < 0) {
        return {value: prevState.value}
      }
      return {value: prevState.value - num}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {value} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <div className="sub-part-1">
            <div className="S-letter">
              <h1>S</h1>
            </div>
            <h1 className="head-1">Sarah Williams</h1>
          </div>

          <div className="subpart-2">
            <p className="para-1">Your Balance</p>
            <div className="rupess-part">
              <p className="rupee-head">{value}</p>
              <p className="rupe-para">In Rupees</p>
            </div>
          </div>

          <p className="head-2">Withdraw</p>
          <p className="para-1">CHOOSE SUM (IN RUPEES)</p>

          <ul className="list-btns">
            {denominationsList.map(each => (
              <DenominationItem
                functiondecrease={this.decrease}
                key={each.id}
                id={each.id}
                value={each.value}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
