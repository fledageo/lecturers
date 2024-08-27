"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'

interface IProps {
    src: string
}

export default function ImageEdit({ src }: IProps) {
    const image = useRef<HTMLInputElement>(null)
    const [url, setUrl] = useState<string>(`/${src}`)
    

    const handleChange = () => {
        let file = image.current?.files?.[0]
        if (file) {
            
            const reader = new FileReader()
            reader.readAsDataURL(file)
            
            reader.onload = () => {
                setUrl(reader.result as string)
            }
        }
    }

    return (
        <>
            <Image src={url} width={150} height={200} alt='Image' className='img' />
            <input
                type="file"
                id="image"
                className='is-hidden'
                name='image' 
                ref={image}
                onChange={handleChange}
            />
        </>
    )
}
