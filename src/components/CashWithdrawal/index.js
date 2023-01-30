import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {money: 2000}

  changeState = value => {
    this.setState(prevState => ({money: prevState.money - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {money} = this.state
    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <div className="accountHolderName">
            <p className="nameLogo">S</p>
            <div className="nameContainer">
              <p className="holderName">Sarah Williams</p>
            </div>
          </div>
          <div className="balance">
            <p className="balanceText">Your Balance</p>
            <div className="balanceAmount">
              <p className="balanceNumbers">{money}</p>
              <p className="balanceNote">In Rupees</p>
            </div>
          </div>
          <div className="withdrawalSection">
            <p className="withdrawalSectionHeading">Withdraw</p>
            <p className="withdrawalSectionNote">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominationsList">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  value={eachDenomination.value}
                  key={eachDenomination.id}
                  changeState={this.changeState}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
