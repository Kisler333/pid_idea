import React, { useContext, useState } from 'react'
import AppContext from '../../../../contexts/topics'

const TopicCard = ({topic}) => {
  const [clicked, setClicked] = useState(false)
  
  const {removeUsersTopic, addUsersTopic} = useContext(AppContext)
 const handleTopicInput = ()=>{
  if(clicked){
    addUsersTopic(topic.title)
    
  }
  else removeUsersTopic(topic.title)
  setClicked(!clicked)
}
  return (
    <div className={`col-4 p-2 img-topic ${clicked ? "opacity-25" : ""}`}  onClick={handleTopicInput}>
        <img  src={topic.imgUrl} id="imgCard" alt={topic.title} className='w-100 rounded shadow imgCard' />
        <h2 className='img-title'>{topic.title}</h2>
    </div>
  )
}

export default TopicCard