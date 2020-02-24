import React, { Component } from 'react'
import './App.css';
import News from './News';

import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className = "App">
        {this.props.dulieu}
        <News></News>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num                   //this.props.dulieu
  }
}

export default connect(mapStateToProps)(App);

//export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)