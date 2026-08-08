import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params= useParams()


  return (
    <div>
      <h1> {params.courseId} Course Detail page</h1>
    </div>
  )
}

export default CourseDetail
