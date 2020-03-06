import React, { Component } from 'react'
import NoteItem from './NoteItem'

import {noteData}  from './firebaseConnect'

export default class NoteList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataFirebase : []
        }
        
    }
    
    
    UNSAFE_componentWillMount() {
        noteData.on('value', (notes) => {
            var arrayData = [];

            notes.forEach(element => {
                const id = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;

                arrayData.push({
                    id : id,
                    noteTitle : noteTitle,
                    noteContent : noteContent
                })
            })

            this.setState({
                dataFirebase : arrayData
            })

            // console.log(notes.val());
            // console.log(arrayData);
        })
    }
    

    getData = () => {
        if(this.state.dataFirebase)
        {
            return this.state.dataFirebase.map((value,key)=>{
                return(
                    <NoteItem
                    key = {key}
                    id = {key}
                    noteTitle = {value.noteTitle}
                    noteContent = {value.noteContent}

                    note = {value}
                    />
                )
            })
        }
    }

    render() {

        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    
                    {this.getData()}

                    
                </div>
            </div>

        )
    }
}
