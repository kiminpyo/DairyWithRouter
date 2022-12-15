import React, {useReducer, useRef,useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes,} from'react-router-dom';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Home from './pages/Home';
import { reducer } from './reducer/action';


  export const DiaryStateContext = React.createContext();
  export const DiaryDispatchContext = React.createContext();

  
  
function App() {

 const [data,dispatch] = useReducer(reducer,[])
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
 


  useEffect(()=>{
    const localData = localStorage.getItem('diary');
    if(!localData) {
      const diaryList = '' && JSON.parse(localData).sort((a,b)=> parseFloat(b.id) - parseFloat(a.id));
      return dispatch({type: 'INIT', data: diaryList})
    }else{
        const diaryList = JSON.parse(localData).sort((a,b)=> parseFloat(b.id) - parseFloat(a.id));
      if(diaryList.length === 0){
        dataId.current = 1
      }else{
        dataId.current = parseInt(diaryList[0].id) + 1;
      }
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
    
    content,
    emotion
  }
})
}
  return ( 
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
      value={{
        onCreate,
        onEdit,
        onRemove
      }}>
    <BrowserRouter>
    <div className="App"> 
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/new' element={<New/>} />
    <Route path='/edit/:id' element={<Edit/>} />
    <Route path='/diary/:id' element={<Diary/>} />
    </Routes>
    </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
