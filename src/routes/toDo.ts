import { Router } from 'express';
import ControllerToDo from '../controller/toDo';
import ModelToDo from '../models/toDo';
import Pagination from '@/middlewares/pagination';

const router = Router();

router.get('/',
    Pagination.getPagination,
    ModelToDo.GetNoTasks,
    Pagination.calculatePages,
    ControllerToDo.GetTasks
);

router.post('/',
    ControllerToDo.AddTask
);

router.delete('/',
    ControllerToDo.DeleteTask
);

router.put('/:idTask/actualizar-estado',
    ControllerToDo.UpdateCheckToDo
);

router.put('/:idTask/contenido',
    ControllerToDo.UpdateTask
);

export default router;