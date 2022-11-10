import { ComicStore } from '../model/ComicStore/ComicStore';
import React, { useEffect } from 'react';

export default function AppComponent() {
  const comicStore : ComicStore = new ComicStore([]);

  return <div><input placeholder='Buscar' /><span>{comicStore.count()}</span></div>
}
