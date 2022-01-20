import { Component } from "react";

class TransactionTable extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="transactionTable">
        <table>
          <th>Date</th>
          <th>Source</th>
          <th>Amount</th>
          {this.props.transactions.map((item) => {
            return (
              <tr>
                <td>{item.date}</td>
                <td>{item.source}</td>
                <td>{item.amount}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default TransactionTable;
