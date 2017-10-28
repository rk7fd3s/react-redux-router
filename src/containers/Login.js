import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SITE_ROOT } from '../siteConfig'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>ログインページです</h1>
        <ul>
          <li><Link to={SITE_ROOT + 'login'}>Login</Link></li>
          <li><Link to={SITE_ROOT + 'signup'}>SignUp</Link></li>
          <li><Link to={SITE_ROOT + 'home'}>Home</Link></li>
          <li><Link to={SITE_ROOT + 'counter'}>Counter</Link></li>
        </ul>
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
)(Login);
