export default class Requester {
    private data: string[];

    constructor(data: string[]) {
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
