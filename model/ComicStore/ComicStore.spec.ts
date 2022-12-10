import { ComicStore } from './ComicStore';
import Requester from '../Requester';

describe('AppComponent', () => {
  it('should allow create a ComicStore with empty comics', () => {
    const requester = new Requester([]);
    const comicStore = new ComicStore(requester);

    expect(comicStore.isEmpty()).toBeTruthy();
  });

  it('should allow create a ComicStore with comics', () => {
    const requester = new Requester(['Cartoon 1']);
    const comicStore = new ComicStore(requester);

    expect(comicStore.isEmpty()).toBeFalsy();
  });

  it('should allow to search comics by keyword', () => {
    const resultsToExpect = ['first order', 'the first'];
    const comicList = [...resultsToExpect, 'another one'];
    const requester = new Requester(comicList);
    const comicStore = new ComicStore(requester);

    const comics = comicStore.listByKeyword('fir');

    expect(comics).toEqual(resultsToExpect);
  });

  it('should not allow to search when less than 3 letters', () => {
    const comicList = ['first order', 'the first', 'another one'];

    const requester = new Requester(comicList);
    const comicStore = new ComicStore(requester);
    const comics = comicStore.listByKeyword('fi');

    expect(comics).toEqual([]);
  });

  it('should return amount of comics', () => {
    const comicList = ['first order', 'the first', 'another one'];
    const requester = new Requester(comicList);
    const comicStore = new ComicStore(requester);

    const comicsCount = comicStore.count();

    expect(comicsCount).toEqual(3);
  });
});
