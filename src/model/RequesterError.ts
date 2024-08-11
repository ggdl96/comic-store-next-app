import Requester from "./Requester";

export default class RequesterError extends Requester {
    private data: string[];

    constructor(data: string[]) {
        super();
        this.data = data;
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject({ error: 'error' });
            }, 300)
        });
    }

    get(_search: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject({ error: 'error' });
            }, 300)
        });
    }
}
