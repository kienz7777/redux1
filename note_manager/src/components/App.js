import React, { Component } from 'react'
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

import {noteData} from './firebaseConnect';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {

    }
  }
  
  add = (item) => {
    noteData.push(item);
  }

  render() {
    
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // })

    return (
      <div>
        <Nav/>

        <div className = "container">
          <div className = "row">
              <NoteList></NoteList>
              <NoteForm getData = {(item) => this.add(item)}></NoteForm>
          </div>
        </div>

      </div>
    )
  }
}


export default App;
