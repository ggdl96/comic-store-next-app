import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COMIC_LIST } from '../../../__mocks__/data/comics';
import { selectComicsHomeList, setComicList } from '../../features/comics-home';
import { AppDispatch } from '../../store';
import ContainerComics from '../container-comics';
import MainContentLayout from '../layouts/main-default';
const MainContent = () => {
  const homeList = useSelector(selectComicsHomeList);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setComicList([...COMIC_LIST]));
  }, [dispatch]);

  return (
    <MainContentLayout emptyBackgroundColorClass="bg-empty">
      <main>
        <div className="flex flex-row h-32 sm:h-96 space-x-2">
          <Link className="bg-yellow-500 w-6/12 h-full" href="/design-highlights/a1234">
            <div></div>
          </Link>
          <Link href="/design-highlights/a1234" className="bg-red-500 w-6/12 h-full">
            <div></div>
          </Link>
        </div>
        <ContainerComics comicList={homeList} />
      </main>
    </MainContentLayout>
  );
};

export default MainContent;
