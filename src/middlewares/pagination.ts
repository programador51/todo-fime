import { NextFunction, Request , Response } from 'express';


function getPagination(request:Request, response:Response, next:NextFunction) {

    const limitRegisters = 10;

    const { pagina = 1 } = request.query

    // const page = parseInt(pagina, limitRegisters);
    const startIndex = (+pagina - 1) * limitRegisters;

    request.body.actualPage = +pagina;
    request.body.rangeBegin = startIndex;
    request.body.noRegisters = limitRegisters;

    console.log(request.body);

    next();
}

function calculatePages(request:Request, response:Response, next:NextFunction) {
    const numberPages = Math.ceil(request.body.recordsets / request.body.noRegisters);
    request.body.pages = numberPages;
    next();
}

export default {
    getPagination,
    calculatePages
}