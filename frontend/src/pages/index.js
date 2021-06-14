import React, { Component } from "react";
import "./index.scss";
import Navbar from "./Navbar";
import QuestionForm from "./components/QuestionForm";
import AttemptTable from "./components/AttemptTable";
import LeadersBoard from "./components/LeaderBoard"
import axios from "axios";

var SERVER_URL = "http://localhost:8000/api";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: "lexican",
      factora: null,
      factorb: null,
      attempts: [],
      leaders: []
    };
  }

  componentDidMount() {
    this.getQuestion();
    this.getAttempts();
    this.getLeaders();
  }

  getAttempts = () => {
    axios
      .get( SERVER_URL + "/results?alias=" + this.state.alias)
      .then((response) => {
        // Success 🎉
        this.setState({
          attempts: response.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
        console.log(error.config);
      });
  };


  getLeaders = () => {
    axios
      .get(SERVER_URL + "/leaders")
      .then((response) => {
        // Success 🎉
        console.log("response", response.data)
        this.setState({
          leaders: response.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
        console.log(error.config);
      });
  };

  getQuestion = () => {
    axios
      .get(SERVER_URL + "/multiplications/random")
      .then((response) => {
        // Success 🎉
        console.log(response.data);
        const { factorA, factorB } = response.data;
        this.setState({
          factora: factorA,
          factorb: factorB,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
        console.log(error.config);
      });
  };

  render() {
    const { factora, factorb, attempts, leaders } = this.state;
    return (
      <div id="home">
        <Navbar />
        <div>
          <div className="container">
            <div className="row" id="inner-container">
              <div className="col-md-6">
                <h2 className="text-center">Your new challenge is</h2>
                <QuestionForm
                  factora={factora}
                  factorb={factorb}
                  getQuestion={this.getQuestion}
                  getAttempts={this.getAttempts}
                  getLeaders={this.getLeaders}
                />
              </div>
              <div className="col-md-6">
                <div>
                <div className="my-2">Leaders Board</div>
                  <LeadersBoard alias="lexican" leaders={leaders} />
                </div>
                <div>
                  <div className="my-2">Your latest attempts</div>
                  <AttemptTable alias="lexican" attempts={attempts} />
                </div>
              </div>
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
