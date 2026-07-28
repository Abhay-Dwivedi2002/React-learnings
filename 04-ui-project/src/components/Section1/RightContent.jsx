import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div id='right' className='h-full overflow-x-auto flex flex-nowrap gap-5 p-6 w-2/3 '>
      {props.users.map(function(elem,idx){

        return <RightCard key={idx} id={idx+1} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
