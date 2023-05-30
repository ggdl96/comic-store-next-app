import Requester from "../Requester";
import RequesterError from "../RequesterError";

export class ComicStore {
    private requester: Requester | RequesterError;

    constructor(requester: Requester | RequesterError) {
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
            return new Promise(resolve => resolve([]));
        }

        return this.requester.get(keyword);
    }
}
