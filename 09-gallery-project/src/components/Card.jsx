import React from 'react'

const Card = (props) => {
    console.log(props);
    return (
        
        <div>
            <a href={props.url} target='_blank'>
                <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
                    <img className='h-full w-full object-cover' src={props.download_url} alt="No iamge" />
                </div>
                <h2 className='font-bold text-lg'>{props.author}</h2>
            </a>
        </div>
    )
}

export default Card
