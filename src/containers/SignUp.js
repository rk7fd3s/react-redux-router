import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>SignUpページです</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
