import React, { Component } from "react"
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SITE_ROOT } from '../siteConfig'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>HOMEページです</h1>
        <Link to={SITE_ROOT + 'login'}>Login</Link>
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
)(Home);
