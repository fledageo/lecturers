import React from 'react'
import Image from 'next/image'
import { ILecturer } from '../../types'

interface IProps {
  info:ILecturer
}

export const LecturerBlock = ({info}:IProps) => {
  return (
    <>
      <div className="lecturer_block">
        <div className="img-block mb-4">
          <Image src={`/${info.image}`} alt='Image of lecturer' width={100} height={100} />
        </div>
        <span className='title is-5'>{`${info.name} ${info.surname}`}</span>
        <span className='subtitle is-6'>{info.subject}</span>
        <a href={`lecturers/edit/${info.id}`}>Edit</a>
      </div>
    </>
  )
}
