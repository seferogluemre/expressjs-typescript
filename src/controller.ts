import { NextFunction, Response, Request } from "express";



// export class TestController {
//     static helloWorld(req: Request, res: Response, next: NextFunction) {
//         res.send("Merhaba Dünya")
//     }
//     static helloEmre(req: Request, res: Response, next: NextFunction) {
//         res.send("Merhaba emre")
//     }
// }

const TestController = {
    helloWorld(req: Request, res: Response, next: NextFunction) {
        res.send("Merhaba Dünya")
    },
    helloEmre(req: Request, res: Response, next: NextFunction) {
        res.send("Merhaba emre")
    }
}