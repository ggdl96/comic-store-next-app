import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';

import SearchComponent from './Search';
import ListComponent from './List';
import { ComicStore } from '../model/ComicStore/ComicStore';
import { setList, setOptions } from '../features/slice';
import Requester from '../model/Requester';

interface SmartAppComponentProps {
  requester: Requester,
}

export default function SmartAppComponent({ requester }: SmartAppComponentProps) {
    const comicsOptionList = useSelector(state => state.comics.options);
    const comicsList = useSelector(state => state.comics.list);
    const dispatch = useDispatch();

    const comicStore = new ComicStore(requester);

    const handleClickOption = (option: string) => {
      dispatch(setList(comicStore.listByKeyword(option)));
    }

    const handleSearchOption = (value: string) => {
      const searchedOptions = comicStore.listByKeyword(value);
      dispatch(setOptions(searchedOptions));
    }

  return (
    <>
      <SearchComponent
        count={comicStore.count()}
        onSearch={handleSearchOption}
        onClickOption={handleClickOption}
        options={[...comicsOptionList]} />
      { comicsList ? <ListComponent items={comicsList} /> : null }
    </>
  );
}

SmartAppComponent.propTypes = {
  requester: PropTypes.instanceOf(Requester).isRequired,
};
