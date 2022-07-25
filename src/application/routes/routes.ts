import { Request, Response, Router } from "express";
import { hotelController } from "../../entities/Hotels";
import { createUserController } from "../../entities/Users";
import { Auth } from "../middleware/auth";


const router = Router()

// User Routes
router.post('/user/create', (request: Request, response: Response) => {
  return createUserController.create(request, response);
});
router.get('/user/find-by-email/:email', (request: Request, response: Response) => {
  return createUserController.findByEmail(request, response);
});
router.get('/user/find-by-id/:_id', (request: Request, response: Response) => {
  return createUserController.findById(request, response);
});
router.get('/user/find-all', (request: Request, response: Response) => {
  return createUserController.findAll(request, response);
});
router.put('/user/update/:_id', [Auth], (request: Request, response: Response) => {
  return createUserController.update(request, response);
});
router.delete('/user/delete/:_id', (request: Request, response: Response) => {
  return createUserController.delete(request, response);
});

// Hotel Routes
router.get('/hotel/find/:cityCode', (request: Request, response: Response) => {
  return hotelController.findHotel(request, response);
});

export { router }