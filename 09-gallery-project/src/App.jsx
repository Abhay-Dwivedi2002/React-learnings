import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';


const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`);
    setUserData(response.data);

  }

  useEffect(function(){
    getData()
  },[index])


  let printUserData = <h3 className='text-gray-400 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card download_url={elem.download_url}  author ={elem.author} url = {elem.url} />
      </div>
    })
  }

  return (

    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          style={{opacity: index ===1 ? 0.5 :1}}
          onClick={()=>{
            if(index >1){
              setIndex(index-1)
              setUserData([])
            }
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 m-8 font-semibold'>
          Previous
        </button>

          <h3>Page {index}</h3>

        <button
          onClick={()=>{
            setUserData([])
            setIndex(index+1)
          }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 m-8 font-semibold'>
          Next
        </button>
      </div>
    </div>


  )
}

export default App
