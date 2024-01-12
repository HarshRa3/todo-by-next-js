import EditTopicForm from '@/components/EditTopicForm/EditTopicForm'
import React from 'react'
const getTopicsById=async (id)=>{
  try {
    const response = await fetch(`http://localhost:3000/api/topics/${id}`,{cache:'no-store'})
    if(!response.ok){
      throw new Error("Could not fetch topics")
    }
    return await response.json();
  } catch (error) {
    console.log('Error loadng topic',error);
  }
  }
const page = async ({params}) => {
  const {id}=params
  const {topic}= await getTopicsById(id)
  const {title,description}=topic
  return (
    <>
    <EditTopicForm title={title} id={id} description={description} />
    </>
  )
}


export default page
