import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MyRawTheme from './myThemeFile'

import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
  }

  static get childContextTypes() {
    return { muiTheme: PropTypes.object.isRequired };
  }

  getChildContext(){
    return { muiTheme: getMuiTheme(MyRawTheme) };
  }

  render() {
    const {history} = this.props;

    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />
          { routes }
        </div>
      </ConnectedRouter>
    )
  }
}

App.propTypes = {
  history: PropTypes.object
}

// Appコンポーネントにstateを流し込む
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
)(App)
