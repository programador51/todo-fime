import { Request,  response,  Response } from 'express';

import ModelToDo from '../models/toDo';

/**
 * Get the tasks
 * @param req - Express request
 * @param res - Express response
 * @returns Express response
 */
const GetTasks = async(req:Request,res:Response)=>{
    try {
        
        const { rangeBegin:begin,noRegisters:limit , pages } = req.body;

        const tasks = await ModelToDo.GetTasks(1,begin,limit);

        return res.status(200).json({
            status:200,
            data:{
                tasks,
                pages,
                actualPage:+(req.query.pagina||1)
            }
        });

    } catch (error) {

        console.log(error);

        return res.status(200).json({
            status:500,
            error
        });
    }
}

const AddTask = async(req:Request,res:Response)=>{
    try {
        
        const { idUser , task } = req.body;

        await ModelToDo.AddTask(idUser,task);

        return res.status(200).json({
            status:200,
            message:'Tarea agregada'
        });

    } catch (error) {

        console.log(error);

        return res.status(200).json({
            status:500,
            error,
            message:'Error'
        });
    }
}

const DeleteTask = async(req:Request,res:Response)=>{
    try {
        
        const { idTask } = req.body;

        await ModelToDo.DeleteTask(idTask);

        return res.status(200).json({
            status:200,
            message:'Tarea borrada'
        });

    } catch (error) {

        console.log(error);

        return res.status(200).json({
            status:500,
            error,
            message:'Error'
        });
    }
}

const UpdateCheckToDo = async(req:Request,res:Response)=>{
    try {
        
        const { idTask , status } = req.body;

        await ModelToDo.ToggleDone(idTask,status);

        return res.status(200).json({
            status:200,
            message:'Tarea marcada'
        });

    } catch (error) {
        console.log(error);

        return res.status(200).json({
            status:500,
            error,
            message:'Error'
        });
    }
}

const UpdateTask = async(req:Request,res:Response)=>{
    try {

        const { idTask , content  } = req.body;

        console.log(req.body);

        await ModelToDo.UpdateTask(idTask,content);

        return res.status(200).json({
            status:200,
            message:'Tare actualizada'
        });

    } catch (error) {
        console.log(error);

        return res.status(200).json({
            status:500,
            error,
            message:'Error'
        });
    }
}

export default {
    GetTasks,
    AddTask,
    UpdateCheckToDo,
    DeleteTask,
    UpdateTask
}