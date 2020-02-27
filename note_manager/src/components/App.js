import React, { Component } from 'react'
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';


class App extends Component {

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
              <NoteForm ></NoteForm>
          </div>
        </div>

      </div>
    )
  }
}


export default App;
