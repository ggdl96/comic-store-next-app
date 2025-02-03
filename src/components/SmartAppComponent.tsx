import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import SearchComponent from './Search';
import ListComponent from './List';
import { ComicStore } from '../model/ComicStore/ComicStore';
import { setList, searchOptions, selectList, selectOptions } from '../features/slice';

interface SmartAppComponentProps {
  comicStore: ComicStore;
}

const SmartAppComponent = ({ comicStore }: SmartAppComponentProps) => {
  const comicsOptionList = useSelector(selectOptions);
  const comicsList = useSelector(selectList);
  const dispatch = useDispatch();
  const [comicsCount, setComicsCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const getCount = useCallback(async () => {
    setLoading(true);
    const _count = await comicStore.count();
    setComicsCount(_count);
    setLoading(false);
  }, [comicStore]);

  useEffect(() => {
    getCount();
  }, [getCount]);

  const handleClickOption = (option: string) => {
    const getListByKeyword = async () => {
      const list = await comicStore.listByKeyword(option);
      dispatch(setList(list));
    };

    getListByKeyword();
  };

  const handleSearchOption = (value: string) => {
    dispatch(searchOptions(value));
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <SearchComponent
        count={comicsCount}
        onSearch={handleSearchOption}
        onClickOption={handleClickOption}
        options={[...comicsOptionList]}
      />
      <ListComponent items={comicsList} />
    </>
  );
};

SmartAppComponent.propTypes = {
  comicStore: PropTypes.instanceOf(ComicStore).isRequired,
};

export default SmartAppComponent;
