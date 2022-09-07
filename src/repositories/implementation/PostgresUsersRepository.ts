import { User } from "../../entities/User";
import { IUserRepository } from "./../IUsersRepository";

export class PostgresUsersRepository implements IUserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    this.users.find((user) => user.email === email);
    return {
      id: "any_id",
      name: "any_name",
      email: "any_name",
      password: "any_password",
    };
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
