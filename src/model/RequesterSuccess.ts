import Requester from "./Requester";

export default class RequesterSuccess extends Requester {
  private data: string[];

  constructor(data: string[]) {
    super();
    this.data = data;
  }

  count(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data.length);
      }, 300);
    });
  }

  get(search: string): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data.filter((item) => item.includes(search)));
      }, 300);
    });
  }
}
