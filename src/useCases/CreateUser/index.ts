import { CreateUserUserCase } from "./CreateUserUserCase";
import { PostgresUsersRepository } from "./../../repositories/implementation/PostgresUsersRepository";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUserCase = new CreateUserUserCase(
  postgresUsersRepository,
  mailtrapProvider
);

const createUserUseController = new CreateUserController(createUserUserCase);

export { createUserUserCase, createUserUseController };
