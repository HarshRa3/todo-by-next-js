import React from 'react'
import RemoveBtn from '../RemoveBtn/RemoveBtn'
import Link from 'next/link'
import { FaEdit } from "react-icons/fa";
const getTopics=async ()=>{
  const apiurl=process.env.API_URL
try {
  const response = await fetch(`${apiurl}api/topics`,{cache:'no-store'})
  if(!response.ok){
    throw new Error("Could not fetch topics")
  }
  return await response.json();
} catch (error) {
  console.log('Error loadng topic',error);
}
}
const TopicsList = async () => {
  const {topics}= await getTopics()
  return  (
    <>{topics.map((e)=>{
     return (<div key={e._id} className='p-4 border border-slate-400 my-3 flex justify-between'>
      <div>
          <h2 className='font-bold text-2xl break-all'>{e.title}</h2>
          <div className='break-all' >{e.description}</div>
      </div>
      <div className='flex gap-2 items-start'>
          <RemoveBtn id={e._id} />
          <Link href={`/editTopic/${e._id}`}><FaEdit size={24}/></Link>
      </div>
  </div>)
    })}

    </>
  )
}

export default TopicsList
