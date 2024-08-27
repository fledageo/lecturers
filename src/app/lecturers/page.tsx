import React from 'react'
import { getAllLecturers } from '../lib/api'
import "./style.css"
import Image from 'next/image'
import { LecturerBlock } from '../lib/components/lecturer-block/lecturer-block'

export default function Page() {
  const lecturers = getAllLecturers()
  return (
    <>
      <div className="box lecturers_box">
        {
          lecturers.map(lecturer => <LecturerBlock info={lecturer} key={lecturer.id}/>)
        }
      </div>
    </>
  )
}
