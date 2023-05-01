import React, { useState } from 'react'
import { createContext } from 'react'


const AppContext = createContext()

const Provider = ({children}) => {
  //const [usersTopics,setUsersTopics] = useState([])
  let arrayTopics=[]
  let gmail
  let password
  let passwordConfirm
  let age
  let gender

  const createUser=(user)=>{
    gmail=user.gmail
    password=user.password
    passwordConfirm=user.passwordConfirm
    age=user.age
    gender=user.gender
  }

  const returnUser=()=>{
    return {gmail, password, passwordConfirm,age,gender}
  }

  const addUsersTopic = (topic)=>{
    console.log(topic)
   // setUsersTopics([...usersTopics, topic])
    //setUsersTopics(usersTopics.push(topic))
    arrayTopics.push(topic)
    console.log(arrayTopics)
  }
  const removeUsersTopic = (topic)=>{
    console.log(topic)
    const filteredTopics = arrayTopics.filter(el=> el.title !== topic.title)
    //console.log(usersTopics)
    console.log(filteredTopics)
    arrayTopics=filteredTopics
    //setUsersTopics(filteredTopics)
  }
  const returnTopics = ()=>{
    console.log(arrayTopics);
    let titles=[]
    for (let index = 0; index < arrayTopics.length; index++) {
      titles[index]=arrayTopics[index].title      
    }
    console.log(titles);
    return titles
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
      removeUsersTopic,
      returnTopics,
      returnUser,
      createUser
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