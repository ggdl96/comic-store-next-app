import { ComicStore } from './ComicStore';
import RequesterSuccess from '../RequesterSuccess';
import RequesterError from '../RequesterError';

describe('AppComponent', () => {
  it('should allow create a ComicStore with empty comics', async () => {
    const comicStore = createComicStore([]);

    expect(await comicStore.isEmpty()).toBeTruthy();
  });

  it('should allow create a ComicStore with comics', async () => {
    const comicStore = createComicStore(['Cartoon 1']);

    expect(await comicStore.isEmpty()).toBeFalsy();
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

  it('should return amount of comics', async () => {
    const comicList = ['first order', 'the first', 'another one'];
    const comicStore = createComicStore(comicList);

    const comicsCount = await comicStore.count();

    expect(comicsCount).toEqual(3);
  });

  it('should throw exception if request is rejected', async () => {
    const comicList = ['another one'];
    const comicStore = createComicStoreThatFails(comicList);

    await expect(comicStore.listByKeyword('fir')).rejects.toThrow('error');
  });

  it('should throw exception on count if request is rejected', async () => {
    const comicList = ['first order', 'the first', 'another one'];
    const comicStore = createComicStoreThatFails(comicList);
    await expect(comicStore.count()).rejects.toThrow('error');
  });
});

function createComicStore(comicList: string[]) {
  const requester = new RequesterSuccess(comicList);
  const comicStore = new ComicStore(requester);

  return comicStore;
}

function createComicStoreThatFails(comicList: string[]) {
  const requester = new RequesterError(comicList);
  const comicStore = new ComicStore(requester);

  return comicStore;
}
