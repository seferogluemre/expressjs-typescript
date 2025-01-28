import { NextFunction, Response, Request } from "express";

export function helloWorld(req: Request, res: Response, next: NextFunction) {
    res.send("Merhaba Dünya")
}
export function helloEmre(req: Request, res: Response, next: NextFunction) {
    res.send("Merhaba emre")
}


class TestController