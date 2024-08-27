import React from 'react'
import "./style.css"
import { getLecturerById } from '@/app/lib/api'
import Image from 'next/image'
import ImageEdit from '@/app/lib/components/image-edit'
import { handleUpdate } from '@/app/lib/server-actions'
interface IProps {
    params: { id: number | string }
}

export default function Page({ params }: IProps) {
    const lecturer = getLecturerById(params.id)
    return (
        <>
            <form action={handleUpdate} className='edit_form box'>
                <div className="img-block-wrapper">
                    <label htmlFor="image">
                        <div className="box img-block">
                            <ImageEdit src={lecturer.image}/>
                        </div>
                    </label>
                </div>
                <div className='name_surname_box mt-4'>
                    <input
                        className="input is-link mr-2"
                        type="text"
                        placeholder="Name"
                        name="name"
                        defaultValue={lecturer.name}
                    />
                    <input
                        className="input is-link ml-2"
                        type="text"
                        placeholder="Surname"
                        name="surname"
                        defaultValue={lecturer.surname}

                    />
                </div>
                <div className="others_block">
                    <input
                        className="input is-link mt-4"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        defaultValue={lecturer.subject}

                    />
                    {/* send id */}
                    <input type="text" hidden name='id' defaultValue={lecturer.id}/>
                    {/* send SrcUpdate*/}
                    <input type="text" hidden name='srcUpdate' defaultValue={lecturer.image}/>

                    <button className='button is-link mt-4'>Edit</button>
                </div>
            </form>
        </>
    )
}
