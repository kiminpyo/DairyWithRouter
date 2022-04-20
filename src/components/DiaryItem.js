import React from 'react'
import MyButton from './MyButton';
import { useNavigate } from 'react-router-dom';
const DiaryItem =({id,emotion,content, date}) => {
    const navigate =useNavigate();
    const strDate = new Date(parseInt(date)).toLocaleDateString();
    const env = process.env;
    env.PUBLIC_URL = env.PUBLIC_URL || "";

    const goDetail = () =>{
        navigate(`/diary/${id}`)
    }
    const goEdit =() =>{
        navigate(`/edit/${id}`)
    }
  return (
    <div className="DiaryItem">
        <div 
            onClick={goDetail}
            className={[
                'emotion_img_wrapper',
                `emotion_img_wrapper_${emotion}`]
                .join(' ')}
        >
            <img src={
                process.env.PUBLIC_URL +
                `assets/emotion${emotion}.png`} 
                alt=""
             />
        </div>
        <div 
        className="info_wrapper"
        onClick={goDetail}>
            <div className="diary_date">{strDate}</div>
                <div className="diary_content_preview">
                    {content.length > 20 ? content.slice(0,25): content}
            </div>
        </div>
        <div className='btn_wrapper'>
            <MyButton
                onClick={goEdit} 
                text={'수정하기'}></MyButton>
        </div>
    </div>
  )
}

export default React.memo(DiaryItem)