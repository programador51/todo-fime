import { NextFunction , request, Request , Response } from 'express';
import connection from './db';

/**
 * Fetch the task of a determinated user
 * @param idUser - Id of the user to fetch the tasks
 */
const GetTasks = (idUser: number , begin:number = 0,limit:number = 10) => {
    return new Promise((resolve, reject) => {
        connection.query(`



        SELECT 
        
        id AS id,
        description AS description,
        createdDate AS createdDate,
        
        IF(completed = 1, 'Si','No') AS completed,

        IF(completed = 1, TRUE , FALSE) AS boolCompleted

        FROM tasks WHERE userId = ?
        
        AND logicalErase = 0

        ORDER BY createdDate DESC , logicalErase ASC

        LIMIT ?,?
        ;

        `, [idUser,begin,limit], (error, result, fileds) => {
            if (error) {
                console.log(error);
                reject(error);
            }

            resolve(result);
        });
    });
}

const AddTask = (idUser: number, task: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`
        INSERT INTO tasks
            (description,userId) VALUES (?,?)
        `,
            [task, idUser],
            (error, result, fileds) => {
                if (error) {
                    console.log(error);
                    reject(false);
                }

                console.log(result);
                resolve(true);
            }
        )
    });
}

const DeleteTask = (idTask: number) => {
    return new Promise((resolve, reject) => {
        connection.query(`
        
        UPDATE tasks SET logicalErase = 1 WHERE id = ?

        `,

            idTask,
            (error, result, fileds) => {
                if (error) {
                    console.log(error);
                    reject(false);
                }

                console.log(result);
                resolve(true);
            }
        )
    });
}

const ToggleDone = (idTask: number, status: 0 | 1 = 1) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE tasks SET completed = ? WHERE id = ?`,
            [status, idTask],
            (error, result, fields) => {
                if (error) {
                    console.log(error);
                    reject(false);
                }

                resolve(true);
            }
        )
    });
}

const GetNoTasks = (req:Request,res:Response,next:NextFunction) => {
    connection.query(`SELECT COUNT(*) AS noTasks FROM tasks WHERE userId = 1 AND logicalErase = 0`,
        1,
        (error, result, fields) => {
            if (error) {
                console.log(error);
                return res.status(200).json({
                    status:500,
                    error
                });
            }

            req.body.recordsets = result[0]['noTasks']


            next();
        }
    )
}

const UpdateTask = (idTask: number, content: string) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE tasks SET description = ? WHERE id = ?`,
            [content, idTask],
            (error, result, fields) => {
                if (error) {
                    console.log(error);
                    reject(false);
                }

                resolve(true);
            }
        )
    });
}

export default {
    GetTasks,
    AddTask,
    DeleteTask,
    ToggleDone,
    UpdateTask,
    GetNoTasks
}