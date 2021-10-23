import { Router } from 'express';
import ControllerToDo from '../controller/toDo';

const router = Router();

router.get('/',
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

export default router;