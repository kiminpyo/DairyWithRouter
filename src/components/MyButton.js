
const  MyButton = ({text, type, onClick}) =>{

  /* button type이 아무값이거나 default일때 따로 설정. */
  const btnType= ['positive','negative'].includes(type)? type:'default';
  return (
    <button onClick={onClick} 
    /* console창 class보고 확인 */
    className={["MyButton",`MyButton_${btnType}`].join(" ")}>{text}</button>
  )
}
 MyButton.defaultProps={
   type: 'default'
 }

export default MyButton