import React, { useContext, useReducer, useRef } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes,} from'react-router-dom';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Home from './pages/Home';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

const reducer=(action,state) => {
  let newState = [];
  switch(action.type){
    
    case 'INIT':{
      return  action.data
    }
    case 'CREATE':{
      newState = [action.data, ...state];
  /*   위랑 똑같다.  const newItem ={
        ...action.data
      };
      newState = [newItem,...state] */
      break;
    };
    case 'REMOVE':{
      newState = state.filter((it) => it.id !== action.id)
     break;
    }
    case 'EDIT':{
      newState = state.map((it)=>
      it.id === action.data.id ? {...action.data}: it)
      break;
    }
    default:
      return state;
  }

}
  export const DiaryStateContext = React.createContext();
  export const DiaryDispatchContext = React.createContext();
function App() {
 /* 이미지 경로에 대한 설정 -*/
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  const dataId = useRef(0);
  const [data,dispatch] = useReducer(reducer,[])
  //create


  const onCreate =(date,content,emotion)=>{
    dispatch({type: 'CREATE' , 
      data:{
        id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion,
    },
  });
  dataId.current += 1;
  }
  //remove
  const onRemove = (targetId)=>{
    dispatch({
      type: 'REMOVE',
    targetId})
  }
  //edit

  const onEdit = (targetId,date,content, emotion)=>{
    dispatch({type:'EDIT', data:{
      targetId,
      date: new Date(date).getTime(),
      content,
      emotion
    }})
  }
  return ( 
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
      /* 객체니까 기본 jsx문법 +객체 =>{{}} */
      value={{
        onCreate,
        onEdit,
        onRemove
      }}>
    <BrowserRouter>
    <div className="App"> 
   
  {/* <img src={process.env.PUBLIC_URL+ `/assets/emotion1.png`} alt="" />
  */}
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/new' element={<New/>} />
    <Route path='/edit' element={<Edit/>} />
    <Route path='/diary/:id' element={<Diary/>} />
    {/* id가 존재하지 않을경우 */}
   {/*  <Route path='/diary' element={<Diary/>} /> */}
    </Routes>

    {/* a태그는 spa가 아닌 mpa의 특징이다(외부 페이지로만 빠질때 사용 할 수 있음
      ) (로딩창이 보임) link로 이동 */}
    </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
