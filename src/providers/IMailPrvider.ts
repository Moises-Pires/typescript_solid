interface IAnddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IAnddress;
  from: IAnddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}
