import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>ぺーじがみつかりません</h1>
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
)(NotFound);
