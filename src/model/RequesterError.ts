import Requester from './Requester';

export default class RequesterError extends Requester {
  private readonly data: string[];

  constructor(data: string[]) {
    super();
    this.data = data;
  }

  count(): Promise<number> {
    return new Promise((resolve, reject) => {
      return reject(new Error('error'));
      return setTimeout(() => {
        return reject(new Error('error'));
      }, 300);
    });
  }

  get(_search: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        return reject(new Error('error'));
      }, 300);
    });
  }
}
