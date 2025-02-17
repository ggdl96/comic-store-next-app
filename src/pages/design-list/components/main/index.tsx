import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COMIC_LIST } from '../../../../../__mocks__/data/comics';
import ContainerComics from '../../../../components/container-comics';
import MainDefault from '../../../../components/layouts/main-default';
import { setComicList, comicList } from '../../../../features/comic-list';
import { AppDispatch } from '../../../../store';

function Main() {
  const dispatch = useDispatch<AppDispatch>();
  const comics = useSelector(comicList);

  useEffect(() => {
    dispatch(setComicList([...COMIC_LIST]));
  }, [dispatch]);
  return (
    <MainDefault emptyBackgroundColorClass="bg-empty">
      <section>
        <div>Results for: data</div>
        <ContainerComics comicList={comics} />
      </section>
    </MainDefault>
  );
}

export default Main;
