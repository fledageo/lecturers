import React from 'react'
import "./style.css"
import { handleAdd } from '@/app/lib/server-actions'
import ImagePicker from '@/app/lib/components/image-picker'


export default function Page() {
  return (
    <>
      <form action={handleAdd} className='add_form box'>
        <div className='name_surname_box mt-4'>
          <input
            className="input is-link mr-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="input is-link ml-2"
            type="text"
            placeholder="Surname"
            name="surname"
          />
        </div>
        <div className="others_block">
          <input
            className="input is-link mt-4"
            type="text"
            placeholder="Subject"
            name="subject"
          />
          <ImagePicker/>
          <button className='button is-link'>Add</button>
        </div>
      </form>
    </>
  )
}
