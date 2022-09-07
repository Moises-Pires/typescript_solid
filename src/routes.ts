import { Router } from "express";
import { createUserUseController } from "./useCases/CreateUser";

const router = Router();

router.post("/user", (request, response) => {
  return createUserUseController.handle(request, response);
});

export { router };
