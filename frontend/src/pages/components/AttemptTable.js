import React, { Component } from "react";
import axios from "axios";
const Attempt = (props) => (
  <tr>
    <td>{props.attempt.id}</td>
    <td>
      {props.attempt.multiplication.factorA} *{" "}
      {props.attempt.multiplication.factorB}
    </td>
    <td>{props.attempt.resultAttempt}</td>
    <td>{props.attempt.correct ? "Yes" : "No"}</td>
  </tr>
);

export default class AttemptTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attempts: [],
    };
  }

  // componentDidMount() {
  //     this.getAttempts();
  // }
  render() {
    const { attempts } = this.props;
    return (
      <div className="mt-4">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Multiplication</th>
              <th scope="col">You entered</th>
              <th scope="col">Correct ?</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map(function (attempt, i) {
              //console.log("order", order)
              return <Attempt key={i} attempt={attempt} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
