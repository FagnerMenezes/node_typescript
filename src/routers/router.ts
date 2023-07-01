import { Router, json } from "express";
import { Request, Response } from "express";
const router = Router();

interface data {
  name: string;
  age: number;
}

const list: data[] = [
  {
    name: "Fagner",
    age: 38,
  },
  {
    name: "Benjamin",
    age: 3,
  },
];

router.get("/", (req: Request, res: Response) => {
  res.json({ msg: "server is running" });
});

router.get("/app", (req: Request, res: Response) => {
  res.json({ data: list });
});

router.get("/app/search", (req: Request, res: Response) => {
  const { name } = req.body;
  const response = list.find((item) => item.name === name);
  res.json(response);
});

router.post("/app/create", (req: Request, res: Response) => {
  list.push(req.body);
  res.json({ list,msg:'Registration successfully performed' });
});
router.put("/app/update", (req: Request, res: Response) => {
  const { name } = req.body;
  const response = list.find((item) => item.name === name);
  if (!response) {
    res.status(404).json({ msg: "Register not found !"});
    return;
  } else {
    response.name = req.body.name;
    response.age = req.body.age;
    res.json({ response });
  }
});
router.delete("/app/delete", (req: Request, res: Response) => {
  const { name } = req.body;
  const response = list.find((item) => item.name === name);
  if (!response) {
    res.status(404).json({ message: "Register not found !" });
    return;
  } else {
    const itemDelete = list.filter((item) => item.name != name);
    res.status(200).json(itemDelete);
  }
});

export default router;
