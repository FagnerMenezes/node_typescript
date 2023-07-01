import students from "../entity/students";
import mongoose from "mongoose";
type StudentsData = {
  name: string;
  age: number;
};

const StudentsService = {
  post: async (student: StudentsData) => {
    const response = students.insertMany(student);
    return response
      .then((response) => response)
      .catch((error) => error);
  },
  put: async ({ name, age}: StudentsData,code:string) => {
    const query = {
        _id: code
    };
    const response = students.updateOne(query,{
      name: name,
      age: age,
    });
    return response
      .then((response) => response)
      .catch((error) => error);
  },
  getAll: async () => {  
    const response = students.find();
    return response
  },
  getByStudentId: async (code:string) => {  
    const response = students.findById({_id:code});
    return response
  },
  delete: async (code:string) => {  
    const response = students.deleteOne({_id:code});
    return response
  },
};
export default StudentsService;
