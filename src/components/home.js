import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'


const Home = () => {
  return (
    <>
    <AddTodo/>
    <Todo/>
    </>
  )
}

export default Home