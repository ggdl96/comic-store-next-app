export class ComicStore {
    count() {
      return this.comics.length;
    }

    listByKeyword(keyword: string) {
        if (keyword.length < 3) {
            return [];
        }

        return this.comics.filter(cartoon => cartoon.includes(keyword));
    }
    private comics;

    constructor(comics: Array<string>) {
        this.comics = comics;
    }

    isEmpty() {
        return this.count() === 0;
    }
}
