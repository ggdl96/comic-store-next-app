import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';

import SearchComponent from './Search';
import ListComponent from './List';
import { ComicStore } from '../model/ComicStore/ComicStore';
import { setList, searchOptions } from '../features/slice';
import Requester from '../model/Requester';

import {  RootState } from '../store';
interface SmartAppComponentProps {
  comicStore: ComicStore,
}

export default function SmartAppComponent({ comicStore }: SmartAppComponentProps) {
    const comicsOptionList = useSelector((state: RootState) => state.comics.options);
    const comicsList = useSelector((state: RootState) => state.comics.list);
    const dispatch = useDispatch();

    const handleClickOption = (option: string) => {
      const getListByKeyword = async () => {
        const list = await comicStore.listByKeyword(option);
        dispatch(setList(list));
      }

      getListByKeyword();
    }

    const handleSearchOption = (value: string) => {
      dispatch(searchOptions(value));
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
