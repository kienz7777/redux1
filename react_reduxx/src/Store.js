//import { combineReducers } from 'redux';
import numReducer from './Reducers/numReducer.js';
import editStatusReducer from './Reducers/editStatusReducer.js';

var redux = require('redux');

// var oldState = {
//   num : ["man hinh","chuot","banphim"],
//   editStatus : true
// }


// var reducer1 = (state = oldState, action) =>{
//   switch (action.type) {
//     case "CHANGE_EDIT_STATUS":
//       return {...state,editStatus : !state.editStatus};
      
//     case "ADD_NEW":
//       return {...state,num : [...state.num, action.newItem]};

//     case "DELETE":
//       return {...state,num : state.num.filter((value,key) => key !== action.number)};  

//     default:
//       return state;
//   }
  
// }



const allReducers = redux.combineReducers({
  num : numReducer,
  editStatus : editStatusReducer
})

var store1 = redux.createStore(allReducers);



//console.log(store1.getState());
store1.subscribe(() => {
 console.log(JSON.stringify(store1.getState()));
})

// store1.dispatch({type : "CHANGE_EDIT_STATUS"})
// console.log(store1.getState());

//store1.dispatch({type : "ADD_NEW", newItem : "Tai nghe"})
//console.log(store1.getState());

//store1.dispatch({type : "DELETE", number : 0})
//console.log(store1.getState());

export default store1;