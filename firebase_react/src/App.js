import React, { Component } from 'react'
import './App.css';

import * as firebase from 'firebase';
import {firebaseConnect} from './firebaseConnect.js';



class App extends Component {

  pushData = () => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      title : "hello"
    })
  }

  deleteData = (id) => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.child(id).remove()
  }

  render() {
    console.log(firebaseConnect);
    return (
      <div className = "App">
        <button onClick = {()=>this.pushData()}>Click để thêm mới bằng hàm push firebase</button>
        <hr/>

        <button onClick = {()=>this.deleteData('-M0rqEfGNqye0axStRXW')}>Click để xóa bằng hàm remove firebase</button>
      </div>
    )
  }
}


export default App;
