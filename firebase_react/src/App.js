import React, { Component } from 'react'
import './App.css';

import * as firebase from 'firebase';
import {firebaseConnect} from './firebaseConnect.js';



class App extends Component {

  pushData = () => {
    var connectData = firebase.database().ref('dataForNote/');
    connectData.push({
      title : "hello"
    })
  }

  render() {
    console.log(firebaseConnect);
    return (
      <div className = "App">
        <button onClick = {()=>this.pushData()}>Click để thêm mới bằng hàm push firebase</button>
      </div>
    )
  }
}


export default App;
