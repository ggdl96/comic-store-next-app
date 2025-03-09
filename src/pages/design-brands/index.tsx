import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WrapperImage from '../../components/wrapper-image';
import { COMIC_BRANDS } from '../../../__mocks__/data/brands';
import MainDefault from '../../components/layouts/main-default';
import { brandList, setBrandList } from '../../features/comic-brands';
import { AppDispatch } from '../../store';

function Main() {
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector(brandList);

  useEffect(() => {
    dispatch(setBrandList([...COMIC_BRANDS]));
  }, [dispatch]);
  return (
    <MainDefault emptyBackgroundColorClass="bg-empty">
      <section className="flex flex-col">
        <div className="py-4 w-full">
          <h3 className="h3-brands text-base font-bold">Brands</h3>
        </div>
        <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {brands.map(brand => (
            <div key={`brand_${brand.id}`} className="brand-item flex flex-col items-center p-2">
              <div className="border-b border-gray-400 p-4 w-full relative h-[20vh]">
                <WrapperImage src={brand.image} alt={brand.name} fill />
              </div>
              <div className="w-full pb-4 bg-gray-200">
                <h3 className="text-lg font-medium">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainDefault>
  );
}

export default Main;
