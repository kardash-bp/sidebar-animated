import React from 'react'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <h1 className='text-4xl text-center mt-24'>Main Content</h1>
    </div>
  )
}

export default App
