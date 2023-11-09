
interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  isFavourite: boolean;
  isDisabled: boolean;
}

export class User implements IUser {
  public id!: number;
  public email!: string;
  public first_name!: string;
  public last_name!: string;
  public avatar!: string;
  public isFavourite: boolean = false;
  public isDisabled: boolean = false;

  constructor(obj?: any) {
    if (obj !== undefined && obj !== null) Object.assign(this, obj);
  }
}