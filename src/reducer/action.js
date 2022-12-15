
 export const reducer=(state,action) => {
    let newState = [];
    switch(action.type){
      case 'INIT':{
        return  action.data;
      }
      case 'CREATE':{
        newState = [action.data, ...state];

        break;
      }
      case 'EDIT':{
        newState = state.map((it)=> 
          parseInt(it.id) === parseInt(action.data.id) ? {...action.data}: it
          );
        break;
      }
      case 'REMOVE':{
        newState = state.filter((it) => it.id !== action.id);
       break;
      }
     
      default:
        return newState;
    }
  
    localStorage.setItem('diary',JSON.stringify(newState))
    return newState;
  }

