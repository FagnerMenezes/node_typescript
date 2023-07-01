import mongoose, {Schema,model, Document}  from "mongoose"
import db from '../database/db'
const conn = db;
interface IStudent{
    name: string,
    age: number
}

export interface IStudentModel extends IStudent, Document {};

const schemaStudent = new Schema({
        _id:mongoose.Types.ObjectId,
        name:String,
        age:Number,
},{timestamps:true})

const student = model<IStudentModel>('students',schemaStudent);
conn;
export default student;


