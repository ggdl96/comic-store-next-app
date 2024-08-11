import { call, put, takeLatest } from 'redux-saga/effects';

import { searchOptions, setOptions } from './slice';
import { ComicStore } from '../model/ComicStore/ComicStore';

function buildGenerator(comicStore: ComicStore) {
  function* fetchOptions(action: { type: string; payload: string }) {
    try {
      const options: string[] = yield call((payload) => comicStore.listByKeyword(payload), action.payload);
      yield put(setOptions(options));
    } catch (e) {
      console.error('here! catch. fetchOptions:', e);
      // yield put({type: "SOME_TYPE", message: e.message});
    }
  }

  return fetchOptions;
}


function buildSaga(comicStore: ComicStore) {
  function* mySaga() {
    yield takeLatest(searchOptions.type, buildGenerator(comicStore));
  }
  return mySaga;
}

export default buildSaga;
