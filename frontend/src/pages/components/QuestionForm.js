import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // for everything
import axios from "axios";

const Schema = Yup.object().shape({
  // factora: Yup.number("Invalid Number")
  //   .typeError("Enter a valid number.")
  //   .required("Required"),
  // factorb: Yup.number("Invalid Number")
  //   .typeError("Enter a valid Number.")
  //   .required("Required"),
  answer: Yup.number("Invalid Number")
    .typeError("Enter a valid Number.")
    .required("Required"),
});

export default class QuestionForm extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">
              {this.props.factora} X {this.props.factorb}
            </h1>
          </div>
        </div>

        <Formik
          enableReinitialize={true}
          initialValues={{
            answer: "",
          }}
          validationSchema={Schema}
          onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
            setSubmitting(true)
            console.log(JSON.stringify(values));
            var data = {
              user: { alias: "lexican" },
              multiplication: {
                factorA: this.props.factora,
                factorB: this.props.factorb,
              },
              resultAttempt: values.answer,
            };

            console.log("data: " + data)
            axios
              .post("http://localhost:8081/results", data)
              .then((response) => {
                // Success 🎉
                console.log(response);
                this.props.getQuestion();
                this.props.getAttempts();
                this.props.getLeaders()
                setSubmitting(false)
              })
              .catch((error) => {
                setSubmitting(false)
                if (error.response) {
                  console.log(error.response);
                }
                console.log(error);
                console.log(error.config);
              });
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {errors.error && <p className="form-error">{errors.error}</p>}
              <div className="row">
                <div className="col-md-12">
                  <Field
                    name="answer"
                    className="form-control"
                    placeholder="Answer"
                  />
                  <ErrorMessage
                    name="answer"
                    component="div"
                    className="form-error"
                  />
                </div>
                <div className="col-md-12 mt-2">
                  <button className="btn btn-primary" disabled={isSubmitting}>
                    Check
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
