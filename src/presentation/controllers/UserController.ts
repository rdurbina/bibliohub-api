import { Request, Response } from "express";
import CreateUserUseCase from "../../application/use-cases/user/CreateUserUseCase.js";
import UserDto from "../../application/dtos/UserDto.js";
import { inject, injectable } from "inversify";

@injectable()
export default class UserController {
  constructor(
    @inject(CreateUserUseCase)
    private createUserUseCase: CreateUserUseCase
  ) {}
  async createUser(req: Request, res: Response) {
    const { username, password, email } = req.body;
    try {
      const data = new UserDto(username, email, "contributor", password);
      const savedUser = await this.createUserUseCase.execute(data);
      res.status(200).json({ savedUser: savedUser });
    } catch (error) {
      console.log(error)
      res.status(400).json({message: "An error has occurred..."});
    }
  }
}
