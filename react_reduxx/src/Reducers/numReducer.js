const numInitialState =  ["man hinh","chuot","banphim"];
const numReducer = (state = numInitialState, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return [...state, action.newItem];

    case "DELETE":
      return [state.filter((value,key) => key !== action.number)]; 
      
    default:
      return state
  }
}

export default numReducer;