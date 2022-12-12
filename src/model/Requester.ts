export default class Requester {
    private data: Array<String>;

    constructor(data: Array<String>) {
        this.data = data;
    }

    count() {
        return this.data.length;
    }

    get(search) {
        return this.data.filter(item => item.includes(search));
    }
}
