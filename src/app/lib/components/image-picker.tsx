"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
export default function ImagePicker() {
    const image = useRef<HTMLInputElement>(null)
    const [url, setUrl] = useState<string>("")

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
            <div className="file has-name is-link mt-4">
                <label className="file-label">
                    <input
                        className="file-input"
                        type="file"
                        name="image"
                        ref={image}
                        onChange={handleChange}
                    />
                    <span className="file-cta">
                        <span className="file-label"> Choose a file… </span>
                    </span>
                    {
                        url && <>
                            <span className="file-name">{image.current?.files?.[0].name}</span>
                        </>
                    }
                </label>
            </div>
            {
                url && <>
                    <div className="box">
                        <Image
                            src={url}
                            width={100}
                            height={200}
                            alt="Image of lecturer"
                        />
                    </div>
                </>
            }
        </>
    )
}
