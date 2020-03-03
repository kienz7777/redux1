import {noteData}  from './firebaseConnect'

var redux = require('redux')



const noteInitialState = {
    isEdit : false,
    editItem : {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            //console.log("heeleleee " + action.getItem);
            return state

        case "CHANGE_EDIT_STATUS":
           
            return {...state, isEdit : ! state.isEdit}

        case "GET_EDIT_DATA":
           
            return {...state, editItem : action.editObject}
    
        case "EDIT":
            console.log("dữ liệu " + JSON.stringify(action.getItem));
            //Update dữ liệu lên firebase
            noteData.child(action.getItem.id).update({
                noteTitle : action.getItem.noteTitle,
                noteContent : action.getItem.noteContent
            })
            return {...state, editItem : {}}

        case "DELETE":
            noteData.child(action.deleteID).remove();
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer)

store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})

export default store;