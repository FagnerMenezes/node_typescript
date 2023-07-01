import {Router} from 'express';
import studentController from '../controller/students'
const router = Router();

router.get('/',studentController.getAllStudent);
router.get('/:id',studentController.getById);
router.post('/create',studentController.postStudent);
router.put('/update/:id',studentController.putStudent);
router.delete('/:id',studentController.deleteStudent);

export default router;