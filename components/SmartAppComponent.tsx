import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import AppComponent from './app';
import { ComicStore } from '../model/ComicStore/ComicStore';

export default function SmartAppComponent() {
    const comicsList = useSelector(state => state.comics.list)
    const comicStore = new ComicStore(comicsList)

  return <AppComponent count={comicStore.count()} />
}
