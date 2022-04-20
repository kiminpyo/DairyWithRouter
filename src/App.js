import React, {useReducer, useRef,useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes,} from'react-router-dom';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Home from './pages/Home';


const reducer=(state,action) => {
  let newState = [];
  switch(action.type){
    case 'INIT':{
      return  action.data;
    }
    case 'CREATE':{
      newState = [action.data, ...state];
  /*   위랑 똑같다.  const newItem ={
        ...action.data
      };
      newState = [newItem,...state] */
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
  export const DiaryStateContext = React.createContext();
  export const DiaryDispatchContext = React.createContext();

  
function App() {

  useEffect(()=>{

  /* 숫자-> 문자열로 처리된 것은 다시 parseInt로 담아준다.   
  const item1 = localStorage.getItem('item1');
    const item2 = localStorage.getItem('item2');
     객체로 저장된 것은 JSON.parse를 써서 다시 사용해준다,.
    const item3= JSON.parse(localStorage.getItem('item3'));
    console.log({item1,item2,item3}) */
  },[])
  console.log(new Date().getTime())
 /* 이미지 경로에 대한 설정 -*/
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
 
  const [data,dispatch] = useReducer(reducer,[])

  useEffect(()=>{
    const localData = localStorage.getItem('diary');
    if(localData){
      const diaryList = JSON.parse(localData).sort((a,b)=> parseInt(b.id) - parseFloat(a.id));
      dataId.current = parseInt(diaryList[0].id) + 1;

      console.log(diaryList)
      console.log(dataId)

      dispatch({type: 'INIT', data: diaryList})
    }
  }, [])

  const dataId = useRef(0);
  //create


  const onCreate =(date,content,emotion)=>{
    dispatch({type: 'CREATE' , 
      data:{
        id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion,
      }
  });
  dataId.current += 1;
  }
  //remove
  const onRemove = (targetId)=>{
    dispatch({
      type: 'REMOVE',
    id: targetId})
  }
  //edit

  const onEdit = (targetId, date, content, emotion)=>{
    console.log(targetId, date, content,emotion)
    dispatch({
      type:'EDIT',
       data:{
      id: targetId,
      date: new Date(date).getTime(),
      content,
      emotion
    }
  })
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
    <Route path='/edit/:id' element={<Edit/>} />
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
