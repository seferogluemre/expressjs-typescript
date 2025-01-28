import { NextFunction, Response, Request } from "express";
// export class TestController {
//     static helloWorld(req: Request, res: Response, next: NextFunction) {
//         res.send("Merhaba Dünya")
//     }
//     static helloEmre(req: Request, res: Response, next: NextFunction) {
//         res.send("Merhaba emre")
//     }
// }

type controllerMethod = (req: Request, res: Response, next: NextFunction) => void;

type Controller = Record<string, controllerMethod>

const TestController: Controller = {
    helloWorld(req, res, next) {
        res.send("Merhaba Dünya")
    },
    helloEmre(req, res, next) {
        res.send("Merhaba emre")
    }
}