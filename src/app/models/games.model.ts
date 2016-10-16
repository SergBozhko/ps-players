/**
 * Created by sniffer on 16.10.16.
 */
export interface IGame {
  title: string;
  description: string;
  price: number;
  rate: number;
}

export class Game implements IGame {

  title: string;
  description: string;
  price: number;
  rate: number;

  constructor(title: string, description: string, price: number, rate: number) {
    this.title = title || 'Untitled';
    this.description = description || '';
    this.price = price || 0;
    this.rate = rate || 0;
  }

}
