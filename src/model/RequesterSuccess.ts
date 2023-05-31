import Requester from "./Requester";

export default class RequesterSuccess extends Requester {
    private data: string[];

    constructor(data: string[]) {
        super();
        this.data = data;
    }

    count() {
        return this.data.length;
    }

    get(search): Promise<string[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data.filter(item => item.includes(search)));
            }, 300)
        });
    }
}
