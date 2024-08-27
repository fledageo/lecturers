import Database from "better-sqlite3";
import { ILecturer } from "./types";

const db = new Database("lecturers.db")

export const addLecturer =  (info: ILecturer) => {
    db.prepare(`
        INSERT INTO lecturers(name , surname , subject , image)
        VALUES(@name , @surname , @subject , @image)    
    `).run(info)
}

export const getAllLecturers = (): ILecturer[] => {
    return db.prepare(`
        SELECT * FROM lecturers    
    `).all() as ILecturer[]
}

export const getLecturerById = (id:number|string):ILecturer => {
    return db.prepare(`
        SELECT * FROM lecturers
        WHERE id=?
    `).get(id) as ILecturer
}

export const updateLecturer = (info:ILecturer) => {
    const {name,surname,subject,image,id} = info
    console.log(id)
    db.prepare(`
        UPDATE lecturers
        SET name = ?, surname = ?, subject = ?, image = ?
        WHERE id = ?
    `).run(name,surname,subject,image,id);
}