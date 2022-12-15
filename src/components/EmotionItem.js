import React from 'react'

const EmotionItem = ({
  emotion_id, 
  emotion_img, 
  emotion_descript,
  isSelected, 


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