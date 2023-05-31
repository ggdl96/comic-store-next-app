import Requester from "./Requester";

export default class RequesterError extends Requester {
    private data: string[];

    constructor(data: string[]) {
        super();
        this.data = data;
    }

    count() {
        return this.data.length;
    }

    get(search): Promise<string[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject({ error: 'error' });
            }, 300)
        });
    }
}
