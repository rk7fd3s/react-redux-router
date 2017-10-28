import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { SITE_ROOT } from '../siteConfig'

import { AppBar,IconButton } from 'material-ui'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { push } from 'connected-react-router'

// right-top menu setting
const menus = [
  {
    title: 'Home',
    location: 'home'
  }, {
    title: 'Login',
    location: 'login'
  }, {
    title: 'SignUp',
    location: 'signup'
  }, {
    title: 'Counter',
    location: 'counter'
  }
]

// Menus
class Menus extends Component {
  constructor(props) {
    super(props)
  }

  // menu push event.
  // but. not work if the transition destination is the current location
  pushLocation(e, destination) {
    if (this.props.router.location.pathname !== SITE_ROOT + destination) {
      this.props.push(SITE_ROOT + destination)
    }
  }

  render() {
    const { push, router } = this.props

    // make MenuItem from menu setting
    const menuItems = menus.map((menu, index) =>
      <MenuItem
        key={index}
        style={{lineHeight: '2.4em', minHeight: '2.4em', fontSize: '1em'}}
        primaryText={menu.title}
        onClick={(e)=>{this.pushLocation(e, menu.location);}}
      />
    )

    return (
    <IconMenu
      iconButtonElement={<IconButton><MenuIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      iconStyle={{color:'white'}}
    >
      { menuItems }
    </IconMenu>
  )}
};

Menus.propTypes = {
  push: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
}

// Header
class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { push, router } = this.props

    return (
      <header className="header">
        <AppBar
          title="title"
          iconElementRight={<Menus push={push} router={router}/>}
          showMenuIconButton={false}
        />
      </header>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
