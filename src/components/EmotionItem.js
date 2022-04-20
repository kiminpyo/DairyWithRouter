import React from 'react'

const EmotionItem = ({
  emotion_id, 
  emotion_img, 
  emotion_descript,
  isSelected, 
  /*함수는 전달받은 상태변화가 아니거나 usecallback으로 묶은게 아니면 기본적으로 
  다시 렌더링이 된다  */
  onClick}) => {
  return (
    <div
    onClick={() => onClick(emotion_id)} 
    className={["Emotion_item",
     isSelected ? `Emotion_item_on_${emotion_id}`:`Emotion_item_off` ].join(' ')}>
        <img src={emotion_img} alt="" />
        <span>{emotion_descript}</span>
    </div>
  )
}

export default React.memo(EmotionItem)