"use server"

import { createWriteStream, unlink } from "fs"
import { ILecturer} from "./types"
import { addLecturer, updateLecturer } from "./api"
import { redirect } from "next/navigation"

export const handleAdd = async (data:FormData) => {
    let image = data.get("image") as File

    if(image){
        const format = image.type.split("/").at(-1)
        const fileName = `${Date.now()}.${format}`

        const stream = createWriteStream("public/images/" + fileName)
        const buffered = await image.arrayBuffer()

        stream.write(Buffer.from(buffered))

        const lecturerInfo:ILecturer = {
            name:data.get("name") as string,
            surname:data.get("surname") as string,
            subject:data.get("subject") as string,
            image:`images/${fileName}`
        }

        addLecturer(lecturerInfo)
        redirect("/lecturers")
    }

    
}
export const handleUpdate = async(data:FormData) => {
    const image = data.get("image") as File
    const srcUpdate = data.get("srcUpdate")
    let src = srcUpdate as string

    if(image.size > 0){
        unlink(`public/${srcUpdate}`,(err) => {
            if(err){
                console.error(`Error`)
            }else{
                console.error(`Success`)
            }
        })
        const format = image.type.split("/").at(-1)
        const fileName = `${Date.now()}.${format}`

        const stream = createWriteStream("public/images/" + fileName)
        const buffered = await image.arrayBuffer()

        stream.write(Buffer.from(buffered))
        src = `images/${fileName}`
    }
    const lecturerInfo:ILecturer = {
        id:data.get("id") as string|number,
        name:data.get("name") as string,
        surname:data.get("surname") as string,
        subject:data.get("subject") as string,
        image:src,
    }

    updateLecturer(lecturerInfo)
    redirect("/lecturers")
}