import React, {useState, useContext, useEffect} from 'react'
import { DiaryStateContext } from '../App';
import MyHeader from './../components/MyHeader'
import MyButton from '../components/MyButton';
import DiaryList from '../components/DiaryList';
const Home =() => {
  
  const diaryList = useContext(DiaryStateContext)

  const [data, setData ]= useState([]);
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate)
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월 `

  useEffect(() => {
  
    if(diaryList.length >= 1){
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() +1,
        0,
        23,
        59,
        59
        ).getTime();

      console.log(new Date(firstDay), new Date(lastDay))

        setData(
          diaryList.filter((it)=> firstDay <= it.date && it.date <= lastDay)
        );
    }
  },[diaryList, curDate])

  useEffect(()=>{
    console.log(data)
  },[data])
 
  const increaseMonth = () => {
  setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()))
    }

    const decreaseMonth = () => {
      setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()))
      console.log(curDate)
        }
  return (
    <div>
      <MyHeader headText={headText}
      leftChild={<MyButton text={"<"} onClick={()=>{decreaseMonth()}}/>}
      rightChild={<MyButton text={">"} onClick={() =>{increaseMonth()}}/>}/>
      <DiaryList diaryList={data}/>
    </div>
  )
}

export default Home