import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Edit = () => {
    const navigate =useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();

            /* http://localhost:3000/edit?id=15&mode=dark */
    const id = searchParams.get('id')
    console.log(id)

    const mode =searchParams.get('mode');
    console.log(mode)
  return (
    <div>Edit
        {/* http://localhost:3000/edit?who=winterlood */}
        <button onClick={()=> setSearchParams({who:'winterlood'})}>qs바꾸기</button>
        <button onClick={()=>{navigate('/')}}>홈으로 가기</button>
        <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
    </div>
  )
}

export default Edit