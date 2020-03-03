import {noteData}  from './firebaseConnect'

var redux = require('redux')



const noteInitialState = {
    isEdit : false,
    editItem : {},
    title : '',
    alertShow : false
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

        case "CHANGE_TITLE_ADD":
            return {...state, title : "Thêm",editItem : {}}  
        
        case "CHANGE_TITLE_REPAIR":
            return {...state, title : "Sửa"}
        
        case "DELETE_TITLE":
            return {...state, title : "Xóa",alertShow : true}

        case "CHANGE_ALERT_STATUS":
            return {...state, alertShow : ! state.alertShow}
        
        case "SET_ALERT_FALSE":
            return {...state, alertShow : false}
        default:
            return state
    }
}

var store = redux.createStore(allReducer)

store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})

export default store;