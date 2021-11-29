import React from 'react'
import List from '../components/List'
import ListInput from '../components/ListInput'

const MainApp = () => {
  return (
    <div className="container mx-auto px-10 py-12">
      <div className="md:flex justify-between">
        <h1 className="text-2xl">Kanban Board</h1>
        <ListInput/> 
      </div>
      <div className="mt-5">
        <List/>
      </div>
    </div>
  )
}

export default MainApp
