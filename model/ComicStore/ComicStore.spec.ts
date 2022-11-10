import { ComicStore } from './ComicStore';

describe('AppComponent', () => {
  it('should allow create a ComicStore with empty comics', () => {
    const comicStore = new ComicStore([]);

    expect(comicStore.isEmpty()).toBeTruthy();
  });

  it('should allow create a ComicStore with comics', () => {
    const comicStore = new ComicStore(['Cartoon 1']);

    expect(comicStore.isEmpty()).toBeFalsy();
  });

  it('should allow to search comics by keyword', () => {
    const resultsToExpect = ['first order', 'the first'];
    const comicList = [...resultsToExpect, 'another one'];
    const comicStore = new ComicStore(comicList);

    const comics = comicStore.listByKeyword('fir');

    expect(comics).toEqual(['first order', 'the first']);
  });

  it('should not allow to search when less than 3 letters', () => {
    const resultsToExpect = ['first order', 'the first'];
    const comicList = [...resultsToExpect, 'another one'];
    const comicStore = new ComicStore(comicList);

    const comics = comicStore.listByKeyword('fi');

    expect(comics).toEqual([]);
  });

  it('should return amount of comics', () => {
    const comicList = ['first order', 'the first', 'another one'];
    const comicStore = new ComicStore(comicList);

    const comicsCount = comicStore.count();

    expect(comicsCount).toEqual(3);
  });
});
