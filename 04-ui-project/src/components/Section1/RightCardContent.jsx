import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between' >
            <h2 className='bg-white rounded-full text-xl font-semibold h-12 w-12 flex justify-center items-center'>{props.id}</h2>
            <div  >
                <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti rerum magni nulla. Necessitatibus, nostrum modi.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full' ><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
