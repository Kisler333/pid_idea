import React, { useContext } from 'react'
import appContext from '../../../../contexts/topics'
import TopicCard from './TopicCard'
import './topicCard.css'

const ListTopics = () => {
    const {topics}= useContext(appContext)
    
    const topicsEl = topics.map(topic => (<TopicCard key={Math.floor(Math.random()*9999999)} topic={topic}/>))
  return (
    <div className='row'>{topicsEl}</div>
  )
}

export default ListTopics