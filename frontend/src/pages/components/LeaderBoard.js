import React, { Component } from "react";
const   Leader = (props) => (
  <tr>
    <td>{props.leader.userId}</td>
    <td>
      {props.leader.totalScore}
    </td>
  </tr>
);

export default class LeaderBoardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: [],
    };
  }

  // componentDidMount() {
  //     this.getAttempts();
  // }
  render() {
    const { leaders } = this.props;
    return (
      <div className="my-4">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map(function (leader, i) {
              //console.log("order", order)
              return <Leader key={i} leader={leader} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
