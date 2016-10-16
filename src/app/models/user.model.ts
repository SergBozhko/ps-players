/**
 * Created by sniffer on 16.10.16.
 */

export interface IUser {
  name: string;
  secondName: string;
  nickName: string;
  age: number;
  platforms: string[];
}

export class User implements IUser {
  name: string;
  secondName: string;
  nickName: string;
  age: number;
  platforms: string[];

  constructor() {

  }
}
