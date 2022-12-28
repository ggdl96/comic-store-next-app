import { ComicStore } from './ComicStore';
import Requester from '../Requester';

describe('AppComponent', () => {
  it('should allow create a ComicStore with empty comics', () => {
    const comicStore = createComicStore([]);

    expect(comicStore.isEmpty()).toBeTruthy();
  });

  it('should allow create a ComicStore with comics', () => {
    const comicStore = createComicStore(['Cartoon 1']);

    expect(comicStore.isEmpty()).toBeFalsy();
  });

  it('should allow to search comics by keyword', async () => {
    const resultsToExpect = ['first order', 'the first'];
    const comicList = [...resultsToExpect, 'another one'];
    const comicStore = createComicStore(comicList);

    const comics = await comicStore.listByKeyword('fir');

    expect(comics).toEqual(resultsToExpect);
  });

  it('should not allow to search when less than 3 letters', async () => {
    const comicList = ['first order', 'the first', 'another one'];
    const comicStore = createComicStore(comicList);
  
    const comics = await comicStore.listByKeyword('fi');

    expect(comics).toEqual([]);
  });

  it('should return amount of comics', () => {
    const comicList = ['first order', 'the first', 'another one'];
    const comicStore = createComicStore(comicList);

    const comicsCount = comicStore.count();

    expect(comicsCount).toEqual(3);
  });
});

function createComicStore(comicList: string[]) {
  const requester = new Requester(comicList);
  const comicStore = new ComicStore(requester);

  return comicStore;
}