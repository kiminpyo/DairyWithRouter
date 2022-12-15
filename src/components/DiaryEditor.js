import React, {useState, useRef, useContext, useEffect, useCallback} from 'react'

import { useNavigate } from 'react-router-dom'
import MyHeader from './MyHeader'
import MyButton from './MyButton'
import EmotionItem from './EmotionItem'
import {DiaryDispatchContext} from './../App'

import { getStringDate } from '../util/date'
import { emotionList } from '../util/emotion'



const DiaryEditor=({isEdit, originData}) => {
  /* 2022-04-19 */
  console.log(getStringDate(new Date()))
  const contentRef = useRef();
  const navigate = useNavigate();
  console.log({isEdit,originData})
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const [content, setContent] =useState('');
  
  const {onCreate, onEdit, onRemove} =useContext(DiaryDispatchContext)
  
  
  const handleClickEmote = useCallback((emotion) =>{
    setEmotion(emotion)
  },[])


  const handleSubmit = () =>{
    if(content.length <1){
      contentRef.current.focus();
      return;
    }

    if(window.confirm(
      isEdit 
      ? "일기를 수정하시겠습니까?" 
      : "새로운 일기를 작성하시겠습니까?")){
      if(!isEdit){
       
        onCreate(date, content, emotion);
      }else{
        
        onEdit(originData.id, date, content, emotion)
      }
    }
    
    /* replace? */
     navigate('/',{replace: true}); 

  }
  const handleRemove = () =>{
    if(window.confirm('정말 삭제하시겠습니까?')){
        onRemove(originData.id)
        navigate('/',{replace: true})
    }else{
    
    }
  }



  useEffect(() => {
    if(isEdit){
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion)
      setContent(originData.content)
    }
  },[isEdit, originData])
  return (
    <div className="DiaryEditor">
      <MyHeader 
       headText={isEdit ? "일기 수정하기": "새 일기쓰기"}
      leftChild={
      <MyButton 
        text={'뒤로가기'}
        onClick={() =>{ navigate(-1)}}/>
    }
    rightChild={
      isEdit && 
        <MyButton text={"삭제하기"} 
        type={'negative'} 
        onClick={handleRemove}/>
    }
      />
      <div>

        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className='input_box'>
             <input 
            className='input_date'
             type="date"
             value={date}
             onChange={(e)=> setDate(e.target.value)}/>
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) =>
             <EmotionItem
              key={it.emotion_id} {...it} 
             onClick={handleClickEmote}
      
             isSelected={it.emotion_id === emotion}/>)}           
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
            placeholder="오늘은 어땟나요?"
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton 
            text={"취소하기"}
            onClick={() =>navigate(-1)}/>
            <MyButton
            text={"작성완료"}
            type={"positive"}
            onClick={handleSubmit}/>
          </div>
        </section>
      </div>
     
    </div>
  )
}

export default DiaryEditor