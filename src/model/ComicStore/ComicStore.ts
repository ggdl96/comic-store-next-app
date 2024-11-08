import Requester from '../Requester';

export class ComicStore {
  private requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  async isEmpty(): Promise<boolean> {
    return (await this.count()) === 0;
  }

  count(): Promise<number> {
    return this.requester.count();
  }

  listByKeyword(keyword: string): Promise<string[]> {
    if (keyword.length < 3) {
      return new Promise(resolve => resolve([]));
    }

    return this.requester.get(keyword);
  }
}
