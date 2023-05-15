import React, { useContext, useState } from 'react'
import AppContext from '../../../../contexts/topics'
//import React,{useState} from 'react'

const TopicCard = ({topic}) => {
  const [clicked, setClicked] = useState(false)
  
  const {removeUsersTopic, addUsersTopic,getSizeTopics} = useContext(AppContext)
 const handleTopicInput = (e)=>{
  console.log(e)
  //const situation=document.getElementById(`topic-${topic.title}`).classList.
  if((!clicked)&&(getSizeTopics()<5)){
    setClicked(true)
    
    //clicked=true
    //document.getElementById(`topic-${topic.title}`).classList.add("opacity")
    addUsersTopic(topic)
    
  }

  // {removeUsersTopic(topic.title)
  else 
    //{
     {removeUsersTopic(topic)
  //document.getElementById(`topic-${topic.title}`).classList.remove("opacity")
  setClicked(false)}
  //setClicked(!clicked)
  
}
  return (
    <div className={`clicked col-4 p-2 img-topic ${clicked ? "opacity" : ""}`}  onClick={handleTopicInput}>
    
        <img  src={topic.imgUrl}  alt={topic.title} id={`topic-${topic.title}`} className='w-100 rounded shadow imgCard' />
        <h2 className='img-title'>{topic.title}</h2>
    </div>
  )
}

export default TopicCard