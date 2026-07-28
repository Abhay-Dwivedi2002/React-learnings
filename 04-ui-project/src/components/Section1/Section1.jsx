import React from 'react'
import Navbar from './Navbar'
import Page1Context from './Page1Context'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Context users= {props.users} />
      

    </div>
  )
}

export default Section1
