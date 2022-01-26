import { Component } from "react";

class SpendingRewards extends Component {
  constructor(props) {
    super();
  }
  rewardCalc = (transactions) => {
    let result = {
      grocery: 0,
      gas: 0,
      restaurants: 0,
      travel: 0,
      shopping: 0,
      total: 0,
    };
    transactions.forEach((item) => {
      switch (item.category) {
        case "grocery":
          result.grocery += Math.round(Math.abs(item.amount) * 2) / 100;
          result.total += Math.round(Math.abs(item.amount) * 2) / 100;
          break;
        case "restaurants":
          result.restaurants += Math.round(Math.abs(item.amount) * 3) / 100;
          result.total += Math.round(Math.abs(item.amount) * 3) / 100;
          break;
        case "gas":
        case "travel":
        case "shopping":
          result[item.category] += Math.round(Math.abs(item.amount) * 1) / 100;
          result.total += Math.round(Math.abs(item.amount) * 1) / 100;
          break;
        default:
      }
    });
    return (
      <div>
        <p>Restaurants(3%): {result.restaurants.toFixed(2)}</p>
        <p>Grocery(2%): {result.grocery.toFixed(2)}</p>
        <p>Shopping(1%): {result.shopping.toFixed(2)}</p>
        <p>Travel(1%): {result.travel.toFixed(2)}</p>
        <p>Gas(1%): {result.gas.toFixed(2)}</p>
        <p>
          <strong>Total Rewards: </strong>
          {result.total.toFixed(2)}
        </p>
      </div>
    );
  };
  render() {
    return (
      <div className="rewards">{this.rewardCalc(this.props.transactions)}</div>
    );
  }
}

export default SpendingRewards;
