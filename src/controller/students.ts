import { Request, Response } from "express";
import StudentService from "../services/students";
import { receiveMessageOnPort } from "worker_threads";

const Students = {
  postStudent: async (req: Request, res: Response) => {
   await StudentService.post(req.body).then((response) =>
      res.status(201).json(response)
    );
  },
  putStudent: async (req: Request, res: Response) => {
    const{name,age} = req.body;
    const code = req.params.id;
    await StudentService.put({name,age},code).then((response) => res.json(response));
   },
   getAllStudent: async (req: Request, res: Response) => {
    await StudentService.getAll().then((response) => res.json(response));
   },
   getById: async (req: Request, res: Response) => {
    await StudentService.getByStudentId(req.params.id).then((response) => res.json(response));
   },
   deleteStudent: async (req: Request, res: Response) => {
    await StudentService.delete(req.params.id).then((response) => res.status(204).json(response));
   },
};

export default Students;
