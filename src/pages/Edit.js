import React,  { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'

import { DiaryStateContext } from '../App';
import DiaryEditor from '../components/DiaryEditor';

const Edit = () => {
    const [originData, setOriginData] = useState()
    const navigate =useNavigate();
    const {id} = useParams();
    const diaryList= useContext(DiaryStateContext)
    console.log(id)
    console.log(diaryList)
   /*  const [searchParams,setSearchParams] = useSearchParams();

             http://localhost:3000/edit?id=15&mode=dark 
    const id = searchParams.get('id')
    console.log(id)

    const mode =searchParams.get('mode');
    console.log(mode) */
  
  
    useEffect(()=>{
      if(diaryList.length >1){
        const targetDiary = diaryList.find(
          (it) => parseInt(it.id) === parseInt(id)
          );
          console.log(targetDiary)
          if(targetDiary){
            setOriginData(targetDiary)
          }else{
            alert('수정할 컨텐츠가 없습니다')
            navigate('/', {replace:true})
          }
      }

  },[id,diaryList])

  return (
    <div>
       {/*   http://localhost:3000/edit?who=winterlood
        <button onClick={()=> setSearchParams({who:'winterlood'})}>qs바꾸기</button>
        <button onClick={()=>{navigate('/')}}>홈으로 가기</button>
        <button onClick={()=>{navigate(-1)}}>뒤로가기</button> */}
        {originData && <DiaryEditor isEdit={true} originData={originData}/>}
    </div>
  )
}

export default Edit