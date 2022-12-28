import Requester from "../Requester";

export class ComicStore {
    private requester: Requester;

    constructor(requester: Requester) {
        this.requester = requester;
    }

    isEmpty() {
        return this.count() === 0;
    }

    count() {
        return this.requester.count();
    }

    listByKeyword(keyword: string): Promise<string[]> {
        if (keyword.length < 3) {
            return new Promise((resolve)=> resolve([]));
        }

        return this.requester.get(keyword);
    }
}
