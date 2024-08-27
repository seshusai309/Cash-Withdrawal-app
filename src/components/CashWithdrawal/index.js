import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
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
              <h1 className="rupee-head">2000</h1>
              <p className="rupe-para">In Rupees</p>
            </div>
          </div>

          <h1 className="head-2">Withdraw</h1>
          <p className="para-1">CHOOSE SUM (IN RUPEES)</p>

          <div className="list-btns">
            {denominationsList.map(each => (
              <DenominationItem value={each.value} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
