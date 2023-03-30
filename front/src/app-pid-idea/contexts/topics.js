
import React, { useState } from 'react'
import { createContext } from 'react'


const AppContext = createContext()

const Provider = ({children}) => {
  const [usersTopics,setUsersTopics] = useState([])
  const addUsersTopic = (topic)=>{
    setUsersTopics([...usersTopics, topic])
  }
  const removeUsersTopic = (topic)=>{
    const filteredTopics = usersTopics.filter(el=> el.title !== topic)
    setUsersTopics(filteredTopics)
  }
  const topics=[
    {
    title:'Cooking',
    imgUrl :'pics/cooking2.jpg'
  },
  {
    title:'Vogue',
    imgUrl :'pics/vogue2.jpg'
  },
  {
    title:'Dance',
    imgUrl :'pics/dance.jpg'
  },
  {
    title:'Memes',
    imgUrl :'pics/meme2.jpg'
  },
  {
    title:'DIY',
    imgUrl :'pics/diy2.jpg'
  },
  {
    title:'Drawing',
    imgUrl :'pics/drawing.jpg'
  },
  {
    title:'Makeup',
    imgUrl :'pics/makeup.jpg'
  },
  {
    title:'Home Decor',
    imgUrl :'pics/homedecor.jpg'
  },
  {
    title:'Nails',
    imgUrl :'pics/nails.jpg'
  },
  
]

    const sharedValue = {
      topics,
      addUsersTopic,
      removeUsersTopic
    }
  return (
    <AppContext.Provider value={sharedValue}>
        {/* {topics.map((topic,index)=>(
            <button key={index}>
                <div>
                    <img src={topic.imgUrl} alt={topic.title} />
                </div>
                <div>
                    {topic.title}
                </div>
            </button>
        ))} */}
        {children}
    </AppContext.Provider>
  )
}
export {Provider}
export default AppContext